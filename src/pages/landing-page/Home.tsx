import Cloud from "../../assets/cloud.png";
import { NavBar } from "../../components/home/NavBar";
import { Button } from "../../components/Button";
import Plant from "../../assets/plant.png"

export function Home() {
  return (
      <div className={`h-screen overflow-hidden bg-greenhouse-gray-200 bg-no-repeat bg-top-right bg-auto`}
      style={{ backgroundImage: `url(${Cloud})` }}>
        <NavBar/>
        <div className="flex flex-row items-center justify-between flex-1 mt-[80px] mb-[48px]">
          <div className="flex flex-col max-w-[540px] ml-[260px]">
            <h1 className="font-inter font-bold text-[52px] mb-[6px] text-greenhouse-green-500 text-left">
              Grow Smarter with Automated Greenhouses
            </h1>
            <p className="font-inter font-normal text-[26px] mb-[32px] text-greenhouse-green-300 text-left">
              Lorem ipsum dolor sit amet consectetur. Neque amet aliquam lectus ultrices maecenas lorem malesuada iaculis. At commodo dui id viverra donec at.
            </p>
            <div className="flex flex-row">
              <Button
                variant={"secundary"}
                icon={"secundary"}
                size={"full"}
                >
                  Buy Lumera
              </Button>
              <Button
                variant={"primary"}
                icon={"primary"}
                size={"full"}
                >
                  Learn more
              </Button>
            </div>
          </div>
          <img src={Plant} alt="Plant"/>
        </div>
      </div>
  );
}
