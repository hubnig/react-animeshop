import "./App.scss";
import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mide Suede",
    price: 12999,
    imageUrl: "/img/sneakers/01.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: "/img/sneakers/02.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mide Suede",
    price: 8499,
    imageUrl: "/img/sneakers/03.jpg"
  },
  {
    name: "Мужские Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/04.jpg"
  },
  {
    name: "Мужские Кроссовки Under Armour Curry 8",
    price: 15199,
    imageUrl: "/img/sneakers/05.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Kyrie 7",
    price: 11299,
    imageUrl: "/img/sneakers/06.jpg"
  },
  {
    name: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 10799,
    imageUrl: "/img/sneakers/07.jpg"
  },
  {
    name: "Мужские Кроссовки Nike LeBron XVIII",
    price: 16499,
    imageUrl: "/img/sneakers/08.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 13999,
    imageUrl: "/img/sneakers/09.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/img/sneakers/10.png"
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/11.png"
  },
  {
    name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: 11299,
    imageUrl: "/img/sneakers/12.jpg"
  }
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
