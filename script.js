

function play(){
    let num1 = Math.random()*60;
    let p1 = document.getElementById('ply1')

    if(num1>0 && num1<=10){
        num1=1;
        p1.style.fontSize="100px";
        p1.innerHTML = ".";
    }
    else if(num1>10 && num1<=20){
        num1=2;
        p1.style.fontSize="100px";
        p1.innerHTML = "..";
    }
    else if(num1>20 && num1<=30){
        num1=3;
        p1.style.fontSize="100px";
        p1.innerHTML = "...";
    }
    else if(num1>30 && num1<=40){
        num1=4;
        p1.style.fontSize="100px";
        p1.innerHTML = "....";
    }
    else if(num1>40 && num1<=50){
        num1=5;
        p1.style.fontSize="100px";
        p1.innerHTML = ".....";
    }
    else if(num1>50 && num1<=60){
        num1=6;
        p1.style.fontSize="100px";
        p1.innerHTML = "......";
    }
    



    let num2 = Math.random()*60;
    let p2 = document.getElementById('ply2')


    if(num2>0 && num2<=10){
        num2=1;
        p2.style.fontSize="100px";
        p2.innerHTML = ".";
    }
    else if(num2>10 && num2<=20){
        num2=2;
        p2.style.fontSize="100px";
        p2.innerHTML = "..";
    }
    else if(num2>20 && num2<=30){
        num2=3;
        p2.style.fontSize="100px";
        p2.innerHTML = "...";
    }
    else if(num2>30 && num2<=40){
        num2=4;
        p2.style.fontSize="100px";
        p2.innerHTML = "....";
    }
    else if(num2>40 && num2<=50){
        num2=5;
        p2.style.fontSize="100px";
        p2.innerHTML = ".....";
    }
    else if(num2>50 && num2<=60){
        num2=6;
        p2.style.fontSize="100px";
        p2.innerHTML = "......";
    }

   
    if (num1>num2){
       let r = document.getElementById("result")
       r.style.color = "red";
       r.innerHTML = "AI Won! Tray Again";
    }
    else if (num2>num1){
        let r = document.getElementById("result")
       r.style.color = "green";
       r.innerHTML = "Congratulations... YOU Won!";
    }
    else if (num2==num1){
        let r = document.getElementById("result")
       r.style.color = "blue";
       r.innerHTML = "OOO Game Drow !! PLZ play Again";
    }



}



function g1(){
    let p1 = document.getElementById('ply1')
    p1.style.fontSize="40px";
    p1.innerHTML = "AI IS READY";

    let p2 = document.getElementById('ply2')
    p2.style.fontSize="40px";
    p2.innerHTML = "ARE YOU READY..!";

}

setTimeout(g1,1000)

