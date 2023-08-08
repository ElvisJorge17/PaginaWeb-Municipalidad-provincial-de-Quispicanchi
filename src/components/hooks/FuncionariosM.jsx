import React, { useState } from 'react';
import './../Style/Funcionarios.css'; // Importamos el archivo CSS para aplicar estilos
// import imageSrc from '../../images/Logos-general/Avatar-Hombre.png'
import { AiOutlineMail } from "react-icons/ai";


const Funcionarios = ({ title, content, imageSrc, name, cargo, email }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`}>
      <div className="image-container">
        <img src={imageSrc} alt="Imagen" className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title colortext">{title}</h2>
        <div className >
        <p className="colortext">
            Cargo: {cargo}
          </p>
          <p className="colortext">
            Nombre: {name}
          </p>
          <p className="colortext">
            <AiOutlineMail style={{color: 'black', fontSize:'14px',background:'black',borderRadius:'2px'}}/> {email}
          </p>
          {expanded && (
            <p className="additional-text colortext">
              No hay datos extras para mostrar
            </p>
          )}
        </div>
        <button className="btn" onClick={toggleExpanded}>
          {expanded ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  );
};

export default Funcionarios;
