import { useLocalStorage } from 'react-use';

export function useCart() {
  const [value, setValue] = useLocalStorage<{ id: string; quantity: number }[]>(
    'cart',
    []
  );

  function addItem(id: string) {
    const currentItem = value!.find((item) => item.id === id);
    if (currentItem) {
      setValue(() =>
        value!.map((item) => {
          if (item.id === currentItem.id) {
            return { ...item, quantity: currentItem.quantity + 1 };
          }

          return item;
        })
      );
      return;
    }

    setValue((items) => [...items!, { id, quantity: 1 }]);
  }

  function editQuantity(id: string, quantity: number) {
    const currentItem = value!.find((item) => item.id === id);
    if (currentItem) {
      setValue((items) =>
        items!.map((item) => {
          if (item.id === id) {
            return { ...item, quantity };
          }

          return item;
        })
      );
      return;
    }

    setValue((items) => [...items!, { id, quantity }]);
  }

  function removeItem(id: string) {
    setValue((items) => items!.filter((item) => item.id !== id));
  }

  return {
    addItem,
    removeItem,
    items: value,
    editQuantity,
  };
}
