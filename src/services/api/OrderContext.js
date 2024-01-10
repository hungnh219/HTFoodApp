import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {

  const [productOrderList, setProductOrderList] = useState([]);

  const setProductOrder = (productList) => {
    setProductOrderList(productList);
  };

  const addProductOrder = (productList) => {
    setProductOrderList(productList);
  };

  return (
    <OrderContext.Provider value={{ productOrderList, setProductOrder, addProductOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};