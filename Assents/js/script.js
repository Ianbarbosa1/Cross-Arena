var hora = new Date().getHours()


/*SELEÇÃO DAS IDs*/
let produto1 = document.getElementById('p1')
let produto2 = document.getElementById('p2')
let produto3 = document.getElementById('p3')
let produto4 = document.getElementById('p4')
let produto5 = document.getElementById('p5')
let produto6 = document.getElementById('p6')
let produto7 = document.getElementById('p7')
let produto8 = document.getElementById('p8')

var frase = [
    `Bom+dia,+Queria+saber+mais+informações+das+Coqueteleiras`,
    `Boa+tarde,+Queria+saber+mais+informações+das+Coqueteleiras`,
    `Boa+noite,+Queria+saber+mais+informações+das+Coqueteleiras`,

    `Bom+dia,+Queria+saber+mais+informações+das+Camisas`,
    `Boa+tarde,+Queria+saber+mais+informações+das+Camisas`,
    `Boa+noite,+Queria+saber+mais+informações+das+Camisas`,

    `Bom+dia,+Queria+saber+mais+informações+do+Mani+force`,
    `Boa+tarde,+Queria+saber+mais+informações+do+Mani+force`,
    `Boa+noite,+Queria+saber+mais+informações+do+Mani+force`,

    `Bom+dia,+Queria+saber+mais+informações+do+Whey`,
    `Boa+tarde,+Queria+saber+mais+informações+do+Whey`,
    `Boa+noite,+Queria+saber+mais+informações+do+Whey`,

    `Bom+dia,+Queria+saber+mais+informações+da+Creatina`,
    `Boa+tarde,+Queria+saber+mais+informações+da+Creatina`,
    `Boa+noite,+Queria+saber+mais+informações+da+Creatina`,

    `Bom+dia,+Queria+saber+mais+informações+do+Malto`,
    `Boa+tarde,+Queria+saber+mais+informações+do+Malto`,
    `Boa+noite,+Queria+saber+mais+informações+do+Malto`,

    `Bom+dia,+Queria+saber+mais+informações+do+Thermo`,
    `Boa+tarde,+Queria+saber+mais+informações+do+Thermo`,
    `Boa+noite,+Queria+saber+mais+informações+do+Thermo`,

    `Bom+dia,+Queria+saber+mais+informações+da+Albumina`,
    `Boa+tarde,+Queria+saber+mais+informações+da+Albumina`,
    `Boa+noite,+Queria+saber+mais+informações+da+Albumina`,
]


