import React from 'react';
import '../styles/Testimonio.css'


class TestimonioClase extends React.Component{
  formatTexto = (text, targetWords) => {
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

  render(){
    return(
      //devuelve un componente jsx. contenedor-testimonio: el contenedor blanco exterior
      <div className='contenedor-testimonio'> 
        <img 
          className='imagen-testimonio' 
          src={require(`../img/persona-${this.props.imagen}.png`)}
          alt='Foto de la persona' />
        
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>{this.props.nombre} de {this.props.pais}</p>
          <p className='titulo-testimonio'><strong>{this.props.tituloTestimonio}</strong></p>
          <p className='texto-testimonio'>"{this.formatTexto(this.props.testimonio, ['Aranjuez','aranjuez'])}"</p>
        </div>
          
      </div>
    );    
  }  
}


export default TestimonioClase;