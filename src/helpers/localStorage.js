export const saveDataToLocal = (key, value) => window.localStorage.setItem(key, value);

export const getDataFromLocal = (key) => window.localStorage.getItem(key);

export const removeDataFromLocal = (key) => window.localStorage.removeItem(key);

export const removeAllDataFromLocal = () => window.localStorage.clear();