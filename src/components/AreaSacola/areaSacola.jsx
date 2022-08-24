import "./estilo-sacola.css"
import "../SacolaVazia/sacolaVazia"
import  SacolaVazia  from "../SacolaVazia/sacolaVazia";
import Finalizar from "../FinalizarCompra/finalizarCompra";
import SacolaComItens from "../SacolaComItens/sacolaComItens";
import BotaoLimparSacola from "../BotaoLimparSacola/botaoLimparSacola";

const AreaSacola = ({handleAlterarItem, handleDeleteTodos, handleDeleteItem, produtosSacola}) =>{
  console.log("renderizei areaSacola");
  let sacolaEstaVazia = produtosSacola.length === 0;
  
  const getValorTotal = ()=>{
    let valorTotal = 0;
    for (const item of produtosSacola) {
      valorTotal += (item.preco * item.quantidade)
    }
    console.log(valorTotal);
    return valorTotal;
  }


  return (
    <>
    <section id="sacola" className="visivel">
    <div className="areaSacola">
      <div className="cabecalhoSacola">
        <button id="fecharSacola">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>
        </button>
        <h3>Minha Sacola</h3>
        {sacolaEstaVazia
        ? ""
        : <BotaoLimparSacola handleDeleteTodos={handleDeleteTodos}/>
        }   

      </div> 
      { sacolaEstaVazia
        ? <SacolaVazia />
        : [<SacolaComItens handleAlterarItem={handleAlterarItem}  handleDeleteItem={handleDeleteItem} produtosSacola={produtosSacola} handleDeleteTodos={handleDeleteTodos} />, <Finalizar getValorTotal={getValorTotal} />]
      }   
      
    </div>
  </section>
  </>
  )
}
export default AreaSacola;