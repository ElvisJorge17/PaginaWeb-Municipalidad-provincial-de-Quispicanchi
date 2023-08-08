import React from 'react';
import Funcionarios from './../../hooks/FuncionariosM'; // Asegúrate de que la ruta sea correcta
import profileImage from './../../../images/Logos-general/Avatar-Hombre.png'; // Reemplaza "profile.jpg" con la ruta de tu imagen
import profileImageM from './../../../images/Logos-general/Avatar-Mujer.png';
import '../../Style/NuestraProvincia.css'
import '../../Style/Funcionarios.css'


const FuncionariosDatos = () => {
  return (
    <>
    <h1 className="tituloPestañas contenedorTitulo">Funcionarios de la Municipalidad Provincial de Quispicanchi</h1>
    <div className='contenido'>
      <div className='contenedorTexto'>
        <h1 className='estiloTitulo'></h1>
        <h3 className='estiloTexto'></h3>
      </div>
    </div>

    <div className="contenedorFuncionarios">

      <Funcionarios className="colortext"
        title="GERENCIA DE ADMINISTRACION Y FINANZAS"
        imageSrc={profileImageM}
        name="Mamani Meza Ada Angelika"
        cargo="Jefa del dpto. de Contabilidad"
        email="angelikamm41@gmail.com"
      />
      <Funcionarios className="colortext"
        title="GERENCIA DE ADMINISTRACION Y FINANZAS"
        imageSrc={profileImageM}
        name="Pinto Pinto Nohelia Stephany"
        cargo="Jefa del dpto. de Recursos Humanos"
        email="nohelia.pintop93@gmail.com"
      />
      <Funcionarios className="colortext"
        title="GERENCIA DE ADMINISTRACION Y FINANZAS"
        imageSrc={profileImageM}
        name="Cutipa Huayhua Betty Mirella"
        cargo="Jefa unidad de Patrimonio"
        email="-"
      />
      <Funcionarios className=""
        title="GERENCIA DE ADMINISTRACION Y FINANZAS"
        imageSrc={profileImage}
        name="Huallpa Huaman Edison"
        cargo="Jefe departamento de Rentas y Tributación"
        email="edison_hh@hotmail.com"
      />
      <Funcionarios className=""
        title="GERENCIA DE ADMINISTRACION Y FINANZAS"
        imageSrc={profileImageM}
        name="Solis Cayo Carmen"
        cargo="Jefa de Logistica"
        email="carmenjnj@hotmail.com"
      />
      <Funcionarios className=""
        title="GERENCIA DE ADMINISTRACION Y FINANZAS"
        imageSrc={profileImageM}
        name="Zamalloa Quispe Lisbeth"
        cargo="J_Remu_BS"
        email="liszaquis.501@gmail.com"
      />
      <Funcionarios className=""
        title="GERENCIA DE ADMINISTRACION Y FINANZAS"
        imageSrc={profileImageM}
        name="Quispe Ccama Monica Rosa"
        cargo="Jefa unidad adquisitora"
        email="liszaquis.501@gmail.com"
      />
      <Funcionarios
        title="GERENCIA MUNICIPAL"
        imageSrc={profileImage}
        name="Huamani Caceres Danner"
        cargo="Jefe del dpto. de asesoria legal"
        email="rhc_0@hotmail.com"
      />
      
    </div>
    </>
  );
};

export default FuncionariosDatos;
