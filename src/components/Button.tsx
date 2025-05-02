import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";
import ArrowRight  from "../assets/icons/regular/arrow-right.svg";

const buttonVariants = tv({
  base: "px-[26px] py-[12px] text-center h-[60px] rounded-greenhouse-md font-inter font-normal text-[20px]",
  
  variants: {
    variant: {
      primary: "bg-transparent text-greenhouse-green-500", 
      secundary: "bg-greenhouse-green-500 text-greenhouse-white-100",
      tertiary: "bg-greenhouse-green-200 text-greenhouse-green-500",
    },

    size: {
      default: "w-[140px]",
      full: "w-full",
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: "default",
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants>{
  children: ReactNode,
  icon: "primary" | "secundary",
}

export function Button({children, variant, size, icon, ...rest}:ButtonProps){
  const baseClass = buttonVariants({ variant, size });
  
  if (icon == "primary") {
    return(
      <button {...rest} className={`${baseClass} flex flex-row items-center justify-center`}>
        {children}
          <i className="ph ph-[arrow-right--bold] ml-[6px] w-[18px] h-[15px] flex-none"></i>
      </button>
    );
  } 
  if (icon == "secundary") {
    return(
      <button {...rest} className={baseClass}>
        {children}
      </button>
    );
  }
}
