import { onlyText } from "react-children-utilities";
import CodeCopyButton from "./code-copy-button";

interface CustomCodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
    children?: React.ReactNode;
}

export default function Pre({ children, ...props }: CustomCodeBlockProps) {
    const code = onlyText(children);

    return (
        <div className="relative max-w-full">
            <CodeCopyButton code={code} className="absolute right-0 top-0" />
            <pre {...props}>{children}</pre>
        </div>
    );
}
