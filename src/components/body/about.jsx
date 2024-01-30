import React from 'react'
import "../../styles/body/about.scss"

function about() {
  return (
    <div>
    <section className='about'>
        <h2 className='about_title'> Sobre mí </h2>
        <h3> Resolutiva, Creativa, Adaptación al cambio </h3>
        <img className='family' src='./src/images/family.png' alt='Foto Familia'></img>
        <p> Me Destaco por mi capacidad para ofrecer soluciones creativas y efectivas, marcando una diferencia palpable en cualquier entorno profesional. </p>
        <p> En este viaje, descubro que el amor por la familia no solo enriquece mi vida personal, sino que también aporta una perspectiva valiosa que potencia mi crecimiento y éxito profesional. </p>
        <p> Esta combinación única de habilidades técnicas y valores familiares me impulsa a alcanzar logros excepcionales y a dejar una huella positiva en todo lo que me proponga.</p>
    </section>
    </div>
  )
}

export default about;