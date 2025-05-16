'use client';

import { useState } from "react";
import {Input} from "@/components/ui/input.tsx";
import {Eye, EyeOff} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ArrowRight} from "@/assets/icons/common-icons.tsx";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { z } from "zod";

const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

type SignupFormData = z.infer<typeof signupSchema>;

const SignUp = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SignupFormData, string>>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    // Clear error when typing
    if (errors[name as keyof SignupFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      signupSchema.parse(formData);

      // Form is valid
      toast({
        title: "Account created successfully!",
        description: "Redirecting to login...",
      });

      setTimeout(() => {
        router.push("/login");
      }, 2000);

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof SignupFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path && err.path.length > 0) {
            const field = err.path[0] as keyof SignupFormData;
            fieldErrors[field] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
      <div className="flex flex-1">
        {/* Left side - Illustration */}
        <div className="w-full max-w-[45%] hidden md:flex bg-secondary-100 items-center justify-center">
          <img
              src="/images/illustrations/pino.png"
              alt="Person working on computer"
              className="w-[80%]"
          />
        </div>

        {/* Right side - Form */}
        <div className="flex items-center justify-center flex-1 py-10">
          <div className="w-full max-w-[648px] section-layout">
            <h1 className="section-heading">Create your account</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-[18px]">
                  <div>
                    <label htmlFor="firstName">Full Name</label>
                    <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>

                  <div>
                    <label htmlFor="lastName">Last name</label>
                    <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                 </div>

                  <div>
                    <label htmlFor="username">Username</label>
                    <Input
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        className={errors.username ? "border-red-500" : ""}
                    />
                    {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password">Password</label>
                  <div className="relative">
                    <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create password"
                        className={errors.password ? "border-red-500" : ""}
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="relative">
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                        className={errors.confirmPassword ? "border-red-500" : ""}
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <Checkbox
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onCheckedChange={(checked) => {
                              setFormData(prev => ({
                                ...prev,
                                terms: checked === true
                              }));
                              if (errors.terms) {
                                setErrors(prev => ({
                                  ...prev,
                                  terms: undefined
                                }));
                              }
                            }}
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600 !pb-0">
                          I agree with all of your <a href="#" className="text-secondary-500 hover:underline">Terms &
                          Conditions</a>
                        </label>

                      </div>

                      <Button type="submit">
                        Create Account
                        <ArrowRight/>
                      </Button>
                    </div>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}</div>
            </form>

            <div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500 font-medium">SIGN IN WITH</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-6">
                <button className="flex items-center border border-gray-100 hover:bg-gray-50">
                  <div className="size-11 grid place-items-center border-r border-gray-100 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                         fill="none">
                      <g clip-path="url(#clip0_357_4867)">
                        <path
                            d="M4.43242 12.0836L3.73625 14.6825L1.19176 14.7363C0.431328 13.3259 0 11.7122 0 9.99734C0 8.3391 0.403281 6.77535 1.11812 5.39844H1.11867L3.38398 5.81375L4.37633 8.06547C4.16863 8.67098 4.05543 9.32098 4.05543 9.99734C4.05551 10.7314 4.18848 11.4347 4.43242 12.0836Z"
                            fill="#FBBB00"/>
                        <path
                            d="M19.8252 8.13281C19.94 8.73773 19.9999 9.36246 19.9999 10.0009C19.9999 10.7169 19.9246 11.4152 19.7812 12.0889C19.2944 14.3812 18.0224 16.3828 16.2604 17.7993L16.2598 17.7987L13.4065 17.6532L13.0027 15.1323C14.1719 14.4466 15.0857 13.3735 15.567 12.0889H10.2197V8.13281H15.645H19.8252Z"
                            fill="#518EF8"/>
                        <path
                            d="M16.2595 17.7975L16.2601 17.798C14.5464 19.1755 12.3694 19.9996 9.99965 19.9996C6.19141 19.9996 2.88043 17.8711 1.19141 14.7387L4.43207 12.0859C5.27656 14.3398 7.45074 15.9442 9.99965 15.9442C11.0952 15.9442 12.1216 15.648 13.0024 15.131L16.2595 17.7975Z"
                            fill="#28B446"/>
                        <path
                            d="M16.383 2.30219L13.1434 4.95437C12.2319 4.38461 11.1544 4.05547 10 4.05547C7.39344 4.05547 5.17859 5.73348 4.37641 8.06812L1.11871 5.40109H1.11816C2.78246 2.1923 6.1352 0 10 0C12.4264 0 14.6511 0.864297 16.383 2.30219Z"
                            fill="#F14336"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_357_4867">
                          <rect width="20" height="20" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="flex-1 text-center"><span>Google</span></div>
                </button>
                <button className="flex items-center border border-[#4267B2] hover:bg-gray-50">
                  <div className="size-11 grid place-items-center border-r border-[#4267B2]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                      <path d="M6.25 6.875V4.375C6.25 3.685 6.81 3.125 7.5 3.125H8.75V0H6.25C4.17875 0 2.5 1.67875 2.5 3.75V6.875H0V10H2.5V20H6.25V10H8.75L10 6.875H6.25Z" fill="#4267B2"/>
                    </svg>
                  </div>

                  <div className="flex-1 text-center"><span>Facebook</span></div>
                </button>
                <button className="flex items-center border border-gray-100 hover:bg-gray-50">
                  <div className="size-11 grid place-items-center border-r border-gray-100 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M13.7493 0C12.6831 0.0737496 11.4368 0.756246 10.7106 1.64499C10.0481 2.45124 9.5031 3.64873 9.7156 4.81247C10.8806 4.84872 12.0843 4.14998 12.7818 3.24623C13.4343 2.40499 13.9281 1.21499 13.7493 0Z" fill="black"/>
                      <path d="M17.9624 6.70843C16.9387 5.42468 15.5 4.67969 14.1412 4.67969C12.3475 4.67969 11.5887 5.53843 10.3425 5.53843C9.05749 5.53843 8.08125 4.68219 6.53001 4.68219C5.00627 4.68219 3.38378 5.61343 2.35503 7.20592C0.908792 9.44841 1.15629 13.6646 3.50003 17.2559C4.33877 18.5409 5.45877 19.9859 6.92376 19.9984C8.2275 20.0108 8.595 19.1621 10.3612 19.1534C12.1275 19.1434 12.4625 20.0096 13.7637 19.9959C15.23 19.9846 16.4112 18.3834 17.2499 17.0984C17.8512 16.1771 18.0749 15.7134 18.5412 14.6734C15.15 13.3821 14.6062 8.55967 17.9624 6.70843Z" fill="black"/>
                    </svg>
                  </div>

                  <div className="flex-1 text-center"><span>Apple</span></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SignUp;
