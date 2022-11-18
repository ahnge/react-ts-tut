import { useEffect, useRef } from "react";

const DomRef = () => {
  const textInputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" name="textInput" ref={textInputRef} />
    </div>
  );
};

export default DomRef;
