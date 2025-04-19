import Logo from "../../assets/logo.svg";
import { Button } from "../Button";

const navigation = [
  {name: 'Home', href: 'https://www.youtube.com/'},
  {name: 'About', href: 'https://www.youtube.com/'},
  {name: 'Products', href: 'https://www.youtube.com/'},
  {name: 'Team', href: 'https://www.youtube.com/'},
  {name: 'Contact', href: 'https://www.youtube.com/'},
]

export function NavBar(){
  return(
    <header>
      <div className="flex flex-row justify-between items-center mx-[260px] mt-[48px] mb-[0px] p-[8px]">
        <img src={Logo} alt="Logo" className="flex-none w-[100px] h-[50px]"/>
        <nav>
          {navigation.map((item) => (
            <a
            key={item.name}
            href={item.href}
            className={"no-underline text-greenhouse-white font-inter font-normal text-[20px] ml-[40px]"}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <Button
        variant={"secundary"}
        icon={"secundary"}
        >
          EcoVision
        </Button>
      </div>
    </header>
  );
}