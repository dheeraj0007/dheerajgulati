"use client";
import { copyToClipboard } from "@/lib/utils";
import { Copy } from "lucide-react";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import Toast from "@/lib/toast";

function ToastPage() {
  const code = `import toast from 'react-hot-toast';
  class Toast {
    private toastId: string;
    constructor(message: string) {
      this.toastId = toast.loading(message);
      return;
    }
    public error(message: string) {
      toast.error(message, {
        id: this.toastId,
      });
      return;
    }
    public success(message: string) {
      toast.success(message, {
        id: this.toastId,
      });
      return;
    }
    public loading(message: string) {
      toast.loading(message, {
        id: this.toastId,
      });
      return;
    }
    public dismiss() {
      toast.dismiss(this.toastId);
      return;
    }
  }

export default Toast;
`;
  return (
    <div className="mx-4">
      <h1 className="text-3xl sm:text-4xl font-bold">Toast</h1>
      <p className="mt-2 text-gray-700">
        A simple reusable notification toasts
      </p>

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
