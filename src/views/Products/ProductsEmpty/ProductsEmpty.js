import React from 'react';
import { emptyBox } from '../../../assets';

const ProductsEmpty = () => {
   return (
      <div className='products-empty'>
         <img src={emptyBox} alt='Empty box' />
         <p>No products found!</p>
      </div>
   );
};

export default ProductsEmpty;
