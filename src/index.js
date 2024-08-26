const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = '';
    const exprArr = expr.split('');
    for (let i = 0; i < exprArr.length; i += 10) {
        const chunk = exprArr.slice(i, i + 10);
        if (chunk.join('') === '**********') {
            res += ' ';
        } else {
            const trimmedChunk = String(Number(chunk.join(''))).split('');
            let idx = ''
            for (let i = 0; i < trimmedChunk.length; i += 2) {
                const chunk = trimmedChunk.slice(i, i + 2).join('');
                if (chunk === '10') {
                    idx += '.'
                } else if (chunk === '11') {
                    idx += '-'
                }
            }
            res += MORSE_TABLE[idx];
        }
    }
    return res;
}

module.exports = {
    decode
}