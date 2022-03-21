let name="kerqe"
let surname="urbyk"
// alert ("hello "+name+" "+surname);
console.log(document.querySelector(".a").value)
document.querySelector(".c").onclick=function(){
    let number_1 = document.querySelector(".a").value;
    let number_2 = document.querySelector(".b").value;
    alert (parseInt(number_1)+parseInt(number_2));
}
document.querySelector(".d").onclick=function(){
    let number_1 = document.querySelector(".a").value;
    let number_2 = document.querySelector(".b").value;
    alert (parseInt(number_1)-parseInt(number_2));
}
document.querySelector(".e").onclick=function(){
    let number_1 = document.querySelector(".a").value;
    let number_2 = document.querySelector(".b").value;
    alert (parseInt(number_1)*parseInt(number_2));
}
document.querySelector(".f").onclick=function(){
    let number_1 = document.querySelector(".a").value;
    let number_2 = document.querySelector(".b").value;
    alert (parseInt(number_1)/parseInt(number_2));
}
