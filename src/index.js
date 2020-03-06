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
    ' ': ''
};

function decode(expr) {
    // write your solution here
        const message =[];
        let temp = '';
        let res = '';
        for(let i = 0; i != expr.length;i+=10){
            let temp2 ='';
            temp = expr.substring(i, i+10);
            if(temp ==='**********'){
                temp2+=' ';            
            }
            temp.split('');
            for(let j = 0; j!= temp.length;j+=2){
                if(temp[j]==='1' && temp[j+1]==='0'){
                    temp2+='.';
                }
                if(temp[j]==='1' && temp[j+1]==='1'){
                    temp2+='-';
                }
                else{
                    temp2+='';
                }
            }
            message.push(temp2)
        }
        for(let i = 0;i != message.length;++i)
        {
            for (let [key, value] of Object.entries(MORSE_TABLE)) {
                if(message[i] === key){
                    res += `${value}`;
                }
                
            }
            if(message[i] === ' '){
                    res += ' ';
            }

        }
        return res;
}

module.exports = {
    decode
}