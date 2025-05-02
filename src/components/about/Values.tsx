import { Icon } from "@phosphor-icons/react";

interface ValueItemProps {
  icon: Icon;
  title: string;
  backgroundColor: string;
  colorText: string;
  colorIcon: string;
}

export function Values({icon:IconComponent, title, backgroundColor, colorText, colorIcon}:ValueItemProps){
  return(
    <div className={`flex flex-col w-[250px] h-[300px] rounded-greenhouse-lg ${backgroundColor} justify-center items-center`}>
      <IconComponent className={`w-[60px] h-[60px] ${colorIcon}`} />
      <p className={`font-inter font-normal text-[26px] ${colorText}`}>
        {title}
      </p>
    </div>
  );
}