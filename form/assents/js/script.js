function enviar(){
    var telefone = "5521972106538"

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

    

    if(nome === "" && genero === "Selecione" && idade === "" && numero === "" && plano === "Selecione"){
        alert("O formulário só será enviado se todos os campos estiverem completos!")
    }
    else if(nome === ""){
        alert("O campo Nome não foi preenchido!")
    }
    else if(genero === "Selecione"){
        alert("O campo Gênero não foi escolhido!")
    }
    else if(idade === ""){
        alert("O campo Idade não foi preenchido!")
    }
    else if(numero === ""){
        alert("O campo Número não foi preenchido!")
    }
    else if(plano === "Selecione"){
        alert("O campo Plano não foi escolhido!")
    }
    else{
        var url = "http://wa.me/" + telefone + "?text="
        + "*FORMULÁRIO CROSS ARENA*" + "%0a"
        + "*Nome :* " +nome+"%0a"
        + "*Gênero :* " +genero+"%0a"
        + "*Idade :* " +idade+ "%0a"
        + "*Telefone :* " +numero+"%0a"
        + "*Tipo do Plano :* " +plano+"%0a"
        + "..."
        window.open(url).focus();
    }

    
}
