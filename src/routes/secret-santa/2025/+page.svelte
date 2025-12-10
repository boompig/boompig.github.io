<script lang="ts">
    import Button from '$lib/Button.svelte';
    import Input from '$lib/Input.svelte';
    import EncryptionResult from '$lib/EncryptionResult.svelte';

    // Encryption state
    let nameValue: string = $state('');
    let encryptedResult: string = $state('');
    let isEncrypting: boolean = $state(false);
    let error: string = $state('');

    // Decryption state
    let encryptedText: string = $state('');
    let decryptionKey: string = $state('');
    let ivValue: string = $state('');
    let decryptedResult: string = $state('');
    let isDecrypting: boolean = $state(false);
    let decryptionError: string = $state('');

    // URL state
    let encryptionData: { ct: string; key: string; iv: string } | null =
        $state(null);
    let isCopying: boolean = $state(false);
    let isDecryptMode: boolean = $state(false);

    // Generate a random key for demonstration (in real app, you'd manage keys securely)
    async function generateKey(): Promise<CryptoKey> {
        return await crypto.subtle.generateKey(
            {
                name: 'AES-GCM',
                length: 128,
            },
            true,
            ['encrypt', 'decrypt'],
        );
    }

    // Convert string to ArrayBuffer
    function stringToArrayBuffer(str: string): Uint8Array {
        return new TextEncoder().encode(str);
    }

    // Convert ArrayBuffer to base64 string
    function arrayBufferToBase64(buffer: ArrayBuffer): string {
        const bytes = new Uint8Array(buffer);
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }

    // Encrypt the name
    async function encryptName(): Promise<void> {
        if (!nameValue.trim()) {
            error = 'Please enter a name to encrypt';
            return;
        }

        try {
            isEncrypting = true;
            error = '';

            // Generate a new key for this encryption
            const key: CryptoKey = await generateKey();

            // Generate random IV
            const iv: Uint8Array = crypto.getRandomValues(new Uint8Array(12));

            // Encrypt the name
            const encrypted: ArrayBuffer = await crypto.subtle.encrypt(
                {
                    name: 'AES-GCM',
                    iv: iv as BufferSource,
                },
                key,
                stringToArrayBuffer(nameValue) as BufferSource,
            );

            // Export the key for display
            const exportedKey: ArrayBuffer = await crypto.subtle.exportKey(
                'raw',
                key,
            );

            // Store encryption data
            encryptionData = {
                ct: arrayBufferToBase64(encrypted),
                key: arrayBufferToBase64(exportedKey),
                iv: arrayBufferToBase64(iv.buffer as ArrayBuffer),
            };

            // Format result for display
            encryptedResult = JSON.stringify(encryptionData, null, 2);
        } catch (err: unknown) {
            error = `Encryption failed: ${err instanceof Error ? err.message : String(err)}`;
            encryptedResult = '';
        } finally {
            isEncrypting = false;
        }
    }

    // Convert base64 string to ArrayBuffer
    function base64ToArrayBuffer(base64: string): ArrayBuffer {
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        return bytes.buffer as ArrayBuffer;
    }

    // Convert ArrayBuffer to string
    function arrayBufferToString(buffer: ArrayBuffer): string {
        return new TextDecoder().decode(buffer);
    }

    // Decrypt the data
    async function decryptData(): Promise<void> {
        if (!encryptedText.trim() || !decryptionKey.trim() || !ivValue.trim()) {
            decryptionError = 'Please fill in all decryption fields';
            return;
        }

        try {
            isDecrypting = true;
            decryptionError = '';

            // Convert base64 strings back to ArrayBuffers
            const keyBuffer: ArrayBuffer = base64ToArrayBuffer(decryptionKey);
            const encryptedBuffer: ArrayBuffer = base64ToArrayBuffer(encryptedText);
            const ivBuffer: ArrayBuffer = base64ToArrayBuffer(ivValue);

            // Import the key
            const key: CryptoKey = await crypto.subtle.importKey(
                'raw',
                keyBuffer,
                { name: 'AES-GCM' },
                false,
                ['decrypt'],
            );

            // Decrypt the data
            const decrypted: ArrayBuffer = await crypto.subtle.decrypt(
                {
                    name: 'AES-GCM',
                    iv: ivBuffer,
                },
                key,
                encryptedBuffer,
            );

            // Convert back to string
            decryptedResult = arrayBufferToString(decrypted);
        } catch (err: unknown) {
            decryptionError = `Decryption failed: ${err instanceof Error ? err.message : String(err)}`;
            decryptedResult = '';
        } finally {
            isDecrypting = false;
        }
    }

    // Handle form submissions
    function handleEncryptSubmit(event: SubmitEvent): void {
        event.preventDefault();
        encryptName();
    }

    function handleDecryptSubmit(event: SubmitEvent): void {
        event.preventDefault();
        decryptData();
    }

    // Copy encryption data to URL
    async function copyToUrl(): Promise<void> {
        if (!encryptionData) return;

        try {
            isCopying = true;

            const url = new URL(window.location.href);
            url.searchParams.set('op', 'd');
            url.searchParams.set('ct', encryptionData.ct);
            url.searchParams.set('key', encryptionData.key);
            url.searchParams.set('iv', encryptionData.iv);

            await navigator.clipboard.writeText(url.toString());

            // Brief visual feedback
            setTimeout(() => {
                isCopying = false;
            }, 1000);
        } catch (err: unknown) {
            console.error('Failed to copy URL:', err);
            isCopying = false;
        }
    }

    // Read URL parameters on page load
    function readFromUrl(): void {
        if (typeof window === 'undefined') return;

        const url = new URL(window.location.href);
        const op = url.searchParams.get('op');
        const ct = url.searchParams.get('ct');
        const key = url.searchParams.get('key');
        const iv = url.searchParams.get('iv');

        // Set decrypt mode if op=d is present
        if (op === 'd') {
            isDecryptMode = true;
        }

        if (ct && key && iv) {
            encryptedText = ct;
            decryptionKey = key;
            ivValue = iv;
        }
    }

    // Run URL reading on mount
    if (typeof window !== 'undefined') {
        readFromUrl();
    }
