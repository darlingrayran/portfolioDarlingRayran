import React, { useState } from 'react';
import "../../styles/body/certifications.scss";
import dipA from "../../images/diploma1.png";
import dipB from "../../images/diploma2.png";
import dipC from "../../images/diploma3.png";
import dipD from "../../images/diploma4.png";

function Certifications() {
  const subTitleC = "Certificados";
  
  const diplomas = [dipA, dipB, dipC, dipD];

  const [currentDiplomaIndex, setCurrentDiplomaIndex] = useState(0);

  const previousDiploma = () => {
    const newIndex = currentDiplomaIndex === 0 ? diplomas.length - 1 : currentDiplomaIndex - 1;
    setCurrentDiplomaIndex(newIndex);
  };

  const nextDiploma = () => {
    const newIndex = currentDiplomaIndex === diplomas.length - 1 ? 0 : currentDiplomaIndex + 1;
    setCurrentDiplomaIndex(newIndex);
  };

  return (
    <div>
      <section className='certification'>
          <h2 className='subtitle'>{subTitleC}</h2>
          <div className="diploma-container">
            <button onClick={previousDiploma} className='btnStyle'><i className="fa-regular fa-hand-point-left"></i></button>
            <img 
              className="diploma" 
              src={diplomas[currentDiplomaIndex]} 
              alt="Certificado Estudio"
            />
            <button onClick={nextDiploma} className='btnStyle'><i className="fa-regular fa-hand-point-right"></i></button>
          </div>
      </section>
    </div>
  );
}

export default Certifications;

