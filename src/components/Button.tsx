import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
  base: "px-[26px] py-[12px] text-center h-[60px] rounded-greenhouse-md",
  
  variants: {
    variant: {
      primary: "bg-transparent text-greenhouse-green-500", 
      secundary: "bg-greenhouse-green-500 text-greenhouse-white",
      tertiary: "bg-greenhouse-green-200 text-greenhouse-green-500",
    }
  },

  defaultVariants: {
    variant: 'primary',
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants>{
  children: ReactNode,
  icon: "primary" | "secundary",
}

export function Button({children, variant, icon, ...rest}:ButtonProps){
  if (icon == "primary") {
    return(
      <button {...rest} className={`${buttonVariants({variant})} flex flex-row items-center justify-center`}>
        {children}
          <i className="ph ph-[arrow-right--bold] ml-[6px] w-[18px] h-[15px] flex-none"></i>
      </button>
    );
  } 
  if (icon == "secundary") {
    return(
      <button {...rest} className={buttonVariants({variant})}>
        {children}
      </button>
    );
  }
}
