import { useState } from 'react';

const useLocalStorage = (key, fallback) => {
	const [storedValue, setStoredValue] = useState(() => {
		const value = window.localStorage.getItem(key);
		if (value) {
			try {
				return JSON.parse(value);
			} catch (_) {
				return fallback;
			}
		} else {
			window.localStorage.setItem(key, JSON.stringify(fallback));
			return fallback;
		}
	});
	const setValue = (newValue) => {
		window.localStorage.setItem(key, JSON.stringify(newValue));
		setStoredValue(newValue);
	};
	return [storedValue, setValue];
};

export default useLocalStorage;
