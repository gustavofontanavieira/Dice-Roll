//NÃO CONSEGUI PENSAR NENHUMA MANEIRA MELHOR  DE FAZER ISSO, QUEM SABE MAIS PRA FRENTE ENTENDA MAIS
function navd4(){
    document.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".nav-link")[0].classList.add("active");
    document.querySelector(".lados").textContent = "d4";
    document.querySelector(".dado-lado").setAttribute("src", "images/d4.png");
    
}

function navd6(){
    document.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".nav-link")[1].classList.add("active");
    document.querySelector(".lados").textContent = "d6";
    document.querySelector(".dado-lado").setAttribute("src", "images/d6.png");
}

function navd8(){
    document.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".nav-link")[2].classList.add("active");
    document.querySelector(".lados").textContent = "d8";
    document.querySelector(".dado-lado").setAttribute("src", "images/d8.png");
}

function navd10(){
    document.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".nav-link")[3].classList.add("active");
    document.querySelector(".lados").textContent = "d10";
    document.querySelector(".dado-lado").setAttribute("src", "images/d10.png");
}

function navd12(){
    document.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".nav-link")[4].classList.add("active");
    document.querySelector(".lados").textContent = "d12";
    document.querySelector(".dado-lado").setAttribute("src", "images/d12.jpg");
}

function navd20(){
    document.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".nav-link")[5].classList.add("active");
    document.querySelector(".lados").textContent = "d20";
    document.querySelector(".dado-lado").setAttribute("src", "images/d20.png");
}


function rolarDado(){
    var dadoQueVaiRolar = document.querySelector(".active").textContent;
    if ( dadoQueVaiRolar === "d4" ){
        var roll = Math.floor( Math.random() * 4 ) + 1;
        document.querySelector(".valor-dado").style.marginLeft = "33rem"
        document.querySelector(".valor-dado").textContent = roll;
    } else if ( dadoQueVaiRolar === "d6" ) { 
        var roll = Math.floor( Math.random() * 6 ) + 1;
        document.querySelector(".valor-dado").style.marginLeft = "33rem"
        document.querySelector(".valor-dado").textContent = roll;
    }  else if ( dadoQueVaiRolar === "d8" ) { 
        var roll = Math.floor( Math.random() * 8 ) + 1;
        document.querySelector(".valor-dado").style.marginLeft = "33rem"
        document.querySelector(".valor-dado").textContent = roll;
    }  else if ( dadoQueVaiRolar === "d10" ) { 
        var roll = Math.floor( Math.random() * 10 ) + 1;
        if (roll >= 10 ){
            document.querySelector(".valor-dado").style.marginLeft = "32rem"
            document.querySelector(".valor-dado").textContent = roll;
        } else {
            document.querySelector(".valor-dado").style.marginLeft = "33.2rem"
            document.querySelector(".valor-dado").textContent = roll;
        }
    }  else if ( dadoQueVaiRolar === "d12" ) { 
        var roll = Math.floor( Math.random() * 12 ) + 1;
        if (roll >= 10 ){
            document.querySelector(".valor-dado").style.marginLeft = "32rem"
            document.querySelector(".valor-dado").textContent = roll;

        } else {
            document.querySelector(".valor-dado").style.marginLeft = "33.2rem"
            document.querySelector(".valor-dado").textContent = roll;
        }
    }  else if ( dadoQueVaiRolar === "d20" ) { 
        var roll = Math.floor( Math.random() * 20 ) + 1;
        if (roll >= 10 ){
            document.querySelector(".valor-dado").style.marginLeft = "32rem"
            document.querySelector(".valor-dado").textContent = roll;

        } else {
            document.querySelector(".valor-dado").style.marginLeft = "33.2rem"
            document.querySelector(".valor-dado").textContent = roll;
        }
    
    }





}

