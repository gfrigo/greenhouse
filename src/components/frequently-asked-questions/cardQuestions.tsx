import { PlusCircle, MinusCircle } from "@phosphor-icons/react";
import { useState } from "react";

interface cardQuestionsProps {
  question: string;
  answer: string;
} 

export function CardQuestions({question, answer}:cardQuestionsProps){
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAnswer = () => {
    setIsOpen(!isOpen)
  };
  
  return(
    <div className="flex flex-col justify-center items-center max-h-[250px] max-w-[660px] p-[24px] my-[12px] border-2 border-solid border-greenhouse-gray-200 rounded-greenhouse-lg">
      <div className="flex justify-between items-center">
        <h1 className="font-inter font-medium text-[20px] text-greenhouse-gray-500">{question}</h1>
        <button onClick={toggleAnswer}>
          {isOpen ? (
            <MinusCircle className="size-[40px] text-greenhouse-gray-500"/>
          ) : (
            <PlusCircle className="size-[40px] text-greenhouse-gray-500"/>
          )}
        </button>  
      </div>
      {isOpen && (
        <div className="flex flex-col">
          <hr className="w-full h-0.5 my-[16px] bg-greenhouse-gray-100 rounded-greenhouse-lg"></hr>
          <p className="font-inter font-normal text-[20px] text-greenhouse-gray-400">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}