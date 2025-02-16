import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddAchievementSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { z } from "zod";
import axios from "axios";
import Image from "next/image";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";

const FrontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

type AddAchievementProps = {
    show: boolean;
    setShow: (value: boolean) => void;
};

const AddAchievementForm = ({ show, setShow }: AddAchievementProps) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [imageLoader, setImageLoader] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const form = useForm({
        resolver: zodResolver(AddAchievementSchema),
        defaultValues: {
            title: "",
            description: "",
            achievementImageUrl: "",
            achievedAt: new Date(),
        }
    });

    const uploadImage = async (formData: FormData) => {
        try {
            const response = await axios.post(`${FrontendUrl}/api/admin/files`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.status !== 200) {
                console.error('Upload failed', response.data.message);
                toast.error('Failed to upload image', {
                    className: 'text-red-500 bg-transparent'
                }
                );
                return null;
            }

            return response.data.fileUrl;
        } catch (error) {
            console.error('Upload failed', error);
            alert('Failed to upload image');
            return null;
        }
    };


    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setImageLoader(true);
        const file = e.target.files?.[0];

        if (!file) {
            toast.error('Error uploading image', {
                className: 'text-red-500 bg-transparent'
            });
            return;
        }

        const data = new FormData();
        data.append('file', file);

        try {
            const image = await uploadImage(data);
            console.log("Image Link", image);
            if (image) {
                setImageUrl(image);
                form.setValue('achievementImageUrl', image);
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to upload image', {
                className: 'text-red-500 bg-transparent'
            });
        } finally {
            setImageLoader(false);
        }
    };


    const handleSubmit = async (values: z.infer<typeof AddAchievementSchema>) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${FrontendUrl}/api/admin/add-achievement`, values);

            if (response.data.status !== 200) {
                console.error('Failed to submit achievement', response.data.message);
                toast.error('Failed to submit achievement', {
                    className: 'text-red-500 bg-transparent'
                });
                return;
            }

            toast.success('Achievement submitted successfully', {
                className: 'text-emerald-500 bg-transparent'
            });

            form.reset();
            setShow(false);
        } catch (error) {
            console.error('Failed to submit achievement', error);
            toast.error('Failed to submit achievement', {
                className: 'text-red-500 bg-transparent'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <>
            {show && (
                <div className="fixed h-full w-full inset-0 flex justify-center items-center backdrop-blur z-50">
                    <div className="p-6 rounded-lg shadow-lg text-white w-[400px] border backdrop-blur-3xl bg-black/80 space-y-5">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold">Add Achievement</h1>
                            <Button
                                variant="destructive"
                                onClick={() => setShow(false)}
                            >
                                Close
                            </Button>
                        </div>
                        <form
                            className="space-y-4"
                            onSubmit={form.handleSubmit(handleSubmit)}
                            aria-disabled={isLoading}
                        >
                            <Form {...form}>
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Achievement</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="text" placeholder="Enter your title" />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Achievement Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    placeholder="Enter your achievement description"
                                                    className="resize-none"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="achievementImageUrl"
                                    render={({ field: { value, ...fieldProps } }) => (
                                        <FormItem>
                                            <FormLabel>Achivement Image</FormLabel>
                                            <FormControl>
                                                <div className="flex items-center space-x-2">
                                                    <Input
                                                        {...fieldProps}
                                                        ref={fileInputRef}
                                                        type="file"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={(e) => {
                                                            handleImageUpload(e);
                                                        }}
                                                    />
                                                    <Button
                                                        variant="default"
                                                        className="w-full"
                                                        onClick={triggerFileInput}
                                                        disabled={imageUrl ? true : false}
                                                    >
                                                        {imageLoader ? <>Uploading... <Loader className="animate-spin" /></> : 'Upload Image'}
                                                    </Button>
                                                    {imageUrl && (
                                                        <Image loader={({ src }) => {
                                                            return src;
                                                        }} src={imageUrl} alt="Achievement Image" height={100} width={100} className="rounded-sm" />
                                                    )}
                                                </div>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="achievedAt"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Achievement Date</FormLabel>
                                            <FormControl>
                                                <DatePicker
                                                    date={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </Form>
                            <Button type="submit" className="bg-blue-500 w-full">
                                {isLoading ? <>Adding... <Loader className="animate-spin" /></> : "Add Achievement"}
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddAchievementForm;