class VigenèreCipher {
    constructor(key, alphabet) {
        this.key = key;
        this.alphabet = alphabet;
    }

    encode(message) {
        return this.chiper(message, 'encode');
    }

    decode(message) {
        return this.chiper(message, 'decode');
    }

    chiper(message, operation) {
        const keyLength = this.key.length;
        let result = '';

        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            if (this.alphabet.includes(char)) {
                const keyChar = this.key[i % keyLength];
                const alphabetIndex = this.alphabet.indexOf(char);
                const keyIndex = this.alphabet.indexOf(keyChar);
                let shiftedIndex;

                if (operation === 'encode') {
                    shiftedIndex = (alphabetIndex + keyIndex) % this.alphabet.length;
                } else if (operation === 'decode') {
                    shiftedIndex = (alphabetIndex - keyIndex + this.alphabet.length) % this.alphabet.length;
                }

                result += this.alphabet[shiftedIndex];
            } else {
                result += char;
            }
        }

        return result;
    }
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let key = 'password';
let c = new VigenèreCipher(key, alphabet);

console.log(c.encode('codewars'));
console.log(c.decode('rovwsoiv'));
console.log(c.encode('CODEWARS'));