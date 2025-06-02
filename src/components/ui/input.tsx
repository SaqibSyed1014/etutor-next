'use client';

import * as React from "react"

import { cn } from "@/lib/utils"

type InputProps = React.ComponentProps<"input"> & {
    charLimit?: number
}
const Input = React.forwardRef<HTMLInputElement, InputProps & React.ComponentProps<"input">>(
  ({ className, type, charLimit , ...props }, ref) => {

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
                <input
                    type={type}
                    className={cn(
                        "flex w-full h-12 shadow-none border border-gray-100 bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50",
                        className,
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
