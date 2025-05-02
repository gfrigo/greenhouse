import GreenhouseFreqAskedQst from "../../assets/greenhouse-freqaskedqst.png"
import { CardQuestions } from "../../components/frequently-asked-questions/cardQuestions"

const cardQuestions = [
  {question: "What sensors and automated features does the greenhouse include?", answer: "Lorem ipsum dolor sit amet consectetur. Neque amet aliquam lectus ultrices maecenas lorem malesuada iaculis. "},
  {question: "Can the greenhouse be monitored and controlled remotely via an app or website?", answer: "Lorem ipsum dolor sit amet consectetur. Neque amet aliquam lectus ultrices maecenas lorem malesuada iaculis. "},
  {question: "What is the size of the growing area and how many plants can it support?", answer: "Lorem ipsum dolor sit amet consectetur. Neque amet aliquam lectus ultrices maecenas lorem malesuada iaculis. "},
  {question: "What is the power source and energy consumption of the greenhouse?", answer: "Lorem ipsum dolor sit amet consectetur. Neque amet aliquam lectus ultrices maecenas lorem malesuada iaculis. "},
  {question: "Is the system modular or expandable if I want to grow more plants in the future?", answer: "Lorem ipsum dolor sit amet consectetur. Neque amet aliquam lectus ultrices maecenas lorem malesuada iaculis. "},
]

export function FrequentlyAskedQuestions(){
  return(
    <div className="mt-[60px]">
      <h1 className="font-inter font-semibold text-[64px] mb-[16px] text-greenhouse-green-500 text-center">FAQ</h1>
      <div className="flex flex-row justify-center items-center gap-[16px]">
        <img src={GreenhouseFreqAskedQst} alt="Portable Smarter greenhouse on frequently asked questions" className="max-h-[524px] object-cover rounded-greenhouse-lg"/>
        <div>
          {cardQuestions.map((item) => (
            <CardQuestions
            question = {item.question}
            answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}