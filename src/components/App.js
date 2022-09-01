
import React, {useState, useEffect} from 'react'
import Home from './Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AreaSacola from "./Sacola/AreaSacola/areaSacola";
import Card from './Card/Card';
import TelaCard from './pages/CardComponets/TelaCard';
import Form from './Login/Form/FormLogin';
import FormCadastro from './Login/Form/FormCadastro';
import FormPassRecovery from './Login/Form/FormPassRecovery';


function App() {
  const attLocalstorage = (lista)=>{
    localStorage.setItem("itens" ,JSON.stringify(lista))
  }

  function rescueLocalStorage (){
    if(localStorage.getItem("itens") === null){
      attLocalstorage([])
      let lista = localStorage.getItem("itens")
      return JSON.parse(lista)
    }else{
      let lista = localStorage.getItem("itens")
      return JSON.parse(lista)
    }
  }
  
  const [produtosSacola, setProdutos] = useState(rescueLocalStorage())

  // [{"id":1,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":2,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":3,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":4,"descricao":"Roupa 1","tam":"P","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":5,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":6,"descricao":"Roupa 1","tam":"P","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":119.99},{"id":7,"descricao":"Roupa 1","tam":"P","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":8,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":180}]

    //C
    // const handleNovoItem = (jsonProduto)=>{
    //   let novaLista = [... produtosSacola, jsonProduto]
    //   setProdutos(novaLista);
    // }
    //Está funcionando!

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
          handleDeleteItem={handleDeleteItem} h
          andleDeleteTodos={handleDeleteTodos} 
          />]}/>
          <Route path="/card" element={<Card />}/>
          <Route path='/TelaCard' element={<TelaCard />}/>
          <Route path='/Login' element={<Form />}/>
          <Route path='/Cadastro' element={<FormCadastro />}/>
          <Route path='/Recover' element={<FormPassRecovery />}/>
          </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
