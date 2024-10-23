const verEmail =document.querySelector('#Email');
const versenha =document.querySelector('#ipts');
const btLogin =document.querySelector('#btcad');
const Alert =document.querySelector('#ocultaAlert');

 const dados = window.localStorage.getItem('Lista2');
const verDados = JSON.parse(dados); 
const verDadosD = JSON.parse(dados); 
 //console.log(dados)
 let pegaNome='';
 let token= Math.floor( Math.random()*934567899873214);

 btLogin.addEventListener('click',(event)=>{
    event.preventDefault()

    if(dados==null &&  verEmail.value!=='' && versenha.value!=='' ){
      console.log(pegaNome)
      if(pegaNome==''){
           Alert.innerHTML='Dados não cadastrado no sistema!'
             Alert.setAttribute('class','showAlertVazio')
             setTimeout(()=>{
                 Alert.setAttribute('class','ocultaAlert')
               Alert.innerHTML=''  
               },2000)
            
 }} 
 
 if(verEmail.value!=='' && versenha.value===''){
  Alert.innerHTML='Prencha os dados corretamente!'
            Alert.setAttribute('class','showAlertVazio')
            setTimeout(()=>{
                Alert.setAttribute('class','ocultaAlert')
              Alert.innerHTML=''  
              },2000)   
}
if(verEmail.value==='' && versenha.value!==''){
  Alert.innerHTML='Prencha os dados corretamente!'
            Alert.setAttribute('class','showAlertVazio')
            setTimeout(()=>{
                Alert.setAttribute('class','ocultaAlert')
              Alert.innerHTML=''  
              },2000)   
}


 // verifica se os campo de Email e Senha esta vazio e faz um alerta
if(verEmail.value==='' && versenha.value===''){
    Alert.setAttribute('class','showAlertVazio')
    Alert.innerHTML='Preencha todos os campos'
    setTimeout(()=>{
      Alert.setAttribute('class','ocultaAlert')
    Alert.innerHTML;  
    },2000)
}
else{
    //pesquisa se os dados dos campos Email e Senha é igual os dados no Localstorage
    verDados.forEach(element => {
        if(element[0].Email === verEmail.value && element[0].password=== versenha.value){
            Alert.innerHTML='Login realizado com sucesso..'
            Alert.setAttribute('class','showAlert')
            
            pegaNome=element[0].Nome 
            window.localStorage.setItem('Token',token)
            window.localStorage.setItem('MeuNome',pegaNome)

            setTimeout(()=>{
              window.location.href='GALERIA/galeria.html'
            },2000)
           
            
          
            setTimeout(()=>{
                Alert.setAttribute('class','ocultaAlert')
              Alert.innerHTML='' 
              verEmail.value='' 
              versenha.value=''
              pegaNome=''
              },2000) 
              
           
        }
        })}
 
// verifica se o campo Senha esta vazio e faz um alerta
if(verEmail.value!=='' && versenha.value!==''){
     if(pegaNome==''){
          Alert.innerHTML='Email ou senha incorreto!'
            Alert.setAttribute('class','showAlertVazio')
            setTimeout(()=>{
                Alert.setAttribute('class','ocultaAlert')
              Alert.innerHTML=''  
              },2000)
           
}}


// verifica se o campo Email esta vazio e faz um alerta


});
 