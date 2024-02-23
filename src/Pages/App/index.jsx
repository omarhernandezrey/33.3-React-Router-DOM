//mport { useRoutes } from 'react-router-dom';
import Developers from '../Developers';
/*import Home from '../Home';

import Tutorials from '../Tutorials';*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

function App() {

  const settings = {
    dots:true, // Muestra los puntos de navegación en el carrusel
    infinite: true,// Permite que el carrusel avance infinitamente en un ciclo
    speed:5000,// Define la velocidad de transición entre diapositivas en milisegundos
    autoplaySpeed:20,// Define la velocidad de reproducción automática en milisegundos
    autoplay: true,// Habilita la reproducción automática del carrusel
    slideToShow: 3,// Define cuántas diapositivas se mostrarán simultáneamente
    slideToScroll: 1// Define cuántas diapositivas se desplazarán al avanzar o retroceder
  }

  return (
    <>
    <h1 className="bg-red-200 mb-4"> Helloo </h1>
    <button className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={()=> window.open('https://tailwindcss.com/', '_blank')} > Help me</button>
    <div class="grid grid-cols-10 gap-5">
      <div class="bg-violet-50 aspect-square"></div>
      <div class="bg-violet-100 aspect-square"></div>
      <div class="bg-violet-200 aspect-square"></div>
      <div class="bg-violet-300 aspect-square"></div>
      <div class="bg-violet-400 aspect-square"></div>
      <div class="bg-violet-500 aspect-square"></div>
      <div class="bg-violet-600 aspect-square"></div>
      <div class="bg-violet-700 aspect-square"></div>
      <div class="bg-violet-800 aspect-square"></div>
      <div class="bg-violet-900 aspect-square"></div>
    </div>
    <Developers />

    <div className='w-5/12 mx-auto my-auto'>
      <div className='mt-1.25'>
        <Slider {...settings}>
          {data.map((d) =>(
            <><div className='bg-white h-[200px] text-black rounded'>
              <img src={d.img} alt='' className='p-2 mt-8 h-44 w-44 rounded-full mx-auto my-auto' />
            </div><div className='flex flex-col items-center justify-center'>
                <p className='font-semibold'>{d.name}</p>
                <p className='text-center'>{d.review}</p>
                <button className='bg-violet-400 text-white text-lg px-2 py-1 rounded'>Go to Tutorials</button>
              </div></>          
          )
          ) 
          }
        </Slider>
      </div>
    </div>
    </>
  )
}

const data = [
  {
    name: `Diego De Granda`,
    img: `/src/assets/Fotos/OG_Diego-De-Granda.png`,
    review:`Mexican developer`,
  },
  {
    name: `Brais Moure`,
    img: `/src/assets/Fotos/Brais Moure.png`,
    review:`Spaniard developer`,
  },
  {
    name: `Miguel Ángel Durán`,
    img: `/src/assets/Fotos/Miguel Ángel Durán.jpg`,
    review:`Spaniard developer`,
  },
];

export default App
