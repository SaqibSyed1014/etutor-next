'use client';

import * as React from "react"

import { cn } from "@/lib/utils"

type InputProps = React.ComponentProps<"input"> & {
    charLimit?: number;
    appendIcon?: React.ReactNode;
    showIconSeparator?: boolean
}
const Input = React.forwardRef<HTMLInputElement, InputProps & React.ComponentProps<"input">>(
  ({ className,
       type,
       charLimit,
       appendIcon,
       showIconSeparator ,
       ...props
   }, ref) => {

      const [value, setValue] = React.useState("")
      const [error, setError] = React.useState("")

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const inputValue = e.target.value
          if (charLimit === undefined || inputValue.length <= charLimit) {
              setValue(inputValue)
              setError("")
              props.onChange?.(e) // call external onChange if passed
          } else {
              setError(`Only ${charLimit} characters allowed.`)
          }
      }

    return (
        <div>
            <div className="relative">
                {appendIcon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    {appendIcon}
                </div>
                }
                {showIconSeparator && <div className="absolute h-7 w-px bg-gray-100 left-[40px] top-2.5 z-10"></div>}
                <input
                    type={type}
                    className={cn(
                        "flex w-full h-12 shadow-none border border-gray-100 px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50",
                        className,
                        appendIcon && 'pl-12',
                        error && "border border-error-500 focus:border-error-500"
                    )}
                    ref={ref}
                    value={value}
                    onInput={handleChange}
                    {...props}
                />
                {charLimit && <span className="text-base text-gray-700 absolute right-3 top-1/2 -translate-y-1/2">
                    {value?.length || 0}/{charLimit}
                    </span>}
            </div>
            {error && <p className="text-sm text-error-500">{error}</p>}
        </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
