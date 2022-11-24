const card = document.getElementById('cards-content')
const card2 = document.getElementById('cards-content2')
const card3 = document.getElementById('cards-content3')

card.addEventListener('click', ()=>{
  card.classList.toggle('active')
  card2.classList.remove('active')
  card3.classList.remove('active')
})
card2.addEventListener('click', ()=>{
  card2.classList.toggle('active')
  card.classList.remove('active')
  card3.classList.remove('active')
})
card3.addEventListener('click', ()=>{
  card3.classList.toggle('active')
  card.classList.remove('active')
  card2.classList.remove('active')
})


var v1 = document.querySelector('.v1')
var v2 = document.querySelector('.v2')
var v3 = document.querySelector('.v3')
function myFunctionC() {
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true){
    console.log('true')
    v1.innerHTML='R&dollar; 19.99'
    v2.innerHTML='R&dollar; 24.99'
    v3.innerHTML='R&dollar; 39.99'
  } else {
     console.log('false')
     v1.innerHTML='R&dollar; 199.99'
     v2.innerHTML='R&dollar; 249.99'
     v3.innerHTML='R&dollar; 399.99'
  }
}