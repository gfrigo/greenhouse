import { Phone, Envelope, MapPin, InstagramLogo, LinkedinLogo, WhatsappLogo, XLogo, FacebookLogo} from "@phosphor-icons/react";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import GreenhouseFooter from "../../assets/greenhouse-footer.png"

export function Footer(){
  return(
    <div className="flex flex-col gap-[80px]">
      <div className="mt-[60px] ml-[80px] mr-[80px] flex flex-row">

        <div className="flex flex-col mr-[16px] w-[70vw] gap-[16px]">
          <div className="flex justify-center p-[40px] rounded-greenhouse-lg bg-greenhouse-green-50">
            <div className="flex flex-row gap-[250px]">
              <div className="flex flex-col items-start gap-[20px]">
                <h1 className="font-inter font-semibold text-[40px] text-greenhouse-green-500">
                  Contact
                </h1>
                <div className="flex flex-row justify-center items-center">
                  <Phone className="size-[28px] mr-[14px] text-greenhouse-green-300" />
                  <p className="font-inter font-normal text-[20px] text-greenhouse-green-300">(11) 98312-8190</p>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <Envelope className="size-[28px] mr-[14px] text-greenhouse-green-300" />
                  <p className="font-inter font-normal text-[20px] text-greenhouse-green-300">contato@empresa.com</p>
                </div>
                <div className="flex flex-row justify-center items-start">
                  <MapPin className="size-[28px] mr-[14px] text-greenhouse-green-300" />
                  <p className="font-inter font-normal text-[20px] text-greenhouse-green-300">Address</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[20px]">
                <h1 className="font-inter font-semibold text-[40px] text-greenhouse-green-500">Resource</h1>
                <p className="font-inter font-normal text-[20px] text-greenhouse-green-300">Privacy & Policy</p>
                <p className="font-inter font-normal text-[20px] text-greenhouse-green-300">Terms & Conditions</p>
                <p className="font-inter font-normal text-[20px] text-greenhouse-green-300">SAC (Citizen Service)</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-evenly p-[40px] rounded-greenhouse-lg bg-greenhouse-green-50">
            <InstagramLogo className="size-[40px] text-greenhouse-green-300"/>
            <LinkedinLogo className="size-[40px] text-greenhouse-green-300"/>
            <WhatsappLogo className="size-[40px] text-greenhouse-green-300"/>
            <XLogo className="size-[40px] text-greenhouse-green-300"/>
            <FacebookLogo className="size-[40px] text-greenhouse-green-300"/>
          </div>
        </div>

        <div className="flex flex-col w-[30vw] gap-[20px] justify-center items-center p-[40px] rounded-greenhouse-lg bg-greenhouse-green-50">
          <img src={Logo} alt="Logo" className="flex-none w-[100px] h-[50px]"/>
          <h1 className="font-inter font-bold text-[44px] text-greenhouse-green-500">
            Get in Touch
          </h1>
          <p className="font-inter font-normal text-[20px] text-greenhouse-green-300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  laudantium, totam rem aperiam, eaque.</p>
            <Button
              variant={"tertiary"}
              icon={"primary"}
              size={"full"}
              >
                Shop Lumera
            </Button>
        </div>
      </div>
      <img src={GreenhouseFooter} alt="Greenhouse Footer" className="rounded-greenhouse-lg mx-[80px] max-h-[400px] object-cover"/>
    </div>
  );
}