var l = document.getElementById("lnum");
var r = document.getElementById("rnum");
var ln = prompt("左邊數字");
var rn = prompt("右邊數字");
var lnc = prompt("左邊計算 例如 -9 , 9");
var rnc = prompt("右邊計算 例如 -9 , 9");

l.innerHTML = l.innerHTML + (`${ln}`)
r.innerHTML = r.innerHTML + (`${rn}`)

function submit() {
    ln = parseFloat(ln) - parseFloat(lnc);
    rn = parseFloat(rn) - parseFloat(rnc)
    l.innerHTML =(`${ln}`)
    r.innerHTML =(`${rn}`)
}