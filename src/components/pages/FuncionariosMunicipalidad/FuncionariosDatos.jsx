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
        title="GERENCIA DE INFRAESTRUCTURA"
        imageSrc={profileImage}
        name="ROBLES GRAJEDA CARLOS EDUARDO"
        cargo="GERENTE DE INFRAESTRUCTURA"
        email=""
      />
      <Funcionarios className="colortext"
        title="GERENCIA GENERAL I.P.V."
        imageSrc={profileImage}
        name="ARIZABAL ESPINOZA GORKI"
        cargo="GERENTE GENERAL IPV"
        email=" "
      />
      <Funcionarios className="colortext"
        title="GERENCIA DE DESARROLLO ECONOMICO"
        imageSrc={profileImage}
        name="VALDEZ  GUTIERREZ  JORGE ALFREDO"
        cargo="GERENTE DE DESARROLLO ECONOMICO"
        email=" "
      />
      <Funcionarios className="colortext"
        title="GERENCIA DE PLANIFICACION Y PRESUPUESTO"
        imageSrc={profileImageM}
        name="QQUECCAÑO YUCA ROCIO"
        cargo="GERENTE DE PLANIFICACION Y PRESUPUESTO"
        email=" "
      />
      <Funcionarios className="colortext"
        title="GERENCIA DE MEDIO AMBIENTE Y SERVICIOS MUNICIPALES"
        imageSrc={profileImage}
        name="REQUEJO OLIVERA FABIAN"
        cargo="GERENTE DE MEDIO AMBIENTE Y SERVICIOS MUNICIPALES"
        email=""
      />
      <Funcionarios className="colortext"
        title="GERENCIA DE JUVENTUDES"
        imageSrc={profileImage}
        name="FLOREZ CCORI ABRAHAM ELISBAN"
        cargo="GERENTE DE JUVENTUDES"
        email=" "
      />
      <Funcionarios className="colortext"
        title="GERENCIA DE ADMINISTRACIÓN"
        imageSrc={profileImage}
        name="HUILLCAHUAMAN LOAYZA LIVIO"
        cargo="GERENTE DE ADMINISTRACIÓN"
        email=" "
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="QUISPE QQUERO GLADYS SILVIA"
        cargo="JEFE DE SEGURIDAD Y SALUD EN EL TRABAJO"
        email=" "
      />
      <Funcionarios className="colortext"
        title="GERENCIA MUNICIPAL"
        imageSrc={profileImage}
        name="SOTO  FIGUEROA ANIBAL MARTIN "
        cargo="GERENTE MUNICIPAL"
        email="martifon1@hotmail.com"
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="QUISPE  CCAMA MONICA ROSA"
        cargo="JEFA DE LA UNIDAD DE ADQUISICIONES"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="QUISPE CABRERA KENIA NAVELY"
        cargo="JEFA DE RESIDUOS SOLIDOS"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="QUISPE CHOQQUE CLAUDIO"
        cargo="JEFE DE INFORMATICA"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="GAMARRA ATAUCHI JEMNIFER"
        cargo="JEFA DEL DEPARTAMENTO DE SALUD"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="CANDIA ZEVALLOS JESUS VETO"
        cargo="JEFE DEL DEPARTAMENTO DE PARTICIPACION CIUDADANA"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="CCAÑIHUA ALMARAS YELIZA"
        cargo="JEFE DEL ÁREA DE SISFOH"
        email=""
      />
      <Funcionarios className="colortext"
        title="GERENCIA DE TRÁNSITO Y CIRCULACIÓN VIAL"
        imageSrc={profileImage}
        name="FIGUEROA  MORMONTOY ELKY"
        cargo="GERENTE DE TRÁNSITO Y CIRCULACIÓN VIAL"
        email=""
      />
      <Funcionarios className="colortext"
        title="SECRETARÍA GENERAL"
        imageSrc={profileImageM}
        name="CHILLIHUANI CANO BERTHA"
        cargo="SECRETARIA GENERAL"
        email=" "
      />
      <Funcionarios className="colortext"
        title="SECRETARÍA ALCALDÍA"
        imageSrc={profileImageM}
        name="HUANCA LOAYZA GLADIS"
        cargo="SECRETARIA DE ALCALDÍA"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="HUALLPA AYMITUMA YAIL"
        cargo="JEFE DE SERVICIOS DE SANEAMIENTO BASICO"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="PINO HUANCA JOHN HIPOL"
        cargo="JEFE DE DESARROLLO URBANO RURAL"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="QUINTANILLA CUSIHUALLPA HARRY JEREMY"
        cargo="JEFE DE GESTION AMBIENTAL Y RECURSOS NATURALES"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="ANDRADE SOLORZANO FRECIA YUREMA"
        cargo="JEFA DE UNIDAD DE PATRIMONIO"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="SANCHEZ RIVAS PETIT THOUARS"
        cargo="JEFE DE EQUIPO MECÁNICO"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="TUPAC YUPANQUI LIMA CIRO"
        cargo="JEFE DEL DEPARTAMENTO DE RECURSOS HUMANOS"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="PEÑA FARFAN ANABEL LUCIA"
        cargo="JEFE DEL DEPARTAMENTO DE ASESORÍA LEGAL"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="MAMANI MEZA ADA ANGELIKA"
        cargo="JEFA DEL DEPARTAMENTO DE CONTABILIDAD"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="QUISPE MATHEUS MARIELA"
        cargo="JEFA DE VASO DE LECHE"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="SUNE PUMACAYO MILAGROS"
        cargo="JEFA DE REMUNERACIONES Y BENEFICIOS SOCIALES"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="MAMANI LUNA SANDRA LUZ"
        cargo="JEFA DEL DEPARTAMENTO DE RENTAS Y TRIBUTACIÓN"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="PFUTURI CCAMA EDGARD"
        cargo="JEFE DE OMAPED"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="CCORAHUA QUISPE JORGE BARTOLOME"
        cargo="FORMULADOR DE PROYECTOS"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="CHUNGA QUISPE JURBY ORLANDO"
        cargo="EVALUADOR DE PROYECTOS"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="CUTIPA HUAYHUA BETTY MIRELLA"
        cargo="JEFA DE ALMACÉN"
        email=" "
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="CASTRO RODRIGUEZ FERDINAND"
        cargo="JEFE DE DESARROLLO URBANO"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="ARELLANO MAMANI ROSA MARIA"
        cargo="JEFA DEL DEPARTAMENTO DE TESORERÍA"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="CCOLQQUE CCOA ANGEL"
        cargo="PROCURADOR MUNICIPAL"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="CHOQUE CCASA ROSA"
        cargo="JEFE DEL DEPARTAMENTO DE REGISTRO DE ESTADO CIVIL"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="MERMA NAVARRETE MARCOS"
        cargo="JEFE DE ARCHIVO CENTRAL"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="MONTALVO CUBA JOSE FRANCISCO"
        cargo="JEFE DE DEFENSA CIVIL"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="JARA CHOQUE PEDRO"
        cargo="CAJA"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="CUELA CHURA JUAN BAUTISTA"
        cargo="SEGURIDAD CIUDADANA"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="HAQQUEHUA HOMBRE JUANA"
        cargo="RESPONSABLE OFICINA DEMUNA"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImageM}
        name="LOZANO PULLA MARGOT"
        cargo="JEFE DEL DEPARTAMENTO DE RENTAS"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="CASTRO MENA JOSE ARMANDO"
        cargo="JEFE DE ATM"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="QUISPE CATUNTA ALEX"
        cargo="JEFE DE DEPARTAMENTO DE ESTUDIOS Y PROYECTOS"
        email=""
      />
      <Funcionarios className="colortext"
        title=""
        imageSrc={profileImage}
        name="PINO HUANCA JOHN HIPOL"
        cargo="JEFE DE DIVISION DE DESARROLLO URBANO RURAL"
        email=""
      />
      
      
      {/* aumentando aqui arriba */}
      <Funcionarios className="colortext"
        title="GERENCIA DE DESARROLLO SOCIAL"
        imageSrc={profileImage}
        name="CORDOVA FARFAN ARTURO AMERICO"
        cargo="GERENTE DE DESARROLLO SOCIAL"
        email=""
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
      {/* Aqui partimos */}
      
      
    </div>
    </>
  );
};

export default FuncionariosDatos;
