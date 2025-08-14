"use client";
import { copyToClipboard } from "@/lib/utils";
import { Copy } from "lucide-react";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import Toast from "@/lib/toast";

function ToastPage() {
  const code = `
export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
`;
  return (
    <div className="mx-4">
      <h1 className="text-3xl sm:text-4xl font-bold">Copy to clipboard</h1>
      <p className="mt-2 text-gray-700">A simple reusable copy function</p>

      <div className="mt-2 relative">
        <Copy
          className="text-gray-400 h-5 absolute right-2 top-2 cursor-pointer"
          onClick={() => {
            new Toast("").success("Code Copied Successfully");
            copyToClipboard(code);
          }}
        />
        <SyntaxHighlighter
          language="javascript"
          codeTagProps={{
            className: "",
            style: {
              backgroundColor: "#f0f0f0",
              padding: "5px",
              color: "black",
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default ToastPage;
