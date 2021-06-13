import React,{Fragment,useState} from 'react';

const Pregunta = () => {

  //defino el state 
  const [cant,setCant]=useState(0)
  //defino el state del error
  const [error,setError]=useState(false)
  //Funcion que lee el presupuesto
  const definirPresupuesto = e=>{
    setCant(parseInt(e.target.value,10))
  }
  //Submit para definir el presupuesto
  const agregarPresupuesto= e =>{
    e.preventDefault();
    //Validar
    if(cant<1 || isNaN(cant)){
      setError(true)
      return
    }
    //si pasa la validacion
    guardadError(false)
  }
  return ( <Fragment>
    <h2>Coloca tu presupuesto</h2>
    <form onSubmit={agregarPresupuesto}>
      <input
        type="number"
        className="u-full-width"
        placeholder="Coloca tu presupuesto"
        onChange={definirPresupuesto}
        />
      <input 
        type="submit"
        className="button-primary u-full-width "
        value="DEFINIR PRESUPUESTO"
      />


    </form>
  </Fragment> );
}
 
export default Pregunta;