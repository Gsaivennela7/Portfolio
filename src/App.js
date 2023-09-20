import Aos from 'aos';
import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/UI/Profile';
import Experience from './components/UI/Experience';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (<>
    <Header/>
    <main>
    <Profile/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
