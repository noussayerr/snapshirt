import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useCartStore } from "../store/useCartStore";
const Cartitem = ({ item, index }) => {
	const {removeFromCart , updateQuantity  } = useCartStore();
	const { _id, name, description,price, image,quantity } = item
	return (
		<div className=" flex flex-col md:flex-row p-2 md:p-6 mt-6">
			<div className="w-full lg:max-w-[150px] rounded-xl border mr-4 md:mr-6 mb-4 lg:mb-0">
				<a href="#!">
					<img
						src={image}
						alt={name}
						className="max-w-full h-auto rounded-xl mx-auto"
						/>
						
				</a>
			</div>

			<div className="flex">
				<div>
					<div className="text-base md:text-lg hover:text-blue-600 mb-4">
						<a href="#!">{name}</a>
					</div>
					<div>
						<h3 className="text-xl font-bold text-[#FF6D3D]">{price} DT</h3>
					</div>
					<div className="h-10 border dark:border-slate-700 rounded-full flex w-36 relative mt-4 overflow-hidden">
			<button
				className="px-4 py-1 inline-flex justify-center border-r dark:border-slate-700 text-blue-600 hover:bg-blue-600 hover:bg-opacity-10"
				type="button"
				onClick={() => updateQuantity(item._id, item.quantity - 1)}
			>
				-
			</button>
			<input
				type="number"
				className="px-4 py-1 inline-flex justify-center max-w-[60px] text-center bg-transparent focus:outline-none"
				Value={item.quantity}
				
			/>
			<button
				className="px-4 py-1 inline-flex justify-center border-l dark:border-slate-700 text-blue-600 hover:bg-blue-600 hover:bg-opacity-10"
				type="button"
				onClick={() => updateQuantity(item._id, item.quantity + 1)}
			>
				+
			</button>
		</div>
				</div>
				<div>
					<button onClick={()=>{removeFromCart(item._id)}} className="w-10 h-10 bg-gray-200 dark:bg-slate-900 text-[#FF6D3D] inline-flex justify-center items-center rounded-full">
						<FontAwesomeIcon icon={faTrashAlt} />
					</button>
				</div>
			</div>
		</div>
	);
};
export default Cartitem