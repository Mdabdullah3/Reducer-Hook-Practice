import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useProduct } from "../context/ProductProvider";
import { actionTypes } from "../state/ProductState/ActionTypes";

const ProductCard = ({ product }) => {

  const { dispatch } = useProduct()

  const removeItem = (id) => {
    console.log(id);
    dispatch({ type: actionTypes.REMOVE_ITEMS, payload: id })
  }
  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'

    >
      <div className='h-52 w-52 mx-auto'>
        <img src={product.img} alt="" />
      </div>
      <h1 className='font-bold text-center'>{product.name}</h1>
      <p className='text-center font-semibold mb-3'>Price: {product.price}</p>
      <div className=' flex-1'>
        <p className='text-center font-semibold mb-3'>{product.description}</p>
      </div>
      <div className='flex gap-2 mt-5'>
        <button onClick={() => dispatch({ type: actionTypes.ADD_TO_CART, payload: product })} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
          Add to cart
        </button>
        <button onClick={() => removeItem(product._id)}
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div >
  );
};

export default ProductCard;
