export const getFromLocalStorage = <T = unknown>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return null;
    }
    return JSON.parse(item);
  } catch (error) {
    return null;
  }
};

export const setToLocalStorage = <T = unknown>(key: string, value: T) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Can't set to localStorage");
  }
};
