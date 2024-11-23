/*  java script (e qualquer linguágem)


      -Variável
  um pedacinho de memoria do computador 
que eu posso guardar oque eu quiser

     -Funções 
  
Pedacinho de código  que só executa 
quando é chamado

BOTÃO--> for clicado -> chamar a minha função  --> ligar o som
Document= HTML
Queryselector (selecionar ou pegar um item)
addEventListener- sua vizinha fofoqueira  (ouvindo alguuém te contar 
quando acontece alguma coisa)
*/
let botaoSom = document.querySelector(".botao-som")
let video =document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal =document.querySelector(".modal")
let audio =document.querySelector(".audio")

/* LIGAR O SOM */
botaoSom.addEventListener("click", ligaSom)

function ligaSom() {
video.muted = !video.muted
}
/* != Inverso / inverte tudo 
SE ELE TA MUUDO ELE VAI TOCAR E SE TIVER TOCANDO VAI FICAR MUDO
 */

/* Mostrar Modal */
botao.addEventListener("click" ,mostrarModal)
modal.addEventListener("click", esconderModal)
function mostrarModal(){
  modal.style.display= "block"
}
function esconderModal(){
    modal.style.display ="none"
}

window.addEventListener("load", tocarAudio)

function tocarAudio(){
 audio.play()
}

/* window janela do nosso site*/