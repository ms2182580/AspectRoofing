import Aspect from "./AspectSection/Aspect";
import Experience from "./CustomerExperience/Experience";
import Home from "./HomeSection/Home";
import Product from "./OurProductSection/Product";
import Patner from "./PatnerSection/Patner";
import Roofing from "./RoofingServices/Roofing";

export default function App() {
  return (
    <div>
      <Home />
      <Roofing />
      <Product />
      <Experience />
      <Patner />
      <Aspect />
    </div>
  );
}
