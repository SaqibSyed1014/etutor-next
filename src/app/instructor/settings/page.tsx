'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {Globe, UploadSimple} from "@/assets/icons/common-icons";
import {Facebook, Instagram, Linkedin, Twitter, Whatsapp, Youtube} from "@/assets/icons/icons";

const accountFormSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    username: z.string().min(3, 'Username must be at least 3 characters'),
    phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
    title: z.string().min(2, 'Title must be at least 2 characters'),
    biography: z.string().max(500, 'Biography must be less than 500 characters').optional(),
});

const socialFormSchema = z.object({
    personalWebsite: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    whatsapp: z.string().optional(),
    youtube: z.string().optional(),
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
type SocialFormValues = z.infer<typeof socialFormSchema>;
type PasswordFormValues = z.infer<typeof passwordFormSchema>;

const notificationOptions = [
    { id: 'new-course', label: 'I want to know who buy my course' },
    { id: 'review', label: 'I want to know who write a review on my course' },
    { id: 'lecture-comment', label: 'I want to know who commented on my lecture' },
    { id: 'lecture-notes', label: 'I want to know who download my lecture notes' },
    { id: 'payment', label: 'I want to know who replied on my comment' },
    { id: 'profile-views', label: 'I want to know how many people visited my profile' },
    { id: 'lecture-attachments', label: 'I want to know who download my lecture attach file' },
];

const Page = () => {
    const [profileImage, setProfileImage] = useState<string>("/images/people/man-1.png");
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [selectedNotifications, setSelectedNotifications] = useState<string[]>(['new-course', 'review', 'lecture-notes', 'profile-views', 'lecture-attachments']);
    const { toast } = useToast();

    const accountForm = useForm<AccountFormValues>({
        resolver: zodResolver(accountFormSchema),
        defaultValues: {
            firstName: 'Vako',
            lastName: 'Shvili',
            username: 'vako219',
            phoneNumber: '',
            title: '',
            biography: '',
        },
    });

    const socialForm = useForm<SocialFormValues>({
        resolver: zodResolver(socialFormSchema),
        defaultValues: {
            personalWebsite: '',
            facebook: '',
            instagram: '',
            linkedin: '',
            twitter: '',
            whatsapp: '',
            youtube: '',
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

    const handleNotificationChange = (notificationId: string, checked: boolean) => {
        if (checked) {
            setSelectedNotifications([...selectedNotifications, notificationId]);
        } else {
            setSelectedNotifications(selectedNotifications.filter(id => id !== notificationId));
        }
    };

    const onAccountSubmit = (data: AccountFormValues) => {
        console.log('Account data:', data);
        toast({
            title: "Changes saved",
            description: "Your account settings have been updated successfully.",
        });
    };

    const onSocialSubmit = (data: SocialFormValues) => {
        console.log('Social data:', data);
        toast({
            title: "Changes saved",
            description: "Your social profile has been updated successfully.",
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

    const onNotificationSubmit = () => {
        console.log('Selected notifications:', selectedNotifications);
        toast({
            title: "Changes saved",
            description: "Your notification settings have been updated successfully.",
        });
    };

    return (
        <div className="">
            <div className="">
                {/* Left Column */}
                <div className="space-y-8">
                    {/* Account Settings */}
                    <Card className="p-10 border-0 bg-white">
                        <CardContent className="p-0">
                            <Form {...accountForm}>
                                <form onSubmit={accountForm.handleSubmit(onAccountSubmit)} className="space-y-6">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-1 space-y-[18px]">
                                            <h4 className="pb-1">Account Settings</h4>

                                            <div className="grid grid-cols-2 gap-[18px]">
                                                <FormField
                                                    control={accountForm.control}
                                                    name="firstName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Full name</FormLabel>
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
                                                            <FormLabel className="invisible">Last name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Last name" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <FormField
                                                control={accountForm.control}
                                                disabled={true}
                                                name="username"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Username</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter your username" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={accountForm.control}
                                                name="phoneNumber"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Phone Number</FormLabel>
                                                        <FormControl>
                                                            <div className="relative">
                                                                <span className="absolute z-10 left-0 top-0 bottom-0 inline-flex items-center px-3 text-base">
                                                                  <select className="text-primary-500 font-medium focus:outline-0 active:outline-0">
                                                                      <option className="font-normal text-gray-900">+92</option>
                                                                      <option className="font-normal text-gray-900">+91</option>
                                                                      <option className="font-normal text-gray-900">+882</option>
                                                                      <option className="font-normal text-gray-900">+144</option>
                                                                  </select>
                                                                </span>
                                                                <Input
                                                                    placeholder="Your Phone number"
                                                                    className="pl-24"
                                                                    {...field}
                                                                />
                                                            </div>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        {/*Image Preview*/}
                                        <div className="p-8 bg-gray-50 border border-gray-100 w-[264px]">
                                            <div className="flex flex-col items-center gap-5 w-full">
                                                <div className="relative aspect-square w-[200px]">
                                                    <img
                                                        src={profileImage}
                                                        alt="Profile"
                                                        className="w-full h-full object-cover"
                                                    />

                                                    <label htmlFor="image-upload"
                                                           className="cursor-pointer text-sm absolute bottom-0 left-0 right-0 text-white py-3 flex gap-2 justify-center items-center bg-black/50 hover:bg-black/80 transition">
                                                        <UploadSimple />
                                                        <span>Upload Photo</span>
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
                                                    <p className="text-gray-600 text-xs">
                                                        Image size should be under 1MB and image ration needs to be 1:1
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <FormField
                                        control={accountForm.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Title</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Input
                                                            charLimit={50}
                                                            placeholder="Your title, profession or small biography" {...field}
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={accountForm.control}
                                        name="biography"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Biography</FormLabel>
                                                <FormControl>
                                                    <textarea
                                                        placeholder="Your title, profession or small biography"
                                                        className="w-full"
                                                        rows={4}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit">
                                        Save Changes
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>

                    {/* Social Profile */}
                    <Card className="space-y-6 p-10 border-0 bg-white">
                        <CardHeader className="p-0">
                            <CardTitle>Social Profile</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Form {...socialForm}>
                                <form onSubmit={socialForm.handleSubmit(onSocialSubmit)} className="space-y-4">
                                    <FormField
                                        control={socialForm.control}
                                        name="personalWebsite"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Personal Website</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Username"
                                                        appendIcon={<div className="[&_svg]:size-5 text-primary-500"><Globe/></div>}
                                                        showIconSeparator={true}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="grid grid-cols-3 gap-5">
                                        <FormField
                                            control={socialForm.control}
                                            name="facebook"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Facebook</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Username"
                                                            appendIcon={<div className="[&_svg]:size-5 text-primary-500"><Facebook/></div>}
                                                            showIconSeparator={true}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={socialForm.control}
                                            name="instagram"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Instagram</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Username"
                                                            appendIcon={<div className="[&_svg]:size-5 text-primary-500"><Instagram/></div>}
                                                            showIconSeparator={true}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={socialForm.control}
                                            name="linkedin"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Linkedin</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Username"
                                                            appendIcon={<div className="[&_svg]:size-5 text-primary-500"><Linkedin/></div>}
                                                            showIconSeparator={true}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={socialForm.control}
                                            name="twitter"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Twitter</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Username"
                                                            appendIcon={<div className="[&_svg]:size-5 text-primary-500"><Twitter/></div>}
                                                            showIconSeparator={true}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={socialForm.control}
                                            name="whatsapp"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Whatsapp</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Username"
                                                            appendIcon={<div className="[&_svg]:size-5 text-primary-500"><Whatsapp/></div>}
                                                            showIconSeparator={true}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={socialForm.control}
                                            name="youtube"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Youtube</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Username"
                                                            appendIcon={<div className="[&_svg]:size-5 text-primary-500"><Youtube/></div>}
                                                            showIconSeparator={true}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <Button type="submit">
                                        Save Changes
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-2 gap-6">{/* Notifications */}
                        <Card className="space-y-6 p-10 border-0 bg-white">
                            <CardHeader className="p-0">
                                <CardTitle>Notifications</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-6">
                                <div className="space-y-4">
                                    {notificationOptions.map((option) => (
                                        <div key={option.id} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={option.id}
                                                checked={selectedNotifications.includes(option.id)}
                                                onCheckedChange={(checked) =>
                                                    handleNotificationChange(option.id, checked as boolean)
                                                }
                                            />
                                            <Label
                                                htmlFor={option.id}
                                                className="text-sm text-gray-900 cursor-pointer pb-0"
                                            >
                                                {option.label}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                                <Button onClick={onNotificationSubmit}>
                                    Save Changes
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Change Password */}
                        <Card className="space-y-6 p-10 border-0 bg-white">
                            <CardHeader className="p-0">
                                <CardTitle>Change password</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-6">
                                <Form {...passwordForm}>
                                    <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-[18px]">
                                        <FormField
                                            control={passwordForm.control}
                                            name="currentPassword"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Current Password</FormLabel>
                                                    <FormControl>
                                                        <div className="relative">
                                                            <Input
                                                                type={showCurrentPassword ? "text" : "password"}
                                                                placeholder="Password"
                                                                {...field}
                                                            />
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                                                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                                            >
                                                                {showCurrentPassword ? <EyeOff className="h-4 w-4"/> :
                                                                    <Eye className="h-4 w-4"/>}
                                                            </Button>
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={passwordForm.control}
                                            name="newPassword"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>New Password</FormLabel>
                                                    <FormControl>
                                                        <div className="relative">
                                                            <Input
                                                                type={showNewPassword ? "text" : "password"}
                                                                placeholder="Password"
                                                                {...field}
                                                            />
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                                            >
                                                                {showNewPassword ? <EyeOff className="h-4 w-4"/> :
                                                                    <Eye className="h-4 w-4"/>}
                                                            </Button>
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={passwordForm.control}
                                            name="confirmPassword"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Confirm Password</FormLabel>
                                                    <FormControl>
                                                        <div className="relative">
                                                            <Input
                                                                type={showConfirmPassword ? "text" : "password"}
                                                                placeholder="Confirm new password"
                                                                {...field}
                                                            />
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                            >
                                                                {showConfirmPassword ? <EyeOff className="h-4 w-4"/> :
                                                                    <Eye className="h-4 w-4"/>}
                                                            </Button>
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </form>
                                </Form>
                                <Button type="submit">
                                    Save Changes
                                </Button>
                            </CardContent>
                        </Card></div>
                </div>

            </div>
        </div>
    );
};

export default Page;
