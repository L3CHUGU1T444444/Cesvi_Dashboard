import { useState } from 'react';
import './App.css';
import { SIDEMENU } from './sideMenu/sideMenu.jsx';
import { MAINDASHBOARD } from './Content/paginaPrincipal.jsx';
import { ADDACCIDENTS } from './Content/agregarSiniestros.jsx';
import { GARAGE } from './Content/talleresMecanicos.jsx';
import { CONSULTARSINIESTROS } from './Content/consultarSiniestros.jsx';

function App() {
  const [active, setActive] = useState('MAINDASHBOARD');

  return (
    <div className="flex h-screen w-screen">
      <section className="h-full w-[350px] bg-[#013462] transform hidden sm:block transition-all duration-1000">
        <SIDEMENU setActive={setActive} />
      </section>
      
      <section className="h-full bg-[#00111F] w-full transition-all duration-1000">
        {active === 'MAINDASHBOARD' && <MAINDASHBOARD />}
        
        {active === 'GARAGE' && <GARAGE />}
        {active === 'CONSULTARSINIESTROS' && <CONSULTARSINIESTROS />}
        {active === 'ADDACCIDENTS' && <ADDACCIDENTS />}
      </section>
    </div>
  );
}

export default App;


