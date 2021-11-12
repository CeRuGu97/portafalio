import './App.css';
// import { Header } from './secctions/header/header';
import { Precentation } from './secctions/precentation/precentation';
import { AboutMe } from './secctions/aboutMe/aboutMe';
import { Skills } from './secctions/skills';
import { Proyects } from './secctions/proyects';
import { Footer } from './secctions/footer';
import Navbar from './secctions/header/navbar/navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Precentation />
        <AboutMe />
        <Skills />
        <Proyects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
