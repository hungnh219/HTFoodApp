import { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [productFavoriteList, setProductFavoriteList] = useState([]);

  const setProductFavorite = (productList) => {
    setProductFavoriteList(productList);
  };

  const addProductFavorite = (product) => {
    let productId = product.id;
    const existingProduct = productFavoriteList.find((product) => product.id === productId);
    if (!existingProduct) {
      setProductFavoriteList([...productFavoriteList, product]);
    }
  };

  const removeProductFavorite = (index) => {
    const updatedProductFavoriteList = [...productFavoriteList];
    updatedProductFavoriteList.splice(index, 1);
    setProductFavoriteList(updatedProductFavoriteList);
  };

  return (
    <FavoriteContext.Provider value={{ productFavoriteList, setProductFavorite, addProductFavorite, removeProductFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  return useContext(FavoriteContext);
};