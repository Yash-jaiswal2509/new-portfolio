"use client";

import { DownloadIcon, Loader } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";

const FrontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

const DownloadResume = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [resumeLink, setResumeLink] = useState<string | null>(null);

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const response = await axios.get(`${FrontendUrl}/api/admin/download-resume`);

                if (response.data.status !== 200) {
                    toast.error(response.data.message || 'Something went wrong');
                    return;
                }

                const { resume } = response.data;
                setResumeLink(resume);
            }
            catch (error) {
                console.log(error);
                toast.error('An error occurred while fetching resume');
            }
        }

        fetchResume();
    }, []);

    const handleDownload = async () => {
        if (!resumeLink) return;

        setIsLoading(true);

        try {
            const link = document.createElement("a");
            link.href = resumeLink;
            link.download = "Yash_Jaiswal_SWE.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error downloading resume:", error);
            toast.error("An error occurred while downloading resume");
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    };

    return (
        <Button
            onClick={handleDownload}
            disabled={!resumeLink || isLoading}
            className="home-button"
            variant="default"
        >
            {isLoading ? (
                <>
                    Downloading... <Loader className="ml-2 animate-spin" />
                </>
            ) : (
                <>
                    Resume <DownloadIcon className="ml-2" />
                </>
            )}
        </Button>
    );
};

export default DownloadResume;
