import React, {useState, useEffect} from 'react'
import AreaSacola from './AreaSacola/areaSacola';
import Navbar from "./Nav/Navbar";
import Carousel from "./Content/Carousel";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Footer from "./Footer/Footer";

function App() {
  //<Local sotarage do navegador>
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
  //</Local sotarage do navegador>


  const [produtosSacola, setProdutos] = useState(rescueLocalStorage())

  //COLA ISSO NO LOCAL STORAGE DO NAVEGADOR 
  //  [{"id":1,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":2,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":3,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":4,"descricao":"Roupa 1","tam":"P","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":5,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":6,"descricao":"Roupa 1","tam":"P","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":7,"descricao":"Roupa 1","tam":"P","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":8,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":9,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160},{"id":10,"descricao":"Roupa 1","tam":"M","quantidade":2,"cor":"Azul","limite":6,"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSIlW7LHinSw-OS9qZPeiaUEIRcgF37BbcM-M3vSQ6YPMcQlEAZ-KQHtP0ZdmBVaUzzE&usqp=CAU","preco":160}]  


  //<CRUD useState>
    //C
    const handleNovoItem = (jsonProduto)=>{
      let novaLista = [... produtosSacola, jsonProduto]
      setProdutos(novaLista);
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
   //</CRUD useState>
    
    useEffect(() => {
      let lista = handleGetItens()
      attLocalstorage(lista)
    })
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <Footer />
      <AreaSacola handleAlterarItem={handleAlterarItem} handleGetItens={handleGetItens} handleDeleteItem={handleDeleteItem} handleDeleteTodos={handleDeleteTodos} />
    </div>
  );
}

export default App;
