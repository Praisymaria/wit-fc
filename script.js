console.log(" hi")


var a=10
var b=20
console.log("a+b")
console.log(a+b)
console.log(a*b)
console.log("a+b= "+a+b)

console.log("a+b= "+ Number(a+b))

function submit(){
  let text=prompt("enter name","xxx")
  if(text!=null){
      console.log("hello"+text);
  }
}
var inp=document.getElementById("demo").innerText
console.log(inp)
var w=document.getElementById("demo").innerHTML="helooo"
console.log(w)


// document.getElementById("demo")
const pi=3.14
function area(r){
    
    console.log("area of circle="+pi*r*r);
}

function add(){
    let val=document.getElementById("num").innerHTML
    let num=Number(val)+1
    document.getElementById("num").innerHTML=num
}

function sub(){
    let val=document.getElementById("num").innerHTML
    let num=Number(val)-1
    document.getElementById("num").innerHTML=num
}