import React from "react";

function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

React.useEffect(() => {
  const input = document.querySelector("#chatinput")
  const handleInput = (e: Event) => {
      if (!input) return;
      e.target.style.height = "auto";
      e.target.style.height = clamp(e.target.scrollHeight, 40, 200) + "px";
  };

  input.addEventListener("input", handleInput);

  // Cleanup function to remove event listener
  return () => {
    input.removeEventListener("input", handleInput);
  };
}, []);

export const ChatTextInput = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> // Add ChatInputAreaProps to the type definition
>(({ ...props }, ref) => {

  return (
    <textarea
      ref={ref}
      id="chatinput"
      className="p-4 w-full focus:outline-none bg-transparent resize-none "
      placeholder="Type your message here..."
      {...props}
    />
  );
});
ChatTextInput.displayName = "ChatTextInput";
