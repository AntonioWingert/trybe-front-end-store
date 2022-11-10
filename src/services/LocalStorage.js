export const setLocalStorage = (items) => {
  localStorage.setItem('LOCALSTORAGEITEMS', items);
};

// Lembrar de chamar o stringify

export const getLocalStorage = () => {
  const returnedItems = localStorage.getItem('LOCALSTORAGEITEMS');
  if (returnedItems) return JSON.parse(returnedItems);
  return [];
};
