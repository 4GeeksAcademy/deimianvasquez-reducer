import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const handleClick = () => {
		dispatch({type:"ADD_FAVORITES"})
	}

	return (
		<div className="text-center mt-5">
			<h1>Hello {store.message}!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>

			<button
				onClick={handleClick}
			>Add Name</button>
		</div>
	);
}; 