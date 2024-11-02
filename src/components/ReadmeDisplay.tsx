import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import "highlight.js/styles/github.css";

interface ReadmeDisplayProps {
  readmeContent: string;
}

const ReadmeDisplay = ({ readmeContent }: ReadmeDisplayProps) => {
  if (!readmeContent) {
    return null;
  }

  return (
    <div className="prose prose-lg max-w-none bg-white p-6 rounded-lg shadow-md">
      <ReactMarkdown
        children={readmeContent}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeSanitize]}
      />
    </div>
  );
};

export default ReadmeDisplay;
