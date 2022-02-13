let txt = '';
let n = 0;

function cryptography() {
    let value = document.getElementById('crypt').value
    let result = document.getElementById('result')

    result.innerText = ''

    value = value.replaceAll('e', 'enter')
    value = value.replaceAll('i', 'imes')
    value = value.replaceAll('a', 'ai')
    value = value.replaceAll('o', 'ober')
    value = value.replaceAll('u', 'ufat')

    txt = value
    n = 0

    typeWriter()
    //result.innerText = value
    /* console.log(value) */
}

function decryption() {
    let value = document.getElementById('crypt').value
    let result = document.getElementById('result')

    result.innerText = ''

    value = value.replaceAll('enter', 'e')
    value = value.replaceAll('imes', 'i')
    value = value.replaceAll('ai', 'a')
    value = value.replaceAll('ober', 'o')
    value = value.replaceAll('ufat', 'u')

    txt = value
    n = 0

    typeWriter()
    //result.innerText = value
    /* console.log(result) */
}

function copy() {
    let value = document.getElementById('result').innerText
    console.log(value)
    navigator.clipboard.writeText(value)
}



function typeWriter() {
    let speed = 50;

    console.log(txt.length)
    
    if (n < txt.length) {
        console.log(txt.length)
        document.getElementById("result").innerText += txt.charAt(n);
        n++;
        setTimeout(typeWriter, speed);
    }
}