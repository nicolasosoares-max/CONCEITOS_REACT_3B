import { useState } from 'react'
import './App.css'
import Login from './paginas/login'
import Cadastro from './paginas/cadastro'



function App() {
const [tela, setTela] = useState('login')


const renderizarTela = () => {
 if(tela === 'login') {
  return <Login/>
 } else if (tela === 'cadastro') {
  return <Cadastro/>
 } 
}

  const trocarTela = (pagina) => {
    setTela(pagina)
  }


  return (
    <>
      <h1>picachu</h1>
      <button onClick={ () => trocarTela('login')}>login</button>
      <button onClick={ () => trocarTela('cadastro')}>cadastro</button>
      {renderizarTela()}
    </>
  )
}

export default App
