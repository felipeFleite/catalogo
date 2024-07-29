// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".
import { useState } from "react";

export default function Home() {
  const [listaProduto, setProduto] = useState([
    {id: 1, nome: "Brigadeiro", preco: "R$ 2,00"},
    {id: 2, nome: "Paçoca", preco: "R$ 5,00"},
    {id: 3, nome: "Pedaço de bolo Red Velvet", preco: "R$ 12,00"},
  ])

  const [listaPedidos, setListaPedidos] = useState([])

  const adicionarItemPedidos = (objeto) => {
      setListaPedidos([...listaPedidos,objeto])
  }

  const removerPedido = (id) => {
    let remover = false
    let listaAux = listaPedidos.filter((produto)=> {
      if(remover == false) {
        if(produto.id != id) {
          return produto
        } else{
          remover = true
          return null
        }
      } else {
        return produto
      }
    })
    setListaPedidos(listaAux)
  }

  return (
    <div>
        <h1>Doces</h1>

        {
          listaProduto.map((produto) =>
          <div key = {produto.id}>
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
          <button onClick={()=> adicionarItemPedidos(produto)}>Comprar</button>
          </div>
          )
        }
        {
          listaPedidos.map((produto)=>
          <div key = {produto.id}>
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
          <button onClick={()=> removerPedido(produto.id)}>Remover</button>
          </div>
          )
        }
    </div>
   
  );
}