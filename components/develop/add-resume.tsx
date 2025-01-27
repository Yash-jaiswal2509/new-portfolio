"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { useCurrentUser } from "@/hooks/use-current-user";
import axios from "axios";
import { toast } from "sonner";

const FrontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || "";

const AddResume = () => {
    const [loading, setLoading] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const user = useCurrentUser();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const link = formData.get("link") as string;

        if (!user || user.role !== "ADMIN") {
            toast.error("Sorry!, only admin can upload resume", {
                className: "text-red-500 bg-transparent",
            });
            setLoading(false);
            return;
        }

        if (!link) {
            toast.error("Please enter a valid google drive link", {
                className: "text-red-500 bg-transparent",
            });
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                `${FrontendUrl}/api/admin/add-resume`,
                { user, link },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.status !== 200) {
                toast.error(response.data.message || "Something went wrong", {
                    className: "text-red-500 bg-transparent",
                });
            } else {
                toast.success("Resume uploaded successfully", {
                    className: "text-emerald-500 bg-transparent",
                });
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while uploading resume", {
                className: "text-red-500 bg-transparent",
            });
        } finally {
            formRef.current?.reset();
            setLoading(false);
        }
    };

    if (!isClient) {
        return null;
    }

    return (
        <Card className="bg-transparent text-white">
            <CardHeader>
                <CardTitle>Upload Resume</CardTitle>
                <CardDescription>Paste your resume Google Drive link</CardDescription>
            </CardHeader>
            <CardContent>
                <form ref={formRef} onSubmit={onSubmit}>
                    <Input disabled={loading} type="text" placeholder="Google Drive Link" name="link" />
                    <Button disabled={loading} type="submit" className="bg-blue-500 mt-2 w-full">
                        Upload
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AddResume;
