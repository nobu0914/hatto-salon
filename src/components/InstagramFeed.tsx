"use client";

import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "feed-id": string },
        HTMLElement
      >;
    }
  }
}

export default function InstagramFeed() {
  useEffect(() => {
    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    document.head.append(s);
    return () => {
      document.head.removeChild(s);
    };
  }, []);

  return <behold-widget feed-id="dkQ6HkSCCUMZIgK2wzPO" />;
}
