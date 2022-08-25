
import { useEffect } from "react"
import "./style.css";

const Item = ({handleAlterarItem,dadosItem, handleDeleteItem})=>{
   const handleAlterarQuantidade= (id, quantidade)=>{
    handleAlterarItem(id, "quantidade", quantidade)
  }
    
  const aumentarQuantidade = ()=>{
    if (!(limite() === 2)) {
      handleAlterarQuantidade(dadosItem.id, (dadosItem.quantidade + 1))
    }
    atualizarQuant()
    atualizaBotoes()
  }

  const diminuirQuantidade = ()=>{
    if (!(limite() === 1)) {
    handleAlterarQuantidade(dadosItem.id, (dadosItem.quantidade - 1))
    }
    atualizarQuant()
    atualizaBotoes()
  }
  const limite = ()=>{
    if (dadosItem.quantidade === 1) {
      return 1
    }
    if (dadosItem.quantidade === dadosItem.limite) {
      return 2
    }
  }
  const atualizaBotoes = () =>{
    let componente = document.getElementById(`${dadosItem.id}`)
    let botaoMenos =componente.querySelector(`.menos`)
    let botaoMais = componente.querySelector(`.mais`)
    if (limite() === 1) {
      botaoMenos.classList.add("disabled")
    }else{
      botaoMenos.classList.remove("disabled")
    }
    if (limite() === 2) {
      botaoMais.classList.add("disabled")
    }else{
      botaoMais.classList.remove("disabled")  
    }

  }

  const removerItem = ()=>{
    handleDeleteItem(dadosItem.id)
  }
   const atualizarQuant = () => {
    const item = document.getElementById(dadosItem.id)
    const quant = item.querySelector("#quantidade")
    quant.innerText = dadosItem.quantidade
   }
   const atualizarCor = () => {
    const item = document.getElementById(dadosItem.id)
    const quant = item.querySelector(".corProduto")
    quant.innerText = dadosItem.cor
   }
   useEffect(() => {
    atualizaBotoes()
    atualizarQuant()
    atualizarCor()
     })
   
   
  return (
    <div className="itemSacola" id={dadosItem.id}>
          <img className="imagemProduto" src={dadosItem.imagem} alt="Imagem doproduto" ></img>
          <div className="dadosProduto">
            <h4 id="nomeProduto">{dadosItem.descricao}</h4>
            <div className="infoProdutos">
              <span className="tamanhoPeca">tam: <span>{dadosItem.tam}</span></span>
              <span className="corPeca">cor: <span className="corProduto"></span></span>
              <div id="botoesQuantidade">
                
                  <button id="botaoQuantidade"
                  className="menos"  onClick={diminuirQuantidade}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/></svg></button>
                
                <p id="quantidade">{dadosItem.quantidade}</p>
                <button>
                  <div id="botaoQuantidade" className="mais" onClick={aumentarQuantidade}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg></div>      
                </button>
                </div>
              <p id="precoUnitario">R$<span>{dadosItem.preco}</span></p>
            </div> 
            <div id="botoesConfigura">
              <button>EDITAR</button>
              <button onClick={removerItem}>REMOVER</button>
            </div>
          </div>
      </div>
  )
}


export default Item