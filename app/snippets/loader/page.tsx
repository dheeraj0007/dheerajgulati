"use client";
import { copyToClipboard } from "@/lib/utils";
import { Copy } from "lucide-react";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import Toast from "@/lib/toast";

function ToastPage() {
  const code = `export default function Loader({ show }) {
  return show ? <div className="loader"></div> : null;
}
`;

  const code2 = `/* Loader */

.loader {
  border: 10px solid #eef0f1;
  border-top: 10px solid #3b49df;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
 `;
  return (
    <div className="mx-4">
      <h1 className="text-3xl sm:text-4xl font-bold">Loader</h1>
      <p className="mt-2 text-gray-700">A simple reusable loader in React</p>

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
      <div className="mt-2 relative">
        <Copy
          className="text-gray-400 h-5 absolute right-2 top-2 cursor-pointer"
          onClick={() => {
            new Toast("").success("Code Copied Successfully");
            copyToClipboard(code2);
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
          {code2}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default ToastPage;
