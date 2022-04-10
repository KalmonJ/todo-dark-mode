import React from 'react';
import "./style.css"
import {useContext} from 'react';
import { notasProvider } from '../../contexts';
import cross from "../../images/icon-cross.svg";
import checked from "../../images/icon-check.svg"


function ContainerNotas() {
  const {
    notas, 
    deletarNota, 
    setNotas,
    filterNotas,
    setFilterNotas
  } = useContext(notasProvider);


  function handleTarefaCompleta(id, indice){
    const notasAtuais = [...notas];
    const array =  notasAtuais.filter((nota) => nota.id === id);
    array[0].estaConcluida ? array[0].estaConcluida = false : array[0].estaConcluida = true;
    notasAtuais.splice(indice, 1, array[0]);
    setNotas([...notasAtuais]);
    setFilterNotas([...notasAtuais]); 
    console.log(array)
  }

  function mostrarChecado(id){
    const notasAtuais = [...notas];
    const notaClicada = notasAtuais.filter((nota) => nota.id === id);
    notaClicada[0].clicada ? notaClicada[0].clicada = false : notaClicada[0].clicada = true;
    setNotas([...notasAtuais]);
    setFilterNotas([...notasAtuais]);
  }

  function mostrarIconeFechar(id){
    const notasAtuais = [...notas];
    const notaClicada = notasAtuais.filter((nota) => nota.id === id);
    notaClicada[0].fechada ? notaClicada[0].fechada = false : notaClicada[0].fechada = true;
    setNotas([...notasAtuais]);
    setFilterNotas([...notasAtuais]);
  }
 
  return (
    <>
    <div className="container__notas">
      { filterNotas.map((nota, indice ) => {
        return(
          <div key={indice} className="nota__digitada" >
            <div onClick={() =>{ 
              handleTarefaCompleta(nota.id, indice);
              mostrarChecado(nota.id)
            }} className='bola__checada'>
            <img style={{
              display: nota.clicada
              ? 'block'
              : 'none'
            }} className='icone__checado' src={checked} alt="icone checked"/>
            </div>
            <p onClick={() => mostrarIconeFechar(nota.id)} className={nota.estaConcluida? "notaConcluida": "notaNaoConcluida"} >{nota.texto}</p>
            <img  src={cross} className = {nota.fechada? "icone__fechar": "icone__fechar-desabilitado"} onClick={() =>{deletarNota(indice)}} alt="icone para remover nota" />
          </div>
        )
      })}
    </div>
    </>
  );
}

export default ContainerNotas;