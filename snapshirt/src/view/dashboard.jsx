
import { BarChart, PlusCircle, ShoppingBasket,Logs  } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import AnalyticsTab from "../components/AnalyticsTab";
import CreateProductForm from "../components/CreateProductForm";
import ProductsList from "../components/ProductsList";
import Orders from "../components/orders";



const AdminPage = () => {
    const tabs = [
        { id: "create", label: "Create Product", icon: PlusCircle },
        { id: "products", label: "Products", icon: ShoppingBasket },
        { id: "analytics", label: "Analytics", icon: BarChart },
		{ id: "orders", label: "Orders", icon: Logs }
    ];
	const [activeTab, setActiveTab] = useState("create");
	return (
		<div className='min-h-screen'>
			<div className=' container mx-auto sm:max-w-6xl  px-4 py-16'>
				<motion.h1
					className='text-4xl font-bold mb-8 text-emerald-400 text-center'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Admin Dashboard
				</motion.h1>

				<div className='flex justify-center mb-8'>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors text-lg font-bold duration-200 ${
								activeTab === tab.id
									? "bg-[#ff6d30] text-white"
									: "bg-[#000000] text-gray-300 hover:bg-gray-600"
							}`}
						>
							<tab.icon className='mr-2 h-5 w-5' />
							{tab.label}
						</button>
					))}
				</div>
				{activeTab === "create" && <CreateProductForm />}
				{activeTab === "products" && <ProductsList />}
				{activeTab === "analytics" && <AnalyticsTab />}
				{activeTab === "orders" && <Orders />}
			</div>
		</div>
	);
};
export default AdminPage;
