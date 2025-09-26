import { useCallback, useEffect, useRef, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const isMounted = useRef(false);
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // ignore write errors
    }
  }, [key, storedValue]);

  const update = useCallback((value: T | ((prev: T) => T)) => {
    setStoredValue((prev) =>
      typeof value === "function" ? (value as (p: T) => T)(prev) : value,
    );
  }, []);

  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      // ignore
    }
  }, [key]);

  return [storedValue, update, remove] as const;
}
