// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import {useState} from "react"
export default function Home() {

  const [listaProduto, setProduto] = useState([
    {id: 1, nome: "Brisadeiro", preco: "R$ 2,00"},
    {id: 2, nome: "Paçoca", preco: "R$ 5,00"},
    {id: 3, nome: "Pedaço de bolo Red Velvet", preco: "R$ 12,00"},
  ])

  return (
    <div>
        <h1>Doces</h1>
    </div>
   
  );
}

