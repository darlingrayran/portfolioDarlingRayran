import React, {useState , useEffect} from 'react'
import "../../styles/body/about.scss"

function About() {

  let titleOne = " Sobre mí"
  let subTitleOne = "Resolutiva, Proactiva, Resiliente , Trabajo en equipo"
  let textOne = "Me Destaco por mi capacidad para ofrecer soluciones creativas y efectivas, marcando una diferencia palpable en cualquier entorno profesional."
  let textTwo = "En este viaje, descubro que el amor por la familia no solo enriquece mi vida personal, sino que también aporta una perspectiva valiosa que potencia mi crecimiento y éxito profesional."
  let textThree = "Esta combinación única de habilidades técnicas y valores familiares me impulsa a alcanzar logros excepcionales y a dejar una huella positiva en todo lo que me proponga."

  const images = ['./assets/images/darlingrayran.png', './src/images/family.png','./src/images/fotoFamilia.png','./src/images/bruce.png'];
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 2000); 

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
    <section className='about'>
        <h2 className='about_title'> {titleOne} </h2>
        <h3> {subTitleOne} </h3>
        <img className='family' src={currentImage} alt='Fotos'></img>
        <p> {textOne} </p>
        <p> {textTwo} </p>
        <p> {textThree} </p>
    </section>
    </div>
  )
}

export default About;