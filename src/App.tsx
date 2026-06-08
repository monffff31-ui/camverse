import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StylePreview from "./components/StylePreview";
import CameraExplorer from "./components/CameraExplorer";
import InteractiveCameraBody from "./components/InteractiveCameraBody";
import Simulator from "./components/Simulator";
import Compare from "./components/Compare";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div className="section container">
          <StylePreview />
        </div>

        <CameraExplorer />

        <InteractiveCameraBody />

        <div className="section container">
          <div className="split">
            <Simulator />
            <Compare />
          </div>
        </div>

        <FeatureCards />
      </main>
      <Footer />
    </>
  );
}
