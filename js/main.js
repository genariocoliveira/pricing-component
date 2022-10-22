function myFunction1() {
  var element = document.querySelector("#cards-content");
  element.classList.toggle("active");
}
function myFunction2() {
  var element = document.querySelector("#cards-content2");
  element.classList.toggle("active");
}
function myFunction3() {
  var element = document.getElementById("cards-content3");
  element.classList.toggle("active");
}

var v1 = document.querySelector('.v1')
var v2 = document.querySelector('.v2')
var v3 = document.querySelector('.v3')
function myFunctionC() {
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true){
    console.log('true')
    v1.innerHTML='&dollar;19.99'
    v2.innerHTML='&dollar;24.99'
    v3.innerHTML='&dollar;39.99'
  } else {
     console.log('false')
     v1.innerHTML='&dollar;199.99'
     v2.innerHTML='&dollar;249.99'
     v3.innerHTML='&dollar;399.99'
  }
}