const olho = document.querySelector('.versenha')
const inputSenha = document.querySelector('.ipts')
const inputSenhaDois = document.querySelector('#passDois')



olho.addEventListener('click',()=>{
let nveR= olho.getAttribute('class')
if(nveR === 'material-symbols-outlined versenha'){
olho.setAttribute('class','material-symbols-outlined versenha nversenha')
olho.innerHTML='visibility'
inputSenha.setAttribute('type','text')
inputSenhaDois.setAttribute('type','text')
}

else
if(nveR==='material-symbols-outlined versenha nversenha'){
  olho.setAttribute('class','material-symbols-outlined versenha')
  olho.innerHTML='visibility_off'
 inputSenha.setAttribute('type','password')
inputSenhaDois.setAttribute('type','password')
}

 


})




























