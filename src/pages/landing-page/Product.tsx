import Rotate from "../../assets/products/rotate.png"
import Forest1 from "../../assets/products/forestone.jpg";
import Forest2 from "../../assets/products/foresttwo.jpg";
import { useEffect, useState } from "react";

export function Product(){
  const [currentImage, setCurrentImage] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const productImages = [Rotate, Forest1, Forest2]

  useEffect(() => {
    const timer = setTimeout(() => setIframeLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return(
    <div className="bg-greenhouse-green-50 mt-[60px] p-[80px] mx-[80px] rounded-greenhouse-lg">
      <div className="flex flex-col mx-[80px]">
      <h1 className="font-inter font-bold text-[64px] mb-[26px] text-greenhouse-green-200">LUMERA</h1>
      <h1 className="font-inter font-bold text-[64px] leading-0 text-greenhouse-green-300">GREENHOUSE</h1>
      </div>
      <div className="flex flex-row items-start mt-[100px] mx-[80px] gap-[20px]">
        <div className="flex flex-col gap-[10px]">
          {productImages.map((image, index) => (
            <div key={index} className="w-[100px] h-[100px] object-cover">
            <img 
              src={image} 
              alt="Product image" 
              onClick={() => setCurrentImage(index)} 
              className="w-full h-full cursor-pointer rounded-greenhouse-sm"
            />
            </div>
          ))}
        </div>
        {
          currentImage === 0 ? (
            <div className="w-full h-[600px] mr-[80px] rounded-greenhouse-lg bg-gray-100 flex items-center justify-center">
            {iframeLoaded ? (
              <iframe src="https://sketchfab.com/models/bd011152b8f943f5b1c7f42e60be8267/embed" className="w-[3000px] mr-[80px] h-full rounded-greenhouse-lg"></iframe>
            ) : (
              <div className="text-center p-4">
                <p className="font-inter font-semibold text-[24px] text-greenhouse-green-400">Carregando visualização 3D...</p>
              </div>
            )}
          </div>
          ) : (
            <div className="w-full max-h-[600px]">
              <img src={productImages[currentImage]} alt="Product image" className="w-[3000px] max-h-[600px] object-cover rounded-greenhouse-lg"/>
            </div>
          )
        }
      </div>
      <div className="flex flex-col mx-[80px]">
        <h1 className="font-inter font-semibold text-[32px] mt-[40px] text-greenhouse-green-500">Tech Greenhouse Lumera</h1>
        <p className="font-inter font-normal text-[26px] mt-[12px] text-greenhouse-green-300 text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error.</p>
        <p className="font-inter font-semibold text-[40px] mt-[20px] text-greenhouse-green-500">R$299,99</p>
      </div>
    </div>
  );
}