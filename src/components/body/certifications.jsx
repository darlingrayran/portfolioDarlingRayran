import React from 'react'
import "../../styles/body/certifications.scss"

function certifications() {
  return (
    <div>
    <section className='certification'>
        <h2 className='subtitle'>Certificaciones</h2>
        <div className="diplomas">
        <img className="diploma" src="./src/images/diploma1.png" alt="Certificado Estudio"></img>
        <img className="diploma" src="./src/images/diploma2.png" alt="Certificado Estudio"></img>
        <img className="diploma" src="./src/images/diploma3.png" alt="Certificado Estudio"></img>
        <img className="diploma" src="./src/images/diploma4.png" alt="Certificado Estudio"></img>
        </div>
    </section>
    </div>
  )
}

export default certifications;