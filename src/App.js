import "./App.scss";
import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mide Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mide Suede",
    price: 8499,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    name: "Мужские Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex justify-between">
          {arr.map((obj) => (
            <Card
              name={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClickFavorite={() => console.log('Добавили в закладки')}
              onClickPlus={() => console.log('Добавили в корзину')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
