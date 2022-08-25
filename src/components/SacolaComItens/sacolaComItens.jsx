import React from 'react'
import Item from '../ItemSacola/itemSacola'
import "./style.css";
const SacolaComItens = ({handleAlterarItem, handleDeleteItem, handleGetItens})=>{
  return(
    <div className="conteudoSacola">
          {handleGetItens().map(dados => <Item dadosItem={dados} handleAlterarItem={handleAlterarItem}   handleDeleteItem={handleDeleteItem}  ></Item>)}
      </div> 
  )
}
 export default SacolaComItens;