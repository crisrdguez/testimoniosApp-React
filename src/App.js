import logo from './logo.svg';
import './App.css';
import Testimonio from './components/Testimonio';



function App() {
  const testimonios = [
    {
      nombre:'Nagasaki',
      pais:'Japón',
      imagen:'1',
      tituloTestimonio:'Oh My GOD',
      testimonio:'Es un sitio muy bonito al que volvere porque hay muchas cosas bonitas, como sus Jardines: Isla y Principe. Como yo, que soy un Príncipe.¡Viva Aranjuez y su gente!'
    },
    {
      nombre:'Miki',
      pais:'Singapore',
      imagen:'2',
      tituloTestimonio:'Aligator',
      testimonio:'Aranjuez me ha gustado porque tiene patos a los que puedes dar de comer, ademas en el río hay tortuguitas'
    },
    {
      nombre:'Nagasaki',
      pais:'Korea',
      imagen:'3',
      tituloTestimonio:'Ughuuuu',
      testimonio:'Adoro el deporte al aire libre y no hay mejor lugar que Aranjuez para practicarlos'
    },
    {
      nombre:'Punch',
      pais:'China',
      imagen:'4',
      tituloTestimonio:'PUM PUM',
      testimonio:'Me encanta comer, desde gyozas hasta ramen pasando por pizzas y perritos. Aranjuez está lleno de restaurantes en los que puedo llenar mi Panza'
    }
    
  ];
  





  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios de personas reales acerca del pueblo más bonito del mundo: Aranjuez</h1>
        {testimonios.map((testimonio, index) => (
          <Testimonio 
          key={index}
          nombre={testimonio.nombre}
          pais={testimonio.pais}
          imagen={testimonio.imagen}
          tituloTestimonio={testimonio.tituloTestimonio}
          testimonio={testimonio.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
