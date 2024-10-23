const pegaToken = window.localStorage.getItem('Token')
const btSair = document.querySelector('#sair')
const oBody = document.querySelector('#bodyEbody')
let verNome= document.querySelector('#vernome')


if(pegaToken===null){
window.location.href='../login.html'
}
 
if(pegaToken!==null){
oBody.style.display='block'
verNome.innerHTML=window.localStorage.getItem('MeuNome')

}
 
    



btSair.addEventListener('click',()=>{
    window.localStorage.removeItem('Token')
    window.location.href='../login.html'
})


































