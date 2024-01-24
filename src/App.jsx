import Footer from "./components/Footer";
import HeorSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ResultSheet from "./components/ResultSheet";

function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <HeorSection />
      <ResultSheet />
      <Footer />
    </div>
  );
}

export default App;
