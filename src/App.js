import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Categories from './components/categori/Categories'
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Content from './components/content/Content';
import Content2 from './components/content2/Content2';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Content />
      <Content2/>
      <About />
      <Footer/>
    </div>
  );
}

export default App;
