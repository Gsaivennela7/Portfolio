import Aos from 'aos';
import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/UI/Profile';
import Experience from './components/UI/Experience'
function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (<>
    <Header/>
    <main><Profile/>
    <Experience/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
