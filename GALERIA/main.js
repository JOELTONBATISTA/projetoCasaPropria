const menu = document.querySelector('#menu')
const header = document.querySelector('header')
const maiN = document.querySelector('main')
const bTmenu = document.querySelector('#iconM')


const ListaImgs=["<img src='IMAGENS/img01.png' class='itens'>","<img src='IMAGENS/img02.png' class='itens'>","<img src='IMAGENS/img03.png' class='itens'>","<img src='IMAGENS/img04.png' class='itens'>","<img src='IMAGENS/img05.png' class='itens'>","<img src='IMAGENS/img06.png' class='itens'>","<img src='IMAGENS/img07.png' class='itens'>","<img src='IMAGENS/img08.png' class='itens'>","<img src='IMAGENS/img09.png' class='itens'>","<img src='IMAGENS/img010.png' class='itens'>","<img src='IMAGENS/img011.png' class='itens'>","<img src='IMAGENS/img012.png' class='itens'>","<img src='IMAGENS/img013.png' class='itens'>","<img src='IMAGENS/img014.png' class='itens'>","<img src='IMAGENS/img015.png' class='itens'>","<img src='IMAGENS/img016.png' class='itens'>","<img src='IMAGENS/img017.png' class='itens'>","<img src='IMAGENS/img018.png' class='itens'>","<img src='IMAGENS/img019.png' class='itens'>","<img src='IMAGENS/img020.png' class='itens'>","<img src='IMAGENS/img021.png' class='itens'>","<img src='IMAGENS/img022.png' class='itens'>","<img src='IMAGENS/img023.png' class='itens'>","<img src='IMAGENS/img024.png' class='itens'>","<img src='IMAGENS/img025.png' class='itens'>","<img src='IMAGENS/img026.png' class='itens'>","<img src='IMAGENS/img027.png' class='itens'>","<img src='IMAGENS/img028.jpeg' class='itens'>","<img src='IMAGENS/img029.png' class='itens'>","<img src='IMAGENS/img030.png' class='itens'>","<img src='IMAGENS/img031.png' class='itens'>","<img src='IMAGENS/img032.png' class='itens'>","<img src='IMAGENS/img033.png' class='itens'>","<img src='IMAGENS/img034.png' class='itens'>","<img src='IMAGENS/img035.png' class='itens'>","<img src='IMAGENS/img036.png' class='itens'>","<img src='IMAGENS/img037.png' class='itens'>","<img src='IMAGENS/img038.png' class='itens'>","<img src='IMAGENS/img039.png' class='itens'>","<img src='IMAGENS/img040.png' class='itens'>","<img src='IMAGENS/img041.png' class='itens'>","<img src='IMAGENS/img042.png' class='itens'>","<img src='IMAGENS/img043.png' class='itens'>","<img src='IMAGENS/img044.png' class='itens'>","<img src='IMAGENS/img045.png' class='itens'>","<img src='IMAGENS/img046.png' class='itens'>","<img src='IMAGENS/img047.png' class='itens'>","<img src='IMAGENS/img048.png' class='itens'>","<img src='IMAGENS/img049.png' class='itens'>","<img src='IMAGENS/img050.png' class='itens'>","<img src='IMAGENS/img051.png' class='itens'>","<img src='IMAGENS/img052.png' class='itens'>","<img src='IMAGENS/img053.png' class='itens'>","<img src='IMAGENS/img054.png' class='itens'>","<img src='IMAGENS/img055.png' class='itens'>","<img src='IMAGENS/img056.png' class='itens'>"]

const boX = document.querySelector('.container')
const imgZoom = document.querySelector('#imgzoom')
const divZoom = document.querySelector('#divzoom')
const linK = document.querySelector('#olinK')

setInterval(()=>{
 const top=header.clientHeight
 menu.style.top=`${top}px`
 maiN.style.marginTop=`${top+10}px`
}
)


//inseri as imagens na tela dentro do container
ListaImgs.forEach(function(element,index){
  boX.innerHTML+=element 
    
})

//percorre as imagens dentro da divzom

const tdImgs = boX.querySelectorAll('.itens')

tdImgs.forEach(function(elementimg,idx){
   const urlImg=(elementimg.src )
   
   elementimg.addEventListener('mouseenter',function(){
    const tmImg=elementimg.clientWidth
    divZoom.style.transition='1s ease-in'
     divZoom.style.display='none' 
     divZoom.style.top=elementimg.offsetTop+55+'px'
     divZoom.style.left=elementimg.offsetLeft+(tmImg/2)+-10+'px'
     
     divZoom.style.display="flex"
     linK.href=urlImg
  
   })
   
})





let invisivel='invisivel'
bTmenu.addEventListener('click',()=>{
 if(invisivel=='invisivel'){
  bTmenu.src='IMAGENS/close_45dp_434343_FILL0_wght400_GRAD0_opsz48.png';
  invisivel='visivel'
   menu.style.transform='translateX(0px)'

 }
 else{
  invisivel='invisivel'
  bTmenu.src='IMAGENS/menu_45dp_5F6368_FILL0_wght400_GRAD0_opsz48.png';
  menu.style.transform='translateX(-100%)'
 }

})

header.addEventListener('mouseenter',()=>{
  divZoom.style.display='none'
  divZoom.style.zIndex='-1' 
  })

header.addEventListener('mouseout',()=>{
  divZoom.style.display='none'
  divZoom.style.zIndex='0' 
  })






