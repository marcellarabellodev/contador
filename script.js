
function contar(){ 
    let inicio = window.document.getElementById('inicio');
    let fim = window.document.getElementById('fim');
    let passo = window.document.getElementById('passo');
    let resultado = window.document.getElementById('resultado');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        resultado.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
        
    } else{
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p<= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f){
            // contagem crescente
            for(let contador = i; contador <= f; contador += p){
                resultado.innerHTML += `${contador} \u{1F449}`
             }
             
        } else {
            // contagem regressiva
            for (let contador = i; contador >= f; c -= p){
                resultado.innerHTML += `${contador} \u{1F449}`
            }
        }
        resultado.innerHTML == `\u{270B}` 
    }
}