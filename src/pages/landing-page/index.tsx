import { Home } from "./Home";
import { About } from "./About";
import { Product } from "./Product";
import { FrequentlyAskedQuestions } from "./FrequentlyAskedQuestions";
import { Team } from "./Team";
import { Footer } from "./Footer";

export function LandingPage(){
  return(
    <div className="mb-[100px]">
      <Home/>
      <About/>
      <Product/>
      <FrequentlyAskedQuestions/>
      <Team/>
      <Footer/>
    </div>
  );
}