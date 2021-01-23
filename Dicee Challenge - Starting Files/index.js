function roll(){    
var randomnum1 = Math.floor(Math.random()*6+1);
var randomdice1 ="dice"+randomnum1+".png";
var imgsource = randomdice1;
var imgsrc =  document.querySelector(".img1");
imgsrc.setAttribute("src",imgsource);


var randomnum2 = Math.floor(Math.random()*6+1);
var randomdice2 ="dice"+randomnum2+".png";
var imgsource1 = randomdice2;
var imgsrc1 =  document.querySelector(".img2");
imgsrc1.setAttribute("src",imgsource1);

if(randomnum1 > randomnum2){
    document.querySelector("h1").textContent = "player 1 win !!";
}else if(randomnum1 < randomnum2) {
    document.querySelector("h1").textContent = "player 2 win !!";
}else{
    document.querySelector("h1").textContent = "Its an draw ??";
}
}