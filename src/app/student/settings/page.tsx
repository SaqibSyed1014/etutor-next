'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Upload, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const accountFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Please enter a valid email address'),
  bio: z.string().max(50, 'Title must be less than 50 characters').optional(),
});

const passwordFormSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type AccountFormValues = z.infer<typeof accountFormSchema>;
type PasswordFormValues = z.infer<typeof passwordFormSchema>;

const Page = () => {
  const [profileImage, setProfileImage] = useState<string>("/images/people/student-1.jpg");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();

  const accountForm = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      bio: '',
    },
  });

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onAccountSubmit = (data: AccountFormValues) => {
    console.log('Account data:', data);
    toast({
      title: "Changes saved",
      description: "Your account settings have been updated successfully.",
    });
  };

  const onPasswordSubmit = (data: PasswordFormValues) => {
    console.log('Password data:', data);
    toast({
      title: "Password changed",
      description: "Your password has been updated successfully.",
    });
    passwordForm.reset();
  };

  return (
    <div className="py-8">
      <h1 className="text-2xl mb-6">Account settings</h1>

      <div className="space-y-8">
        {/* Account Settings */}
        <Card className="border-0">
          <CardContent>
            <Form {...accountForm}>
              <form onSubmit={accountForm.handleSubmit(onAccountSubmit)} className="space-y-6">
                <div className="flex items-start gap-20">
                    {/*Image Preview*/}
                    <div className="p-11 border border-gray-100">
                        <div className="flex flex-col items-center gap-5 w-[280px]">
                            <div className="relative aspect-square">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />

                                <label htmlFor="image-upload"
                                       className="cursor-pointer absolute bottom-0 left-0 right-0 py-3 flex gap-2 justify-center items-center bg-black/50 hover:bg-black/80 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path d="M8.0625 7.68647L12 3.75L15.9375 7.68647" stroke="white"
                                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 14.2492V3.75195" stroke="white" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25"
                                            stroke="white" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                    <p className="text-white text-sm">
                                        Upload Photo
                                    </p>
                                </label>
                            </div>
                            <div className="text-center">
                                <Input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                                <p className="text-gray-600">
                                    Image size should be under 1MB and image ration needs to be 1:1
                                </p>
                            </div>
                        </div>
                    </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={accountForm.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First name</FormLabel>
                          <FormControl>
                            <Input placeholder="First name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={accountForm.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last name</FormLabel>
                          <FormControl>
                            <Input placeholder="Last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                      <div className="col-span-2">
                          <FormField
                              control={accountForm.control}
                              name="username"
                              render={({field}) => (
                                  <FormItem>
                                      <FormLabel>Username</FormLabel>
                                      <FormControl>
                                          <Input placeholder="Enter your username" {...field} />
                                      </FormControl>
                                      <FormMessage/>
                                  </FormItem>
                              )}
                          />
                      </div>

                      <div className="col-span-2">
                        <FormField
                          control={accountForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Email address" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="col-span-2">
                          <FormField
                              control={accountForm.control}
                              name="bio"
                              render={({ field }) => (
                                  <FormItem>
                                      <FormLabel>Title</FormLabel>
                                      <FormControl>
                                          <div className="relative">
                                              <Input
                                                  placeholder="Your tittle, proffesion or small biography"
                                                  charLimit={50}
                                                  {...field}
                                              />
                                          </div>
                                      </FormControl>
                                      <div className="flex justify-between">
                                          <FormMessage />
                                      </div>
                                  </FormItem>
                              )}
                          />
                      </div>

                      <div className="mt-1">
                          <Button type="submit">
                              Save Changes
                          </Button>
                      </div>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Change Password */}
        <Card className="border-0">
          <CardContent>
            <Form {...passwordForm}>
              <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-5 w-full max-w-[588px]">
                <FormField
                  control={passwordForm.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showCurrentPassword ? "text" : "password"}
                            placeholder="Password"
                            {...field}
                          />
                          <div
                            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-gray-700 [&>svg]:hover:text-primary-500 [&>svg]:size-4"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          >
                            {showCurrentPassword ? <EyeOff /> : <Eye />}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={passwordForm.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showNewPassword ? "text" : "password"}
                            placeholder="Password"
                            {...field}
                          />
                          <div
                            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-gray-700 [&>svg]:hover:text-primary-500 [&>svg]:size-4"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? <EyeOff /> : <Eye />}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={passwordForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm new password"
                            {...field}
                          />
                          <div
                            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-gray-700 [&>svg]:hover:text-primary-500 [&>svg]:size-4"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff /> : <Eye />}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="mt-1">
                  Change Password
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
