import { useEffect } from "react";
import { useState } from "react";


const UseLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch {
      console.log(err);
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));

    
  }, [key, value]);

  return [value, setValue];
};

export default UseLocalStorage;
