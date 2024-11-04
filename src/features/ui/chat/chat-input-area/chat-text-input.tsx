import React from "react";

function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

export const ChatTextInput = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> // Add ChatInputAreaProps to the type definition
>(({ ...props }, ref) => {

    React.useEffect(() => {
      if (!ref) return
      ref.addEventListener("input", (e) => {
        ref.style.height = "auto";
        ref.style.height = clamp(ref.scrollHeight, 40, 200) + "px";
      })
    });

  return (
    <textarea
      ref={ref}
      className="p-4 w-full focus:outline-none bg-transparent resize-none "
      placeholder="Type your message here..."
      {...props}
    />
  );
});
ChatTextInput.displayName = "ChatTextInput";
