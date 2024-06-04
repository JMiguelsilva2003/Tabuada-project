function tabuada(){
    let num = document.getElementById("txtn");
    let tab = document.getElementById("seltab");
    let res = document.getElementById("res");
    if(num.value.length == 0) {
        alert("Por favor, digite um número!");
    }else{
        let n = Number(num.value)
        tab.innerHTML = ""; //para limpar a tabuada depois de colocar os numeros
        for(let c = 1; c <= 10; c++){
            let item = document.createElement("option");
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
        }
        res.innerHTML = `A tabuada de ${n} está pronta!`;
    }
}