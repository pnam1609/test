import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";

export default function Clipboard() {
    const [isCopied, setIsCopied] = useState(false);

    const codeSnippet = `0xfbca66b80ce8e181cc04f71e4878688cfd745e76`;

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    return (
        <div className="code-snippet border" style={{ marginTop: 30, backgroundColor: "#afb3b8" }}>
            <div className="code-section" style={{ position: 'relative' }}>
                <span className="d-flex align-items-center">{codeSnippet}</span>
                <CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
                    <span style={{ position: "absolute", right: 0, top: -5, fontSize: "120%" }}>{isCopied ? "Copied!" : <MdContentCopy />}</span>
                </CopyToClipboard>
            </div>
        </div>
    );
}