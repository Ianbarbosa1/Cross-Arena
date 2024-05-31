function enviar(){
    var telefone = "5521998382523"

    var n = document.getElementById('nome')
    var i = document.getElementById('idade')
    var t = document.getElementById('numero')

    var nome = n.value
    var idade = i.value
    var numero = t.value


    var escolha = document.getElementById('sexo')
    var optionValue = escolha.options[escolha.selectedIndex]
    var genero  = optionValue.text
    

    var tipoPlano = document.getElementById('plano')
    var optionValue = tipoPlano.options[tipoPlano.selectedIndex]
    var plano = optionValue.text

    

    if(genero === "Selecione"){
        alert("Você não selecionou o gênero")
    }
    else if(plano === "Selecione"){
        alert("Você não selecionou o plano")
    }
    else if(nome === ""){
        alert("O campo Nome está incorreto")
    }
    else if(idade === ""){
        alert("O campo idade está incorreto")
    }
    else if(numero === ""){
        alert("O campo Número está incorreto")
    }
    else{
        var url = "http://wa.me/" + telefone + "?text="
        + "*Nome :* " +nome+"%0a"
        + "*Gênero :* " +genero+"%0a"
        + "*Idade :* " +idade+ "%0a"
        + "*Telefone :* " +numero+"%0a"
        + "*Tipo do Plano :* " +plano+"%0a"
        + "..."
        window.open(url).focus();
    }

    
}