</script>

<svelte:head>
    <title>Secret Santa 2025 | kats.coffee</title>
</svelte:head>

<h1>Secret Santa 2025</h1>
<p>Santa is a secret agent.</p>

{#if !isDecryptMode}
    <section class="encrypt-section">
        <h2>Encrypt Name</h2>
        <form onsubmit={handleEncryptSubmit}>
            <Input
                placeholder="Enter your name"
                bind:value={nameValue}
                required
                {error}
            />
            <Button
                type="submit"
                variant="primary"
                disabled={isEncrypting || !nameValue.trim()}
            >
                {isEncrypting ? 'Encrypting...' : 'Encrypt'}
            </Button>
        </form>

        <EncryptionResult result={encryptedResult} />

        {#if encryptionData}
            <div class="url-actions">
                <Button
                    variant="accent"
                    size="small"
                    onclick={copyToUrl}
                    disabled={isCopying}
                >
                    {isCopying ? 'Copied!' : 'Copy to URL'}
                </Button>
                <p class="url-note">Copy URL to share encryption data for decryption</p>
            </div>
        {/if}
    </section>
{/if}

<section class="decrypt-section">
    <h2>Decrypt Name</h2>
    <form onsubmit={handleDecryptSubmit}>
        <Input
            placeholder="Enter encrypted text (base64)"
            bind:value={encryptedText}
            required
            error={decryptionError}
        />
        <Input
            placeholder="Enter key (base64)"
            bind:value={decryptionKey}
            required
        />
        <Input placeholder="Enter IV (base64)" bind:value={ivValue} required />
        <Button
            type="submit"
            variant="secondary"
            disabled={isDecrypting ||
                !encryptedText.trim() ||
                !decryptionKey.trim() ||
                !ivValue.trim()}
        >
            {isDecrypting ? 'Decrypting...' : 'Decrypt'}
        </Button>
    </form>

    {#if decryptedResult}
        <div class="decrypted-result">
            <h3>Decrypted Name</h3>
            <div class="name-output">{decryptedResult}</div>
        </div>
    {/if}
</section>

<style>
  h2 {
    margin-bottom: 2px;
  }

  .encrypt-section,
  .decrypt-section {
    margin: 2rem 0;
    padding: 2rem;
    background-color: var(--white);
    border-radius: 12px;
    border: 2px solid var(--coffee-light);
  }

  .decrypt-section {
    border-color: var(--accent);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .decrypted-result {
    margin-top: 2rem;
    padding: 2rem;
    background-color: var(--cream);
    border: 2px solid var(--coffee-medium);
    border-radius: 12px;
  }

  .decrypted-result h3 {
    margin-bottom: 1rem;
    color: var(--coffee-dark);
    font-family: "Space Mono", monospace;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .name-output {
    text-transform: uppercase;
    /* background-color: var(--white);
    border: 2px solid var(--coffee-light);
    border-radius: 8px;
    padding: 1rem;
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
    font-weight: 700;
    color: var(--coffee-dark);
    text-align: center;
    letter-spacing: 1px; */
  }

  .url-actions {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #f0f9ff;
    border: 2px solid var(--accent);
    border-radius: 8px;
    text-align: center;
  }

  .url-note {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: var(--coffee-medium);
    font-style: italic;
  }
</style>
