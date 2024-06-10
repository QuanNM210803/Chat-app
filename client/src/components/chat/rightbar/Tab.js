function Tab({ label, isActive, onClick }) {
	return (
		<button
			className={`text-gray-700 px-4 py-2 ${isActive ? 'text-blue-500' : ''}`}
			onClick={onClick}
		>
			{label}
			{isActive && <div className="h-1 bg-blue-500 mt-1"></div>}
		</button>
	)
}
export default Tab 