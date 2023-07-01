import { useEffect, useState } from "react";

type TextProps = {
  className?: string;
  text: string;
  shouldTruncate?: boolean;
  maxSize?: number;
};

export function Text({
  className = "",
  text,
  shouldTruncate = false,
  maxSize = 50,
}: TextProps) {
  const [isTruncated, setIsTruncated] = useState(true);
  const [truncatedText, setTruncatedText] = useState(
    shouldTruncate && shouldTruncate ? text.substring(0, maxSize) : text
  );

  useEffect(() => {
    const truncatedText =
      isTruncated && shouldTruncate ? text.substring(0, maxSize) : text;

    setTruncatedText(truncatedText);
  }, [isTruncated]);

  return (
    <div>
      <p className={`${className} whitespace-pre-line`}>
        {truncatedText}
        {isTruncated &&
          truncatedText.length < text.length &&
          shouldTruncate &&
          "..."}
      </p>

      {shouldTruncate && (
        <button
          className="text-sm text-darkgrey"
          onClick={() => setIsTruncated(!isTruncated)}
        >
          {isTruncated ? "Read more" : "Read less"}
        </button>
      )}
    </div>
  );
}
