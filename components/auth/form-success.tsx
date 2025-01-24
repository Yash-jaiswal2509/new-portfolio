import { CircleCheckIcon } from "lucide-react";

type FormSuccessProps = {
    message?: string
}

const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null;
    return (
        <div className="bg-emerald-500/15 rounded-md p-3 flex items-center gap-x-2 text-sm text-emerald-500">
            <CircleCheckIcon size={16} />
            <span>{message}</span>
        </div>
    )
}

export default FormSuccess;