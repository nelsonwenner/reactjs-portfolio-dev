import{ useState, useEffect } from 'react';

const usePersistedState = (key, initialState) => {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);
    
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {

    if (!document.body.classList.value) {
      document.body.classList.add(state);
    }

    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;