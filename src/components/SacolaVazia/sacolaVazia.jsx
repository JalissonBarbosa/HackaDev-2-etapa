
import "./style.css"
import React from 'react'

 const SacolaVazia = ()=>{
  

  return (
    <div className="conteudoSacolaVazia">
        <img className="sacolaIcone" src="./assets/images/free_icon_1.svg" alt=""></img>
        <p>Sua sacola ainda está Vazia</p> 
        <button id="voltarCompras">VOLTAR A COMPRAR</button>
    </div>
  )
 }
  export default SacolaVazia