let inscritti =["matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com"];

let startButton = document.getElementById("button");

startButton.addEventListener('click', function(){

    let mail = document.getElementById("input-mail").value;
    console.log(mail);
    let contrtollo = false;

    for (let i = 0; i < inscritti.length; i++) {
        if(inscritti[i] == mail){
            contrtollo = true;
            break;
        }else{
        }
    }
    if(contrtollo){
        console.log("Benvenuto! "+ mail.replace("@gmail.com",""));
    } else {
        console.log("La mail non è presente nel DB");
    }


})

