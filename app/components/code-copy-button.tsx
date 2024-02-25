import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

interface CodeCopyButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    code: string;
}
const CodeCopyButton = ({ code, ...props }: CodeCopyButtonProps) => {
    const [showCopied, setShowCopied] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setShowCopied(true);
    };

    useEffect(() => {
        const timeout = setTimeout(() => setShowCopied(false), 2000);
        return () => {
            clearTimeout(timeout);
        };
    }, [showCopied]);

    return (
        <button
            {...props}
            className={`${props.className} p-4 text-slate-300/50 hover:text-slate-300`}
            onClick={copyCode}
        >
            {showCopied ? <Check /> : <Copy />}
        </button>
    );
};

export default CodeCopyButton;
