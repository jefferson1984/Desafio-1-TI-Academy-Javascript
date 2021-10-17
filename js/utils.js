
let dados=[

    {nome:'Mamão Papaia',preco:3.20},
    {nome:'Laranja',preco:1.50},
    {nome:'Manga',preco:2.60},
    {nome:'Melão',preco:4.00},
    {nome:'Melancia',preco:8.20},

];



function calcular(idProduto,resultado){

    const preco =document.querySelectorAll(`#${idProduto}>li`)
    const valorResultado=document.querySelector(`#${resultado}`)

     let soma=0
     for(let i of preco){
        soma+=Number(i.dataset.preco)
     }

      valorResultado.value=soma.toFixed(2)
 }

 export {calcular,dados} ;



 /*
    ao utilizar esta arquivo como modulo eu tenho seguinte erro no console do navegador

    O carregamento de um módulo de “http://127.0.0.1:5500/formatado1/utils” foi bloqueado devido a um tipo MIME não permitido (“text/html”).

    tentei utilizar recursos de cabeçalho  na tag meta que mozilla recomendava e alguns exemplos de foruns mais não obtive exito.

 */