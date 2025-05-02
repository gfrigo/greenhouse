import { Values } from "../../components/about/Values";
import { Plant, ShieldCheck, Lightbulb, HeadCircuit } from "@phosphor-icons/react";
import Greenhouse from "../../assets/greenhouse-about.jpg"

const cardValues = [
  {title: 'Sustainability', backgroundColor: 'bg-greenhouse-green-100', icon: Plant, colorText: "text-greenhouse-green-300", colorIcon: "text-greenhouse-green-300"},
  {title: 'Security', backgroundColor: 'bg-greenhouse-orange-100', icon: ShieldCheck, colorText: "text-greenhouse-orange-300", colorIcon: "text-greenhouse-orange-300"},
  {title: 'Inovation', backgroundColor: 'bg-greenhouse-yellow-100', icon: Lightbulb, colorText: "text-greenhouse-yellow-300", colorIcon: "text-greenhouse-yellow-300"},
  {title: 'Technology', backgroundColor: 'bg-greenhouse-blue-100', icon: HeadCircuit, colorText: "text-greenhouse-blue-400", colorIcon: "text-greenhouse-blue-400"},
]

export function About(){
  return(
    <div className="bg-greenhouse-white-100 mt-[60px] p-[80px] mx-[80px] rounded-greenhouse-lg">
      <div className="flex flex-col items-center">
        <div className="mb-[60px] w-[940px]">
          <h1 className="font-inter font-bold text-[64px] mb-[16px] text-greenhouse-green-500 text-center">
            About us
          </h1>
            <p className="font-inter font-normal text-[26px] text-greenhouse-green-300 text-center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.  
            </p>
        </div>
        <div className="flex flex-row justify-center">
            <img src={Greenhouse} alt="Greenhouse about us" className="w-[496px] h-[615px] rounded-greenhouse-lg mr-[16px]"/>
          <div className="grid grid-cols-2 grid-rows-2 gap-[16px] w-fit">
              {cardValues.map((item) => (
                <Values
                title={item.title}
                backgroundColor={item.backgroundColor}
                icon={item.icon}
                colorText={item.colorText}
                colorIcon={item.colorIcon}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}