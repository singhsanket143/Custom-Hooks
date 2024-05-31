import { useState } from "react";

function useLocalStorage(key, initialValue) {
    
    const [storedValue, setStoredValue] = useState(getStoredValue);

    function getStoredValue() {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    }

    function setValue(value) {
        try {
            const valueToStore = value;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            setStoredValue(valueToStore);
        } catch (error) {
            console.log(error);
            return;
        }
      
    }

    function removeValue() {
        try {
            
            window.localStorage.removeItem(key);
            setStoredValue(initialValue);
        } catch (error) {
            console.log(error);
            return;
        }
    }

    return [storedValue, setValue, removeValue];
}

export default useLocalStorage;