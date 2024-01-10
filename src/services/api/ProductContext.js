import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const setProductInfo = (productInfo) => {
    setProduct(productInfo);
  };

  return (
    <ProductContext.Provider value={{ product, setProductInfo }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
