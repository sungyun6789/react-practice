const saveToLocalStorage = (store) => (next) => (action) => {
  if (action.meta?.localStorage) {
    localStorage.setItem(action.meta?.localStorage, JSON.stringify(action));
  }
  return next(action);
};
