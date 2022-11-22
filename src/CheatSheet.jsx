import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import toast, { Toaster } from "react-hot-toast";
import "./CheatSheet.css";

import IconCopy from "./assets/IconCopy.png";

/**
 * List of available styles
 *  https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD
 */
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
// import IconClick from "./assets/IconClick";

const CheatSheet = ({ title, code }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onTitle = () => {
    if (isOpen === false) {
      setIsOpen(true);
    }
    if (isOpen === true) {
      setIsOpen(false);
    }
  };

  function copyText() {
    const textToCopy = `${code}`;
    navigator.clipboard.writeText(textToCopy);
    toast("Quote Copied to Clipboard", {
      icon: "✅",
    });
  }

  return (
    <div className="cheat-sheet-app">
      <h2 onClick={onTitle}>{title}</h2>
      <div>
        {isOpen === true && (
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {code}
          </SyntaxHighlighter>
        )}
        <Toaster position="bottom-top-center" />
        {isOpen === true && (
          <img
            src={IconCopy}
            onClick={copyText}
            className="cheat-sheet-icon-copy"
          />
        )}
      </div>
    </div>
  );
};

export default CheatSheet;
