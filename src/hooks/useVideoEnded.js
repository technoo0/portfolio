import { useState, useEffect, useRef } from "react";

export const useVideoEnded = () => {
  const ElementRef = useRef();
  const [ended, setended] = useState(false);
  const OnEnded = () => {
    
    setended(true);
  };
 
  useEffect(() => {
    ElementRef.current.addEventListener("ended", OnEnded);
    

    return () => {
      if (ElementRef.current) {
        ElementRef.current.removeEventListener("ended", OnEnded);
      }
      
    };
  }, [ended, setended]);
  return [ElementRef, ended];
};
