import './App.scss'
import React from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios
      .get('https://636524e2f711cb49d1f662c6.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })
    axios
      .get('https://636524e2f711cb49d1f662c6.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data)
      })
    axios
      .get('https://636524e2f711cb49d1f662c6.mockapi.io/favorites')
      .then((res) => {
        setFavorites(res.data)
      })
  }, [])

  const addToCart = (obj) => {
    axios
      .post('https://636524e2f711cb49d1f662c6.mockapi.io/cart', obj)
      .then((res) => setCartItems((prev) => [...prev, res.data]))
    // axios.post('https://636524e2f711cb49d1f662c6.mockapi.io/cart', obj)
    // setCartItems((prev) => [...prev, obj])
  }

  const addToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://636524e2f711cb49d1f662c6.mockapi.io/favorites/${obj.id}`
        )
      } else {
        const { data } = await axios.post(
          'https://636524e2f711cb49d1f662c6.mockapi.io/favorites',
          obj
        ) //.then(res => setCartItems(prev => [...prev, res.data]))
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в избраное')
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onRemoveCartItem = (id) => {
    axios.delete(`https://636524e2f711cb49d1f662c6.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="main">
      <video src="img/videoBackground.mp4" autoPlay loop muted />
      <div className="wrapper clear">
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
            path="/"
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
          ></Route>
          <Route
            path="/favorites"
            element={
              <Favorites items={favorites} addToFavorite={addToFavorite} />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App

