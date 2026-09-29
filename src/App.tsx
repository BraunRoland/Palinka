import './App.css'
import { Header } from './components/header'
import { Bevezeto } from './components/Bevezeto'
import { listak } from './data/listak'
import { ListakOl, ListakUl } from './components/listak'
import { Footer } from './components/Footer'
import { Fontos } from './components/Fontos'

export default function App() {
  return (
    <>
      <div className='container'>
        <Header></Header>
        <Bevezeto></Bevezeto>
        <div className='row mb-2'>
          {listak.map((elem) => (
            elem.ordered? 
            <ListakOl
            cim = {elem.cim}
            tartalom= {elem.tartalom}              
            /> 
            : 
            <ListakUl 
            cim = {elem.cim}
            tartalom={elem.tartalom}
            />
          ))}
        </div>
        <Fontos></Fontos>
      </div>
      <Footer></Footer>
    </>
  )
}

