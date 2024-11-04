import React from "react";

function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

export const ChatTextInput = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> // Add ChatInputAreaProps to the type definition
>(({ ...props }, ref) => {

    React.useEffect(() => {
      if (!ref || !ref.current) return;
    
      const handleInput = (e: Event) => {
        if (ref.current) {
          ref.current.style.height = "auto";
          // Assume `clamp` is a function to constrain the value
          ref.current.style.height = clamp(ref.current.scrollHeight, 40, 200) + "px";
        }
      };
    
      ref.current.addEventListener("input", handleInput);
    
      // Cleanup function to remove event listener
      return () => {
        ref.current?.removeEventListener("input", handleInput);
      };
    }, []);

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
