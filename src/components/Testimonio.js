import React from 'react';
import '../styles/Testimonio.css'

function Testimonio(props){

  //Quiero que si aparece la palabra Aranjuez salga en negrita
  const formatTexto = (text, targetWords) => {
    const words = text.split(' ');//separa las palabras del texto

    return words.map((word, index) => {
      if (targetWords.includes(word)) {
        return (
          <strong key={index}>
            {word + ' '}
          </strong>
        );
      }else{
        return word + ' ';
      }
      
    });
  };

  return(
    //devuelve un componente jsx. contenedor-testimonio: el contenedor blanco exterior
    <div className='contenedor-testimonio'> 
      <img 
        className='imagen-testimonio' 
        src={require(`../img/persona-${props.imagen}.png`)}
        alt='Foto de la persona' />
      
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} de {props.pais}</p>
        <p className='titulo-testimonio'><strong>{props.tituloTestimonio}</strong></p>
        <p className='texto-testimonio'>"{formatTexto(props.testimonio, ['Aranjuez','aranjuez'])}"</p>
      </div>
        
    </div>
  );    
}

export default Testimonio;