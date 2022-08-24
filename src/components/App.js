import React, {useState} from 'react'
import AreaSacola from './AreaSacola/areaSacola';
import Navbar from "./Nav/Navbar";
import Carousel from "./Content/Carousel";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Footer from "./Footer/Footer";

function App() {
  const [produtosSacola, setProdutos] = useState([
    {id:1,
      descricao: "Roupa 1",
      tam: "M",
      quantidade: 2,
      cor: "Azul",
      limite: 6,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU",
      preco: 160},
    {id:2,
      descricao: "Roupa 1",
      tam: "M",
      quantidade: 2,
      cor: "Azul",
      limite: 6,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU",
      preco: 160},
    {id:3,
      descricao: "Roupa 1",
      tam: "M",
      quantidade: 2,
      cor: "Azul",
      limite: 6,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU",
      preco: 160},
    {id:4,
      descricao: "Roupa 1",
      tam: "P",
      quantidade: 2,
      cor: "Azul",
      limite: 6,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU",
      preco: 160},
    {id:5,
      descricao: "Roupa 1",
      tam: "M",
      quantidade: 2,
      cor: "Azul",
      limite: 6,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU",
      preco: 160},
    {id:6,
      descricao: "Roupa 1",
      tam: "P",
      quantidade: 2,
      cor: "Azul",
      limite: 6,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU",
      preco: 119.99},
    {id:7,
      descricao: "Roupa 1",
      tam: "P",
      quantidade: 2,
      cor: "Azul",
      limite: 6,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU",
      preco: 160},
    {id:8,
      descricao: "Roupa 1",
      tam: "M",
      quantidade: 2,
      cor: "Azul",
      limite: 6,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU",
      preco: 180},
     ]
    )

    //C
    const handleNovoItem = (jsonProduto)=>{
      let novaLista = [... produtosSacola, jsonProduto]
      setProdutos(novaLista);
    }

    //R
    const handleGetItens = ()=>{
      return produtosSacola;
    }

    //U
    
    const handleAlterarItem1 = (id, chave, valor)=>{
      let lista = produtosSacola;
      for (let i = 0; i < lista.length; i++ ) {
        if (lista[i].id === id) {
          lista[i][chave] = valor
          setProdutos(lista);
          
        } 
      }
    }
    //Teste useState
    const handleAlterarItem2 = (id, chave, valor)=>{
      let lista = produtosSacola;
      for (let i = 0; i < produtosSacola.length; i++) {
        let item = produtosSacola[i];
           item[chave] = valor
           handleDeleteItem(id)
           handleNovoItem(item)
           console.log(produtosSacola);
      }
    }
    
   //D    
    const handleDeleteItem = (id)=>{
      let lista = produtosSacola.filter(dados => dados.id !== id)
      setProdutos(lista)
    }

    const handleDeleteTodos = ()=>{
     setProdutos([])
    }

  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <Footer />
      <AreaSacola handleAlterarItem={handleAlterarItem} handleGetItens={handleGetItens} handleDeleteItem={handleDeleteItem} produtosSacola={produtosSacola} handleDeleteTodos={handleDeleteTodos} />
    </div>
  );
}

export default App;
