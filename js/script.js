

//import {calcular,dados} from  "./utils"   

// não conseguir utilizar o recurso modulo devido erro, que consta descrito no utils.js  por isso fiz manipulação neste arquivo.
window.onload=function(){

let dados=[

  {nome:'Mamão Papaia',preco:3.20},
  {nome:'Laranja',preco:1.50},
  {nome:'Manga',preco:2.60},
  {nome:'Melão',preco:4.00},
  {nome:'Melancia',preco:8.20},

];

let lista=document.querySelector('#produtos');

let cesta=document.querySelector('#cestaDoCliente');

(()=>{
    
    for (let produtos of dados) {
        
       const li=document.createElement('li');
       
       for (let item in produtos) {
 
           if(item =='preco'){
 
             lista.appendChild(li).setAttribute('data-preco',produtos[item]);
 
              
         }else{
 
             lista.appendChild(li).textContent=`${produtos[item]}`;
         }
        
        
           
       }
     
 
    }
         
 
    
 
      
    let prod=document.querySelectorAll('#produtos')
      
     prod.forEach(function(lista2){
 
        lista2.addEventListener('click',(elemento)=>{
          
          let li=document.createElement('li')
          cesta.appendChild(li).setAttribute('data-preco',elemento.target.attributes.getNamedItem('data-preco').value)
          cesta.appendChild(li).textContent=elemento.target.innerHTML
          
          calcular('cestaDoCliente','mostraTotalCompra')
       
       })
     })
     
        
     function calcular(idProduto,resultado){

      const preco =document.querySelectorAll(`#${idProduto}>li`)
      const valorResultado=document.querySelector(`#${resultado}`)
  
       let soma=0
       for(let i of preco){
          soma+=Number(i.dataset.preco)
       }
  
        valorResultado.value=soma.toFixed(2)
   }
 
      
      
 
    })()


  }

















