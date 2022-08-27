
import "./style.css"
import React from 'react'

 const SacolaVazia = ()=>{
  

  return (
    <div className="conteudoSacolaVazia">
        <svg className="sacolaIcone" height="585pt" viewBox="-92 -18 585 585.33123" width="585pt" xmlns="http://www.w3.org/2000/svg"><path d="m384.597656 139.839844h-76.96875v-31.5625c0-59.796875-48.480468-108.277344-108.277344-108.277344-59.800781 0-108.28125 48.480469-108.28125 108.277344v31.5625h-83.328124c-6.878907.019531-12.457032 5.589844-12.476563 12.476562v334.058594c.015625 34.445312 27.933594 62.363281 62.375 62.375h277.179687c34.445313-.011719 62.363282-27.929688 62.371094-62.375v-334.058594c-.078125-6.910156-5.691406-12.464844-12.59375-12.476562zm-268.703125-31.6875c0-46.019532 37.3125-83.332032 83.328125-83.332032 46.027344 0 83.332032 37.3125 83.332032 83.332032v31.5625h-166.660157zm256.226563 378.222656c-.0625 20.648438-16.78125 37.367188-37.421875 37.425781h-277.179688c-20.648437-.058593-37.367187-16.777343-37.425781-37.425781v-321.585938h70.851562v50.769532c0 6.890625 5.589844 12.476562 12.472657 12.476562 6.890625 0 12.476562-5.585937 12.476562-12.476562v-50.769532h166.785157v50.769532c0 6.890625 5.585937 12.476562 12.476562 12.476562 6.882812 0 12.472656-5.585937 12.472656-12.476562v-50.769532h64.492188zm0 0"  /></svg>
        
        <p>Sua sacola ainda está Vazia</p> 
        <button id="voltarCompras">VOLTAR A COMPRAR</button>
    </div>
  )
 }
  export default SacolaVazia