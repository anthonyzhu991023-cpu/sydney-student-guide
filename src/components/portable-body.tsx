import { PortableText } from "@portabletext/react";
import type { Article } from "@/types/content";

export function PortableBody({ article }: { article: Article }) {
  if (article.body?.length) {
    return (
      <PortableText
        value={article.body}
        components={{
          block: {
            h2: ({ children }) => <h2>{children}</h2>,
            h3: ({ children }) => <h3>{children}</h3>,
            normal: ({ children }) => <p>{children}</p>
          },
          list: {
            bullet: ({ children }) => <ul>{children}</ul>,
            number: ({ children }) => <ol>{children}</ol>
          }
        }}
      />
    );
  }

  return (
    <>
      {article.fallbackBody?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  );
}
