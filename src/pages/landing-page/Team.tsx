import { CardTeam } from "../../components/team/CardTeam";
import GabrielFrigo from "../../assets/team/gabriel-frigo.jpg";

const cardTeam = [
  {image: GabrielFrigo, name: 'Gabriel Frigo', role: "Technology"},
  {image: GabrielFrigo, name: 'Gabriel Frigo', role: "Technology"}
]

export function Team(){
  return(
    <div className="flex flex-col justify-center items-center mt-[60px]">
      <div className="flex flex-row mb-[40px]">
      <h1 className="font-inter font-bold text-[64px] text-greenhouse-green-500">Our</h1>
      <h1 className="ml-[16px] l-font-inter font-bold text-[64px] text-greenhouse-green-200">Team</h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        {cardTeam.map((item) => (
                <CardTeam
                image={item.image}
                name={item.name}
                role={item.role}
                />
              ))}
      </div>
    </div>
  );
}