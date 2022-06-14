import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from '../core/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('João', 38, '2'),
    new Cliente('Maria', 32, '3'),
    new Cliente('José', 35, '4')
  ]
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600
    `}>
     <Layout titulo="Cadastro Simples">
       <Tabela clientes={clientes}></Tabela>
     </Layout>
    
    </div>
  )
}
