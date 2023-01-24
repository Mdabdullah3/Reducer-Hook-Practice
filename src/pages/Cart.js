import React from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../context/ProductProvider";
import { HashLoader } from "react-spinners";

const Cart = () => {
  const { state: {
    cart,
    loading,
    error
  }, } = useProduct()

  let content;

  if (loading) {
    content = <HashLoader color="#36d7b7" />
  }

  if (error) {
    content = <p>Something Went Wrong</p>
  }

  if (!loading && !error && cart.length) {
    content = cart.map(product => <ProductCard product={product}></ProductCard>)
  }
  if (!loading && !error && cart.length === 0) {
    content = <h1>Nothing To Show, Product list is empty</h1>
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10 items-center'>
      {content}
    </div>
  );
};
export default Cart;
