import { useState } from "react";


export function useLocalStorage(itemName: string, initialValue : any) {
  const [item, setItem] = useState(() => {
    try {
      const item = localStorage.getItem(itemName);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error("Error retrieving data from localStorage:", err);
      return initialValue;
    }
  });

  function saveItem(newItem: any) {
    setItem(newItem);
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
  }

  return {
    item,
    saveItem,
  };
}
