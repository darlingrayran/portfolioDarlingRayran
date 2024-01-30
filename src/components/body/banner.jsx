import "../../styles/body/banner.scss"
import React, {useState} from 'react'

function Banner() {

  const [message, setMessage] = useState('');
  let name = "Darling Rayran Castro"
  let job = " Full Stack Developer Junior & Environmental Engineer"
  let btn = "Download CV"

  const handleDownloadClick = () => {
    setMessage("Successful download CV");
  };

  return (
    <div>
        <div className='header_banner'>
        <section className='banner_title'>
            <h1> {name} </h1>
            <h2> {job} </h2>
            <a href="/CV_DarlingRayranCastro.pdf" className='cv' download onClick={handleDownloadClick}> {btn} </a>
            {message && <p className="message"> {message}</p>}
        </section>
      </div>
    </div>
  )
}

export default Banner;