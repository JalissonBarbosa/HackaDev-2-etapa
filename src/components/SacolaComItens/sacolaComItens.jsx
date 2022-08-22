import React from 'react'
import Item from '../ItemSacola/itemSacola'
import "./style.css";
const SacolaComItens = ({handleAlterarItem, handleDeleteItem, produtosSacola})=>{
  return(
    <div className="conteudoSacola">
          {produtosSacola.map(dados => <Item dadosItem={dados} handleAlterarItem={handleAlterarItem}   handleDeleteItem={handleDeleteItem}  ></Item>)}
      </div> 
  )
}
 export default SacolaComItens;