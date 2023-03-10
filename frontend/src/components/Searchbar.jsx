
/**
 * Component for a searchbar
 * @param {*} props Object containing properties:
 * - params: Parameters object
 * - updateParams: Updates params
 * - handleSubmit: Function to trigger submit event
 * @returns 
 */
const Searchbar = ({params, updateParams, handleSubmit}) => {
	return (
		<form
			className='flex flex-row items-center max-w-sm'
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit(e.target.value);
			}}
		>
			<div className='flex'>
				<label
					htmlFor='dropdown-button'
					className='sr-only'
					placeholder='Sort By'
				/>
				<select	
					id='dropdown-button'
					className='
						apperance-none cursor-pointer 
						flex-shrink-0 z-10 inline-flex py-2.5 px-2
                        text-sm font-medium text-center text-primary-900 
						bg-accent2 hover:bg-accent 
                        dark:bg-primary-700 dark:hover:bg-primary-600 
                        border border-primary-300 rounded-l-lg
						dark:text-tc dark:border-primary-600
						focus:outline-none focus:ring-primary-100 
						dark:focus:ring-primary-700'
					defaultValue="Sort By"
				>
					<option className=' text-primary-500' value='select-default'>Sort by</option>
					<option value='name-asc'>Surname asc</option>
					<option value='name-desc'>Surname desc</option>
				</select>
				<div className='relative w-full'>
					<input
						type='search'
						id='search-dropdown'
						className='
                            block p-2.5 pr-12 w-full z-10 text-sm 
                            text-primary-900 
                            rounded-r-lg border 
                            dark:bg-primary-700 dark:border-primary-600 
                            dark:placeholder-primary-400 dark:text-tc
                            dark:border-l-primary-700'
						placeholder='Search'
						value={params?.filterString ?? ''}
						onChange={(e) => updateParams({filterString: e.target.value})}
						required
					/>
				</div>
			</div>
		</form>
	);
};

export default Searchbar;
