export interface EncryptionData {
    ct: string;
    key: string;
    iv: string;
}

export interface EncryptionResult {
    encryptionData: EncryptionData;
    formattedResult: string;
}

// Generate a random key for encryption (128-bit AES-GCM)
export async function generateKey(): Promise<CryptoKey> {
    return await crypto.subtle.generateKey(
        {
            name: 'AES-GCM',
            length: 128,
        },
        true,
        ['encrypt', 'decrypt'],
    );
}

// Convert string to Uint8Array
export function stringToArrayBuffer(str: string): Uint8Array {
    return new TextEncoder().encode(str);
}

// Convert ArrayBuffer to base64 string
export function arrayBufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

// Convert base64 string to ArrayBuffer
export function base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer as ArrayBuffer;
}

// Convert ArrayBuffer to string
export function arrayBufferToString(buffer: ArrayBuffer): string {
    return new TextDecoder().decode(buffer);
}

// Encrypt a string value
export async function encryptString(value: string): Promise<EncryptionResult> {
    if (!value.trim()) {
        throw new Error('Value cannot be empty');
    }

    // Generate a new key for this encryption
    const key: CryptoKey = await generateKey();

    // Generate random IV
    const iv: Uint8Array = crypto.getRandomValues(new Uint8Array(12));

    // Encrypt the value
    const encrypted: ArrayBuffer = await crypto.subtle.encrypt(
        {
            name: 'AES-GCM',
            iv: iv as BufferSource,
        },
        key,
        stringToArrayBuffer(value) as BufferSource,
    );

    // Export the key for storage/display
    const exportedKey: ArrayBuffer = await crypto.subtle.exportKey(
        'raw',
        key,
    );

    // Create encryption data object
    const encryptionData: EncryptionData = {
        ct: arrayBufferToBase64(encrypted),
        key: arrayBufferToBase64(exportedKey),
        iv: arrayBufferToBase64(iv.buffer as ArrayBuffer),
    };

    // Format result for display
    const formattedResult = JSON.stringify(encryptionData, null, 2);

    return { encryptionData, formattedResult };
}

// Decrypt encrypted data
export async function decryptString(
    encryptedText: string,
    keyBase64: string,
    ivBase64: string,
): Promise<string> {
    if (!encryptedText.trim() || !keyBase64.trim() || !ivBase64.trim()) {
        throw new Error('All decryption fields are required');
    }

    // Convert base64 strings back to ArrayBuffers
    const keyBuffer: ArrayBuffer = base64ToArrayBuffer(keyBase64);
    const encryptedBuffer: ArrayBuffer = base64ToArrayBuffer(encryptedText);
    const ivBuffer: ArrayBuffer = base64ToArrayBuffer(ivBase64);

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
    return arrayBufferToString(decrypted);
}
