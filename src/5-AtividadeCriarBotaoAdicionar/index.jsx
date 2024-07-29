// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.
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
          <button onClick={()=> adicionarItensPedidos(produto)}>Comprar</button>
          </div>
          )
        }
    </div>
   
  );
}