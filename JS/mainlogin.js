const olho = document.querySelector('.versenha')
const inputSenha = document.querySelector('#ipts')



olho.addEventListener('click',()=>{
let nveR= olho.getAttribute('class')
if(nveR === 'material-symbols-outlined versenha'){
olho.setAttribute('class','material-symbols-outlined versenha nversenha')
olho.innerHTML='visibility'
inputSenha.setAttribute('type','text')
console.log(olho)
}
else
if(olho.innerHTML=='visibility'){
  olho.setAttribute('class','material-symbols-outlined versenha')
  olho.innerHTML='visibility_off'
 inputSenha.setAttribute('type','password')
console.log(olho)
}

 


})





/*btss.addEventListener('click',()=>{
  btss.innerHTML='visibility_off'
  InputsConfirm.setAttribute('type','text')
  console.log(InputsConfirm)

})*/






















