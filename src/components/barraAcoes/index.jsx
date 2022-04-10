import { useContext } from "react";
import  { notasProvider } from "../../contexts";
import"./style.css"


export default function BarraAcoes() {
  const {
    notas, 
    mostrarNotasAtivas, 
    todasAsNotas,
    deletarConcluida,
    mostrarNotasConcluidas 
  } = useContext(notasProvider);

  function analiseDenotas(){
    const notasAtuais = [...notas];
    const naoConcluidas = notasAtuais.filter((nota) => nota.estaConcluida === false);
    return naoConcluidas.length
  }


  return(
    <div className="barra-de-acoes">
      <p> {analiseDenotas()} items left</p>
      <div className="barra__acoes">
        <p onClick={todasAsNotas} className='acoes'>All</p>
        <p onClick={mostrarNotasAtivas} className='acoes'>Active</p>
        <p onClick={mostrarNotasConcluidas} className='acoes'>Completed</p>
      </div>
      <p onClick={deletarConcluida} >Clear Completed</p>
    </div>
  )
} 