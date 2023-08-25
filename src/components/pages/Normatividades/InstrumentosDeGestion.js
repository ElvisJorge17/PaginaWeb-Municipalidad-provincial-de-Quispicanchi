import "../../Style/Convocatoria.css";
import dataconvoc from "../../jsons/InstrumentosDG.json";
import enlapdf from "../../../../src/images/imgconvocatoria/PDF-V.png"
import "../../Style/estilosgenerales.css"
import Footer from "../../Footer";
import { useState } from "react";

const InstrumentosDeGestion = () => {  // Cambio de nombre aquí
   const [contacts, setContact]= useState(dataconvoc);
   return(
         <>
         <h1 className="tituloPestañas contenedorTitulo">Instrumentos de Gestión</h1>
         <div className="convo-container">
            <table>
            <thead>
               <tr>
                  <th >N°</th>
                  <th>Detalle</th>
                  <th>Fecha</th>
                  <th>Archivo PDF</th>
               </tr>
            </thead>
            <tbody>
               {contacts.map((contact)=> (
                  <tr key={contact.id}>  {/* Agregar key prop */}
                     <td className="txtcenter">{contact.id}</td>
                     <td >{contact.detalle}</td>
                     <td className="txtcenter">{contact.fecha}</td>
                     <td className="txtcenter"><a href={require(`../../${contact.filepdf}`)} rel='noreferrer' target='_blank'><img src={enlapdf} alt="pdf" width={34}/></a></td>
               </tr>
               ))}
            </tbody>
            </table>
         </div>
         <div>
            <Footer/> 
         </div>
      </>
   );
}

export default InstrumentosDeGestion;  // Cambio de nombre aquí

