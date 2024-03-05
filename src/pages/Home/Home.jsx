import { useDispatch, useSelector } from "react-redux"
import { increment } from "../../redux/slices/counterSlice"
import { useGetPokemonByNameQuery } from "../../redux/slices/apiSlice"

export default function Home() {
    const { data, error, isLoading } = useGetPokemonByNameQuery('ditto')
    const pokemon = data?.sprites.front_default
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }

    return (
        <div className="home">
            <img src='/vrst_logo.svg' />
            <h1>Welcome to your VRST app!</h1>
            <h4>The following tech is setup for you:</h4>
            <ul>
                <li><strong>Vite</strong>: A build tool that offers fast development and deployment.</li>
                <li><strong>React</strong>: A library for building user interfaces, providing the foundation of your application.</li>
                <li><strong>React Router</strong>: Manages navigation, ensuring smooth transitions and organization in React applications.</li>
                <li><strong>Redux Toolkit</strong>: Simplifies state management in React, offering tools to streamline Redux code.</li>
                <li><strong>RTK Query</strong>: An extension of Redux Toolkit for efficient data fetching and caching, enhancing application performance.</li>
                <li><strong>Sass</strong>: A CSS extension language, enabling more flexible and maintainable styling in React projects.</li>
            </ul>
            <div className="home-counter">
                <p>Redux store example:</p>
                <button onClick={handleIncrement}>Increment</button>
                <p>{count}</p>
            </div>
            <div className="home-pokemon">
                <p>RTK Query example:</p>
                {isLoading && !error ? 
                    <p>Loading...</p> 
                    : <img src={pokemon} />
                }
                {error &&
                    <p>Oops! Something went wrong loading your ditto...</p>
                }
            </div>
        </div>
    )
}