
// somar pontos



let somar_pontos = document.getElementById("pontuar");
let pontos = 0

somar_pontos.addEventListener("click", function(){
pontos ++
document.getElementById("contador").innerText = pontos.toFixed(0)
subir_rank()
    
});



// rank


let ranking = document.getElementById("rank")
function subir_rank(){
    if (pontos >= 100000) {
    document.getElementById("rank").innerText = "Rei dos Macacos 👑"
}
else if (pontos >= 75000) {
    document.getElementById("rank").innerText = "Macaco Inteligente 🧠"
}
else if (pontos >= 50000) {
    document.getElementById("rank").innerText = "Macaco Caçador 🌿"
}
else if (pontos >= 30000) {
    document.getElementById("rank").innerText = "Macaco Guerreiro 🪖"
}
else if (pontos >= 10000) {
    document.getElementById("rank").innerText = "Macaco Saltador 🦘"
}
else if (pontos >= 1000) {
    document.getElementById("rank").innerText = "Macaco Aprendiz 🐵"
}
else if (pontos >= 10) {
    document.getElementById("rank").innerText = "Macaco Filhote 🐤"
}
else {
    document.getElementById("rank").innerText = "Macaco Bebê 🍼"
}
};




// auto click
let autoclicker_soma = 1
let autoclicker = document.getElementById("button_autoclick")
autoclicker.addEventListener("click", function(){
if(pontos>=200){
    pontos -= 200;


    setInterval(function(){
        pontos += autoclicker_soma;
        document.getElementById("contador").innerText = pontos.toFixed(0)
        subir_rank()
        
        autoclicker.disabled = true
        upgrade_button.disabled= false
    },1000)
    

}
})

// upgrade autoclicker

let price_upgrade = 20;




let upgrade_button = document.getElementById("upgrade_button")
upgrade_button.addEventListener("click",function(){
    if(pontos >= price_upgrade){
        
    // aumentar quantidade de pontos/seg do autoclick
    autoclicker_soma +=25;
    // aumenta o preco do upgrade a cada click
    console.log(price_upgrade)
    pontos -= price_upgrade
    price_upgrade *=5;

    // mudar a quantidade nos status
    label_upgrades = document.getElementById("total_upgrades").innerText= autoclicker_soma;

    document.getElementById("upgrade_price").innerText=price_upgrade.toFixed(0);   
    };
});
upgrade_button.disabled= true





// Tela dos ranks
let botao_ver_status = document.getElementById("buttonstatus")

botao_ver_status.addEventListener("click", function(){
    tela.style.display ="block";
});

let fechar_tela = document.getElementById("fechar")

fechar_tela.addEventListener("click",function(){
    tela.style.display= "none";
});

// comprar skin lendaria

let skin_legend = document.getElementById("skin")

skin_legend.addEventListener("click",function(){
    if(pontos>=10000){
    pontos -=10000
    document.getElementById("macaco").src="/macacos/macacolendario.png"    
    skin_legend.disabled =true
    }

});