if (hora >= 6 && hora <= 12){
    produto1.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[0]}"> <p class="tipo-produto">Coqueteleira</p> <img src="./Assents/imagens/PRODUTOS/coqueteleira.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto2.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[3]}"> <p class="tipo-produto">Camisas</p> <img src="./Assents/imagens/PRODUTOS/black-img.jpg"> <p class="valor-produto">00,00</p> </a>`
    produto3.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[6]}"> <p class="tipo-produto">Mani force</p> <img src="./Assents/imagens/PRODUTOS/mani force.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto4.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[9]}"> <p class="tipo-produto">Whey</p> <img src="./Assents/imagens/PRODUTOS/whey.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto5.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[12]}"> <p class="tipo-produto">Creatina</p> <img src="./Assents/imagens/PRODUTOS/creatina.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto6.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[15]}"> <p class="tipo-produto">Malto</p> <img src="./Assents/imagens/PRODUTOS/malto.jpg"> <p class="valor-produto">00,00</p> </a>`
    produto7.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[18]}"> <p class="tipo-produto">Thermo</p> <img src="./Assents/imagens/PRODUTOS/termo.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto8.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[21]}"> <p class="tipo-produto">Malto</p> <img src="./Assents/imagens/PRODUTOS/albumina.jpeg"> <p class="valor-produto">00,00</p> </a>`
}
else if (hora >= 13 && hora <= 17){
    produto1.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[1]}"> <p class="tipo-produto">Coqueteleira</p> <img src="./Assents/imagens/PRODUTOS/coqueteleira.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto2.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[4]}"> <p class="tipo-produto">Camisas</p> <img src="./Assents/imagens/PRODUTOS/black-img.jpg"> <p class="valor-produto">00,00</p> </a>`
    produto3.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[7]}"> <p class="tipo-produto">Mani force</p> <img src="./Assents/imagens/PRODUTOS/mani force.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto4.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[10]}"> <p class="tipo-produto">Whey</p> <img src="./Assents/imagens/PRODUTOS/whey.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto5.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[13]}"> <p class="tipo-produto">Creatina</p> <img src="./Assents/imagens/PRODUTOS/creatina.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto6.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[16]}"> <p class="tipo-produto">Malto</p> <img src="./Assents/imagens/PRODUTOS/malto.jpg"> <p class="valor-produto">00,00</p> </a>`
    produto7.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[19]}"> <p class="tipo-produto">Thermo</p> <img src="./Assents/imagens/PRODUTOS/termo.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto8.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[22]}"> <p class="tipo-produto">Malto</p> <img src="./Assents/imagens/PRODUTOS/albumina.jpeg"> <p class="valor-produto">00,00</p> </a>`
}
else if(hora >= 18 && hora <= 23){
    produto1.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[2]}"> <p class="tipo-produto">Coqueteleira</p> <img src="./Assents/imagens/PRODUTOS/coqueteleira.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto2.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[5]}"> <p class="tipo-produto">Camisas</p> <img src="./Assents/imagens/PRODUTOS/black-img.jpg"> <p class="valor-produto">00,00</p> </a>`
    produto3.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[8]}"> <p class="tipo-produto">Mani force</p> <img src="./Assents/imagens/PRODUTOS/mani force.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto4.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[11]}"> <p class="tipo-produto">Whey</p> <img src="./Assents/imagens/PRODUTOS/whey.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto5.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[14]}"> <p class="tipo-produto">Creatina</p> <img src="./Assents/imagens/PRODUTOS/creatina.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto6.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[17]}"> <p class="tipo-produto">Malto</p> <img src="./Assents/imagens/PRODUTOS/malto.jpg"> <p class="valor-produto">00,00</p> </a>`
    produto7.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[20]}"> <p class="tipo-produto">Thermo</p> <img src="./Assents/imagens/PRODUTOS/termo.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto8.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[23]}"> <p class="tipo-produto">Malto</p> <img src="./Assents/imagens/PRODUTOS/albumina.jpeg"> <p class="valor-produto">00,00</p> </a>`
}
else if(hora >= 0 && hora <= 5){
    produto1.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[2]}"> <p class="tipo-produto">Coqueteleira</p> <img src="./Assents/imagens/PRODUTOS/coqueteleira.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto2.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[5]}"> <p class="tipo-produto">Camisas</p> <img src="./Assents/imagens/PRODUTOS/black-img.jpg"> <p class="valor-produto">00,00</p> </a>`
    produto3.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[8]}"> <p class="tipo-produto">Mani force</p> <img src="./Assents/imagens/PRODUTOS/mani force.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto4.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[11]}"> <p class="tipo-produto">Whey</p> <img src="./Assents/imagens/PRODUTOS/whey.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto5.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[14]}"> <p class="tipo-produto">Creatina</p> <img src="./Assents/imagens/PRODUTOS/creatina.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto6.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[17]}"> <p class="tipo-produto">Malto</p> <img src="./Assents/imagens/PRODUTOS/malto.jpg"> <p class="valor-produto">00,00</p> </a>`
    produto7.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[20]}"> <p class="tipo-produto">Thermo</p> <img src="./Assents/imagens/PRODUTOS/termo.jpeg"> <p class="valor-produto">00,00</p> </a>`
    produto8.innerHTML = `<a href="https://wa.me/5521972106538?text=${frase[23]}"> <p class="tipo-produto">Malto</p> <img src="./Assents/imagens/PRODUTOS/albumina.jpeg"> <p class="valor-produto">00,00</p> </a>`
}



