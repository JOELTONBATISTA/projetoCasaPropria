const button = document.querySelector('#btcad')
const Nome = document.querySelector('#Nome')
const Email = document.querySelector('#Email')
const password = document.querySelector('#passUm')
const confirmPassword = document.querySelector('#passDois')
const Fone= document.querySelector('#Fone')
const alerta= document.querySelector('#ocultaAlert')


let userRegistrado=[]

button.addEventListener('click',(e)=>{
    e.preventDefault()
  let NomeValue = Nome.value
  let EmailValue = Email.value
  let passwordValue = password.value
  let confirmPasswordValue = confirmPassword.value
  let FoneValue = Fone.value

  let caractNome=NomeValue.length
  let caractEmail=EmailValue.length
  let caractSenha=passwordValue.length
  let caractFone=FoneValue.length
  //let caractConfSenha=confirmPassword.length

  const incrementa=[{
   Nome: NomeValue,
    Email: EmailValue,
    password: passwordValue,
    confirmPassword: confirmPasswordValue,
   Fone: FoneValue 
  }]

if(NomeValue==='' && EmailValue==='' && passwordValue===''&& confirmPasswordValue===''&& FoneValue===''){
  alerta.setAttribute('class','showAlertVazio')
alerta.innerHTML='Preenchimento dos campos obrigátorios!'
setTimeout(()=>{alerta.setAttribute('class','ocultaAlert')},3000)
}
else if(NomeValue!=='' && EmailValue!=='' && passwordValue!==''&& confirmPasswordValue!=='' && passwordValue !== confirmPasswordValue && FoneValue!==''){
  
  alerta.setAttribute('class','showAlertVazio')
  alerta.innerHTML='A senhas não conferem!'

  setTimeout(()=>{alerta.setAttribute('class','ocultaAlert')},3000)

}
  else if(NomeValue!=='' && EmailValue!=='' && passwordValue!==''&& confirmPasswordValue!=='' && passwordValue === confirmPasswordValue && FoneValue!=='' && caractNome>=8 && caractEmail>12 && caractSenha>=6 && caractFone>=11){
 userRegistrado.push(incrementa)
 let ListaSalva = JSON.stringify(userRegistrado)
window.localStorage.setItem('Lista2',ListaSalva)
Nome.value=''
Email.value=''
password.value=''
confirmPassword.value=''
Fone.value=''
alerta.setAttribute('class','showAlert')
alerta.innerHTML='Cadastro realizado com sucesso..'
setTimeout(()=>{alerta.setAttribute('class','ocultaAlert')},3000)

} else{
  alerta.setAttribute('class','showAlertVazio')
  alerta.innerHTML='Preeche todos os campos corretamente!'

  setTimeout(()=>{alerta.setAttribute('class','ocultaAlert')},3000)
}

})





Fone.addEventListener('input',()=>{
  let FoneValue = Fone.value
  let caract=FoneValue.length
if(caract==''){
Fone.style.backgroundColor=''
}
else
  if(caract>=12){
    Fone.value=FoneValue.slice(0,11)
    console.log(Fone.value)
  }
  else if(caract!=='' && caract<=10){
  Fone.style.backgroundColor='#dfb4b49a'

  }else{
    Fone.style.backgroundColor=''
    Fone.setAttribute('class','positivo')
  }
})

























