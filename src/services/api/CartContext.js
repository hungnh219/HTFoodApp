import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productCartList, setProductCartList] = useState([]);
  const [totalFee, setTotalFee] = useState(0);

  const setProductCart = (productList) => {
    const updatedProductList = productList.map((product) => ({ ...product, quantity: 1 }));
    setProductCartList(updatedProductList);
  };

  const addProduct = (product, quantity = 1) => {
    let productId = product.id;
    const existingProduct = productCartList.find((product) => product.id === productId);
    if (!existingProduct) {
      setProductCartList([...productCartList, { ...product, quantity }]);
      // setProductCartList([...productCartList, product]);
    }
    getTotalFee([...productCartList, { ...product, quantity }]);
    // getTotalFee([...productCartList, product]);
  };

  const removeProduct = (index) => {
    const updatedProductCartList = [...productCartList];
    updatedProductCartList.splice(index, 1);
    setProductCartList(updatedProductCartList);
    getTotalFee(updatedProductCartList);
  };

  const getTotalFee = (productList) => {
    if (productList == undefined) {
      setTotalFee(0);
      return;
    }
    let subtotal = productList.reduce((total, item) => total + item.price * item.quantity, 0);
    let deliveryFee = 5; // or calculate based on subtotal
    setTotalFee(subtotal);
  };

  const increaseQuantityCart = (index) => {
    const updatedProductList = [...productCartList];
    updatedProductList[index] = { ...updatedProductList[index], quantity: updatedProductList[index].quantity + 1 };
    setProductCartList(updatedProductList);
    getTotalFee(updatedProductList);
  };

  const decreaseQuantityCart = (index) => {
    const updatedProductList = [...productCartList];
    updatedProductList[index] = { ...updatedProductList[index], quantity: updatedProductList[index].quantity - 1 };
    setProductCartList(updatedProductList);
    getTotalFee(updatedProductList);
  };

  return (
    <CartContext.Provider value={{ totalFee, productCartList, setProductCart, addProduct, removeProduct, increaseQuantityCart, decreaseQuantityCart, getTotalFee }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};