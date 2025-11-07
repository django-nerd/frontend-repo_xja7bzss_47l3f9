import Header from './components/Header';
import ParallaxScene from './components/ParallaxScene';
import SamuraiCat from './components/SamuraiCat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full text-white bg-slate-950 selection:bg-rose-400/30 selection:text-white">
      {/* Top hero with title */}
      <Header />

      {/* Parallax background scene and petals */}
      <ParallaxScene />

      {/* Samurai cat jump on scroll */}
      <SamuraiCat />

      {/* Ending section */}
      <Footer />
    </div>
  );
}

export default App;
