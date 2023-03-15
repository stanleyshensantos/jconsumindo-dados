async function buscaEndereco(){
    var consultaCep = await fetch('https://viacep.com.br/ws/01001000/json/')
    var consultaCEPConvertida = await consultaCep.json();
    console.log(consultaCEPConvertida);
}


buscaEndereco();