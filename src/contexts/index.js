import React, {useState} from "react";

export const notasProvider = React.createContext();

export default function ProviderNotas({ children }) {

  const [notas, setNotas] = useState([{
    id: new Date().getTime(),
    texto: "Complete online JavaScript course",
    estaConcluida: false,
    clicada: false,
    fechada: false
  },
  {
    id: 1,
    texto: "Jog around the park 3x",
    estaConcluida: false,
    clicada: false,
    fechada: false
  },
  {
    id: 2,
    texto: "10 minutes meditation",
    estaConcluida: false,
    clicada: false,
    fechada: false
  },
  {
    id: 3,
    texto: "Read for 1 hour",
    estaConcluida: false,
    clicada: false,
    fechada: false
  },
  {
    id: 4,
    texto: "Pick up groceries",
    estaConcluida: false,
    clicada: false,
    fechada: false
  },
  {
    id: 5,
    texto: "Complete Todo App Frontend Mentor",
    estaConcluida: false,
    clicada: false,
    fechada: false
  }
]);

  const [texto, setTexto] = useState("");
  const [filterNotas, setFilterNotas] = useState(notas);


  function criaNota(evento) {
    if(evento.key === "Enter"){
      setNotas([...notas, {
        id: new Date().getTime(),
        texto: texto,
        estaConcluida: false,
        clicada: false,
        fechada: false
      }]);
      setFilterNotas([...notas, {
        id: new Date().getTime(),
        texto: texto,
        estaConcluida: false,
        clicada:false,
        fechada: false
      }]);
      setTexto("");
    }
  }

  function deletarNota(indice) {
    const listaDeNotas = notas;
    listaDeNotas.splice(indice, 1);
    setNotas([...listaDeNotas]);
    setFilterNotas([...listaDeNotas])
  }

  function todasAsNotas(){
    setFilterNotas(notas)
  }

 function mostrarNotasAtivas(){
    const ativas = notas.filter((nota) => !nota.estaConcluida);

    setFilterNotas(ativas);
 }

 function deletarConcluida(){
    const notasSemConcluidas = notas.filter((nota) => !nota.estaConcluida)

    setNotas(notasSemConcluidas);
    setFilterNotas(notasSemConcluidas);
 }

 function mostrarNotasConcluidas(){
    const concluidas = notas.filter((nota) => nota.estaConcluida);

    setFilterNotas(concluidas)
 }
  
  
  return (
    <notasProvider.Provider value={{
      todasAsNotas,
      filterNotas,
      setFilterNotas,
      deletarConcluida,
      mostrarNotasAtivas,
      mostrarNotasConcluidas,
      notas, setNotas, 
      texto , criaNota, 
      setTexto, deletarNota}}>
      {children}
    </notasProvider.Provider>
  )
}