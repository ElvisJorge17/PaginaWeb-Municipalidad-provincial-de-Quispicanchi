import React from 'react';
import DropDown from './components/DropDown';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router,Switch, Route,HashRouter, } from 'react-router-dom';
import Products from './components/pages/Products';
import Contacto from './components/pages/Contacto';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Festividades from './components/pages/NuestraProvincia/Festividades'
import Ubicacion from './components/pages/NuestraProvincia/Ubicacion'
import Resoluciones from './components/pages/Normatividades/NormasEmitidas/ResolucionesAlcaldia';
import MisionYVision from './components/pages/LaMunicipalidad/MisionYVision';
import Convocatoria from './components/pages/ConvocatoriaCas';
import Alcaldia from './components/pages/LaMunicipalidad/Alcaldia'
import Regidores from './components/pages/LaMunicipalidad/ConsejoMunicipal/Regidores';
import Comisiones from './components/pages/LaMunicipalidad/ConsejoMunicipal/Comisiones';
import InstrumentosDeGestion from './components/pages/Normatividades/InstrumentosDeGestion'
import ServiciosProfesionales from './components/pages/CotizacionesEnLinea/ServiciosProfesionalesOrgInt';
import DecretosAlcaldia from './components/pages/Normatividades/NormasEmitidas/DecretosAlcaldia';
import Acuerdos from './components/pages/Normatividades/NormasEmitidas/AcuerdosDeConcejo';
import OrdenanzasMunicipales from './components/pages/Normatividades/NormasEmitidas/OrdenanzasMunicipales';
import Directivas from './components/pages/Normatividades/Directivas';
import ResolucionesGerencia from './components/pages/Normatividades/NormasEmitidas/ResolucionesGerencia';
import MesaDePartes from './components/pages/ServiciosMunicipales/MesaDePartesVirtual';
import DeclaracionesJuradas from './components/pages/FuncionariosMunicipalidad/DeclaracionesJuradas';
import FuncionariosDatos from './components/pages/FuncionariosMunicipalidad/FuncionariosDatos';
import Portal from './components/pages/Normatividades/PortalDeTransparencia';


function App() {
  return (
    <>
    <DropDown />
    <HashRouter>
      <Switch>
        <Route path='/Inicio' exact component={Home} />
        <Route path='/' exact component={Home} />
        <Route path='/contacto' component={Contacto} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/Ubicación' component={Ubicacion} />
        <Route path='/Decretos de alcaldía' component={DecretosAlcaldia} />
        <Route path='/Festividades' component={Festividades} />
        <Route path='/Misión y Visión' component={MisionYVision} />
        <Route path='/Convocatoria CAS' component={Convocatoria} />
        <Route path='/Alcaldía' component={Alcaldia} />
        <Route path='/Regidores' component={Regidores} />
        <Route path='/Acuerdos de concejo' component={Acuerdos} />
        <Route path='/Resoluciones de alcaldía' component={Resoluciones} />
        <Route path='/Directivas' component={Directivas} />
        <Route path='/Transparencia' component={Portal} />
        <Route path='/Ordenanzas municipales' component={OrdenanzasMunicipales} />
        <Route path='/Instrumentos de gestión' component={InstrumentosDeGestion} />
        <Route path='/Comisiones' component={Comisiones} />
        <Route path='/Declaraciones juradas' component={DeclaracionesJuradas} />
        <Route path='/Funcionarios' component={FuncionariosDatos} />
        <Route path='/Mesa de partes virtual' component={MesaDePartes} />
        <Route path='/Resoluciones de Gerencia Municipal' component={ResolucionesGerencia} />
        <Route path='/Servicio de profesionaes para el órgano de control interno' component={ServiciosProfesionales} />
        
      </Switch>
    </HashRouter>
    </>
  );
}

export default App;
