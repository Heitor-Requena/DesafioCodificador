function hasUpper(palavra){
    return /[A-Z]/.test(palavra);
}

function hasAcento(palavra){
    var reg = /[áàâãéèêíïóôõöúçñ]/;
    return reg.test(palavra);
}

function criptografar(){
    let caixaResposta = document.getElementById("msg_Resposta");
    let msg = document.getElementById("txt_Usuario").value;
    let palavras = msg.split(" ");
    let msgResposta = "";

    caixaResposta.innerHTML = "";

    if(hasAcento(msg) || hasUpper(msg)){
        let frase = hasUpper(msg) == true? "maiúsculas." : "com acento.";
        caixaResposta.innerHTML = `Não pode palavras ${frase}`;
    } else {
        palavras.forEach(function(palavra) {
            palavra = palavra.replaceAll("e", "enter");
            palavra = palavra.replaceAll("i", "imes");
            palavra = palavra.replaceAll("a", "ai");
            palavra = palavra.replaceAll("o", "ober");
            palavra = palavra.replaceAll("u", "ufat");
    
            msgResposta += " " + palavra;
        });
    
        caixaResposta.innerHTML += msgResposta;
    }

    /*
    palavras.forEach(function(palavra) {
        for (letra = 0; letra < palavra.length; letra++) {
            if (palavra[letra] == "a"){
                palavra[letra] = "ai";

        }
    });
    */
    
}

function descriptografar(){
    let caixaResposta = document.getElementById("msg_Resposta");
    let msg = document.getElementById("txt_Usuario").value;
    let palavras = msg.split(" ");
    let msgResposta = "";

    caixaResposta.innerHTML = "";

    if(hasAcento(msg) || hasUpper(msg)){
        let frase = hasUpper(msg) == true? "maiúsculas." : "com acento.";
        caixaResposta.innerHTML = `Não pode palavras ${frase}`;
    } else {

        palavras.forEach(function(palavra) {
            palavra = palavra.replaceAll("enter", "e");
            palavra = palavra.replaceAll("imes", "i");
            palavra = palavra.replaceAll("ai", "a");
            palavra = palavra.replaceAll("ober", "o");
            palavra = palavra.replaceAll("ufat", "u");

            msgResposta += " " + palavra;
        });

        caixaResposta.innerHTML += msgResposta;
    }
}

function copiar(){
    let textoCopiado = document.getElementById("msg_Resposta");
    navigator.clipboard.writeText(textoCopiado.innerHTML);
    alert("TEXTO COPIADO");
}
