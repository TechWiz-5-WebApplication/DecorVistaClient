import React from 'react';
import CategoriesLeft from '../components/Products/CategoriesLeft';
import ProductsList from '../components/Products/ProductsList';

const Products = () => {
    return (
      <>
      <ProductsList/>
      </>
    //     <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
    //   <div className="lg:col-span-1">
    //     <CategoriesLeft />
    //   </div>
    //   <div className="lg:col-span-4">
    //     <div className="flex justify-between items-center mb-4">
    //       <h1 className="text-2xl font-bold">Price drop</h1>
    //       <div>
    //         <input
    //           type="text"
    //           placeholder="Search by name products"
    //           className="border p-2 rounded-l-lg"
    //         />
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
    //           Search
    //         </button>
    //       </div>
    //     </div>
    //     <ProductsList />
    //   </div>
    // </div>
    );
};

export default Products;