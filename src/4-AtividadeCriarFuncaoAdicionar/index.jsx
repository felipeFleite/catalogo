// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`
import { useState } from "react";

export default function Home() {
  const [listaProduto, setProduto] = useState([
    {id: 1, nome: "Brigadeiro", preco: "R$ 2,00"},
    {id: 2, nome: "Paçoca", preco: "R$ 5,00"},
    {id: 3, nome: "Pedaço de bolo Red Velvet", preco: "R$ 12,00"},
  ])

  const [listaPedidos, setListaPedidos] = useState([])

  const adicionarPedidos = (objeto) => {
      setListaPedidos([...listaPedidos,objeto])
  }

  return (
    <div>
        <h1>Doces</h1>

        {
          listaProduto.map((produto) =>
          <div key = {produto.id}>
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
          
          </div>
          )
        }
    </div>
   
  );
}