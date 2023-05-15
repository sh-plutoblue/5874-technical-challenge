import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

import './App.scss';
import Master from './components/Master/Master';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Studies from './pages/Studies/Studies';
import About from './pages/About/About';
import Testimonials from './pages/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Master>
      <Home />
      <Services />
      <Projects />
      <Studies />
      <About />
      <Testimonials />
      <Footer />
    </Master>
  </IonApp>
);

export default App;
