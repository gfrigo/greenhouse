interface CardPersonProps {
  image: string;
  name: string;
  role: string;
}

export function CardTeam({image, name, role}:CardPersonProps){
  return(
    <div className="bg-greenhouse-white-100 h-[440px] w-[280px] rounded-greenhouse-lg ml-[40px]">
      <img className="rounded-t-greenhouse-lg w-full h-[320px] object-cover object-bottom mb-[20px]" src={image} alt="Gabriel Frigo" />
      <div className="flex flex-col w-full justify-center items-center">
        <h1 className="font-inter font-medium text-[22px] text-greenhouse-green-500">{name}</h1>
        <p className="font-inter font-medium text-[20px] text-greenhouse-gray-300">{role}</p>
      </div>
    </div>
  );
}