import "./style.css";
import {Link} from "react-router-dom";


const Finalizar = ({getValorTotal})=>{
  let valor = getValorTotal()
  
  return(
    <>
    <div className="finalizarCompra">
        <div className="areaValorParcial">
          <p id="valor">R${valor.toFixed(2)}</p>
        </div>
        <Link exact = "true" to="/"><button id="botaoFinalizarCompra">Finalizar Compra </button></Link>
      </div>
    </>
  )
}
export default Finalizar;