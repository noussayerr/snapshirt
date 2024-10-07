import React,{useEffect,useRef} from "react";
import { motion, useInView } from 'framer-motion';
import { ShoppingCart  } from 'lucide-react';
import { useProductStore } from "../store/useProductStore";
import { useCartStore } from "../store/useCartStore";
import LoadingSpinner from "../components/spiner";
const ProductItem = ({ product }) => {
	const { addToCart } = useCartStore();
	console.log(product)
	return (
		<div className="col-span-12 md:col-span-6 lg:col-span-4">
			<img
                  src={product.image}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
                  />

                <div className="relative text-center text-lg">
                  <h3 className=" font-bold text-black group-hover:underline group-hover:underline-offset-4">
				  	{product.name}
                  </h3>
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-black">
					  {product.price} DT
                    </span>
                  </p>
				  <div className="text-[#ff6d30] absolute top-1 right-10 bg-white shadow-lg rounded-full w-10 h-10 p-2">
				  	<button onClick={(e)=>addToCart(product)}>
						<ShoppingCart />
				  	</button>
				  </div>
				</div>		  
		</div>
	);
};



const Shop = () => {
	const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
	const { products,fetchAllProducts,loading } = useProductStore();
  	useEffect(() => {
    	fetchAllProducts()
  	},[])
	return (
		<motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
		<section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			{/* shapes */}
			<div className="absolute top-0 right-0">
				<img
					src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_shape2.png"
					alt=""
					/>
			</div>
			<div className="absolute top-1/2 left-0">
				<img
					src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_shape1.png"
					alt=""
					/>
			</div>

			<div className="container relative px-4 mx-auto">
				<h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
					Our Products
				</h2>
				{
					loading?
					(
					<div >
							<LoadingSpinner />
					</div>
					)
					:
					(
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							animate={ {opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.5 }}
						>
							<div className="grid grid-cols-12 gap-6 mt-6">
								{products.map((product, index) => (
									product.productType === 'Product' ?
									null
									:<ProductItem key={index} product={product} />
								))}
							</div>
						</motion.div>
					)
				}
			</div>
		</section>
	</motion.div>
	);
};

export default Shop;