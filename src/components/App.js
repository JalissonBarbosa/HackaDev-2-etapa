
import React, {useState, useEffect} from 'react'
import Home from './Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AreaSacola from "./Sacola/AreaSacola/areaSacola";
import Card from './Card/Card';
import TelaCard from './pages/CardComponets/TelaCard';
import PageLogin from './pages/PageLogin/Login';
import PageCadastro from './pages/PageCadastro/PageCadastro';
import PagePassRecovery from './pages/PagePassRecovery/PassRecovery';
import Contrato from './pages/PageContrato/Contrato';
import {v4} from "uuid"

function App() {
  const attLocalstorage = (lista)=>{
    localStorage.setItem("itens" ,JSON.stringify(lista))
  }

  function rescueLocalStorage (){
    if(localStorage.getItem("itens") === null){
      attLocalstorage([])
     
    }
    let lista = localStorage.getItem("itens")
    return JSON.parse(lista)
  }
  
  const [produtosSacola, setProdutos] = useState(rescueLocalStorage())

  // [{"id":1,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":2,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":3,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":4,"descricao":"Roupa 1","tam":"P","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":5,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":6,"descricao":"Roupa 1","tam":"P","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":119.99},{"id":7,"descricao":"Roupa 1","tam":"P","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":8,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":180}]

    //C
    const handleNovoItem = (jsonProduto)=>{
      if(eMesmoProduto(jsonProduto)){
        return
      }else{
      let novaLista = [...produtosSacola, jsonProduto]
      setProdutos(novaLista);
      }
      alert("Item adicionado!")
    }
    const eMesmoProduto = (produto)=>{
      let lista = handleGetItens()
      for (let i = 0; i < lista.length; i++ ) {
        if (lista[i].descricao === produto.descricao &&
          lista[i].tam === produto.tam &&
          lista[i].cor === produto.cor) {
            atualizarQuant(lista[i], produto)
            return true;
        } 
    }
  }
    const atualizarQuant= (produto, novoProduto)=>{
      let novaQuantidade = produto.quantidade + novoProduto.quantidade;
      if(novaQuantidade < produto.limite){
        handleAlterarItem(produto.id, "quantidade", novaQuantidade )
      }
      else{
        handleAlterarItem(produto.id, "quantidade", produto.limite )
      }
     
    }
    //R
    const handleGetItens = ()=>{
      let lista = Array.from(produtosSacola)
      return lista;
    }

    //U
    const handleAlterarItem = (id, chave, valor)=>{
      let lista = handleGetItens()
      for (let i = 0; i < lista.length; i++ ) {
        if (lista[i].id === id) {
          lista[i][chave] = valor
          setProdutos(lista);
        } 
      }
    }   
   //D    
    const handleDeleteItem = (id)=>{
      let lista = handleGetItens().filter(dados => dados.id !== id);
      setProdutos(lista)
    }
    const handleDeleteTodos = ()=>{
     setProdutos([])
    }
    const item = {"id":v4(),
    descricao:"Top com recorte em tela estampa digital",
    "tam":"M",
    "quantidade":1,
    "cor":"preto",
    "limite":6,
    "imagem":"https://www.kaisan.com.br/media/catalog/product/cache/1/small_image/441x/040ec09b1e35df139433887a97daa66f/t/o/top_com_al_a_de_regulagem_com_vi_s_preto_branco_ref_k3126-c_1_.jpg",
    "preco":(Math.random() * (300 - 100) + 100).toFixed(2)}
    
    useEffect(() => {
      let lista = handleGetItens()
      attLocalstorage(lista)
    })
    
  return (
    <>
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>          
          <Route path="/sacola" element={[<Home />, 
          <AreaSacola 
          handleAlterarItem={handleAlterarItem} 
          handleGetItens={handleGetItens} 
          handleDeleteItem={handleDeleteItem} 
          handleDeleteTodos={handleDeleteTodos} 
          />]}/>
          <Route path="/card" element={<Card />}/>
          <Route path='/TelaCard' element={<TelaCard handleNovoItem={handleNovoItem} produto={item}/>}/>
          <Route path='/TelaCard:id' element={<TelaCard handleNovoItem={handleNovoItem} handleGetItens={handleGetItens}/>}/>
          <Route path='/Login' element={<PageLogin />}/>
          <Route path='/Cadastro' element={<PageCadastro />}/>
          <Route path='/Recover' element={<PagePassRecovery />}/>
          <Route path='/Contrato' element={<Contrato />}/>
          </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;