import axios from 'axios'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Drawer from './components/Drawer'
import Header from './components/Header'
import Account from './pages/Account'
import Favorites from './pages/Favorites'
import Home from './pages/Home'

function App() {
	const [items, setItems] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [favorites, setFavorites] = React.useState([])
	const [searchValue, setSearchValue] = React.useState('')
	const [cartOpened, setCartOpened] = React.useState(false)

	React.useEffect(() => {
		axios
			.get('https://6619959b125e9bb9f29a55f5.mockapi.io/products')
			.then(res => {
				setItems(res.data)
			})
		axios.get('https://6619959b125e9bb9f29a55f5.mockapi.io/cart').then(res => {
			setCartItems(res.data)
		})
		axios
			.get('https://636524e2f711cb49d1f662c6.mockapi.io/favorites')
			.then(res => {
				setFavorites(res.data)
			})
	}, [])

	const addToCart = obj => {
		axios
			.post('https://6619959b125e9bb9f29a55f5.mockapi.io/cart', obj)
			.then(res => setCartItems(prev => [...prev, res.data]))
		// axios.post('https://636524e2f711cb49d1f662c6.mockapi.io/cart', obj)
		// setCartItems((prev) => [...prev, obj])
	}

	const addToFavorite = async obj => {
		try {
			if (favorites.find(favObj => favObj.id === obj.id)) {
				axios.delete(
					`https://636524e2f711cb49d1f662c6.mockapi.io/favorites/${obj.id}`,
				)
			} else {
				const { data } = await axios.post(
					'https://636524e2f711cb49d1f662c6.mockapi.io/favorites',
					obj,
				) //.then(res => setCartItems(prev => [...prev, res.data]))
				setFavorites(prev => [...prev, data])
			}
		} catch (error) {
			alert('Не удалось добавить в избраное')
		}
	}

	const onChangeSearchInput = event => {
		setSearchValue(event.target.value)
	}

	const onRemoveCartItem = id => {
		axios.delete(`https://6619959b125e9bb9f29a55f5.mockapi.io/cart/${id}`)
		setCartItems(prev => prev.filter(item => item.id !== id))
	}

	return (
		<div className='main'>
			<video
				src='img/videoBackground.mp4'
				poster='img/coverBackground.png'
				autoPlay
				loop
				muted
			/>
			<div className='wrapper clear'>
				{cartOpened && (
					<Drawer
						items={cartItems}
						onClose={() => setCartOpened(false)}
						onRemove={onRemoveCartItem}
					/>
				)}
				<Header onClickCart={() => setCartOpened(true)} />
				<Routes>
					<Route
						path='/'
						element={
							<Home
								items={items}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								onChangeSearchInput={onChangeSearchInput}
								addToFavorite={addToFavorite}
								addToCart={addToCart}
							/>
						}
					/>
					<Route
						path='/favorites'
						element={
							<Favorites items={favorites} addToFavorite={addToFavorite} />
						}
					/>
					<Route path='/account' element={<Account />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
