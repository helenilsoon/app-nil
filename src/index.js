import React from 'react';
import ReactDOM from 'react-dom';

const lista=[
  {
    id:"1",
    name:"helenilson"
  },
  {
    id:2,
    name:"jussara"
  }
]

function Pessoas(props) {
  return (
    <div>
     {
      lista.map(
        (item, index) =>(
          <p>{index}:{item.name}</p>,
          <p>{index}:{item.id}</p>
          
          )
        )
     }
    </div>
  )
}

function Pessoa(props) {
  return(
    <div>
      {props.tipodedado}:{lista[props.index].name}
    </div>
  )
}
ReactDOM.render(
        <div>
            <Pessoas />
            <Pessoa tipodedado="nome" index={0} />
        </div>,
    document.getElementById("root")
)