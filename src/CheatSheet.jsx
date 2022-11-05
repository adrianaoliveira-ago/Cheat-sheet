import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/**
 * List of available styles
 *  https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD
 */
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CheatSheet = ({ title, code }) => {
  return (
    <div>
      <h2>{title}</h2>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CheatSheet;
