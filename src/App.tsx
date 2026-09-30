import './App.css'
import { Header } from './components/header'
import { Bevezeto } from './components/Bevezeto'
import { listak } from './data/listak'
import { ListakOl, ListakUl } from './components/listak'
import { Footer } from './components/Footer'
import { Fontos } from './components/Fontos'
import { kepek } from './data/Kepek'
import { Kepek } from './components/Kepek'

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
        <div className="row mb-1">
          {kepek.map((elem) => (
            <Kepek
              cim = {elem.cim}
              tartalom = {elem.tartalom}
              imgPath = {elem.imgPath} 
            />
          ))}
        </div>
        <Fontos></Fontos>
      </div>
      <Footer></Footer>
    </>
  )
}

