import { useEffect, useState } from "react";
import "./style.css";
const Finalizar = ({getValorTotal})=>{
  let valor = getValorTotal()
  
  return(
    <div className="finalizarCompra">
        <div className="areaValorParcial">
          <p id="valor">R${/*valorItens.toFixed(2)*/}</p>
        </div>
      <a href="#"><button id="botaoFinalizarCompra">Finalizar Compra </button></a>
      </div>
  )
}
export default Finalizar;