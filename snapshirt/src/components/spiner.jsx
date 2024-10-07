

const LoadingSpinner = () => {
	return (
		<div className='min-h-screen  flex items-center justify-center relative overflow-hidden'>
			<div
				className='w-16 h-16 border-4 border-t-4 border-t-black border-black rounded-full'
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
			/>
		</div>
	);
};

export default LoadingSpinner;