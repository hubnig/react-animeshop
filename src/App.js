import './App.scss'
import React from 'react'
import axios from 'axios'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://636524e2f711cb49d1f662c6.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])

  const addToCart = (obj) => {
    setCartItems((prev) => [...prev, obj])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="cu-p del"
                src="img/del-point.svg"
                alt="del"
              />
            )}
          </div>
        </div>
        <div className="d-flex justify-between flex-wrap">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onClickFavorite={() => console.log('Добавили в закладки')}
                onClickPlus={(obj) => addToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
