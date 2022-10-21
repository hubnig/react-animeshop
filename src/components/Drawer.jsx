function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between align-center mb-30">
          Корзина{" "}
          <img className="removeBtn cu-p" src="img/del-point.svg" alt="del" />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/2.jpg"
              alt="cover"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/del-point.svg" alt="del" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="cover"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/del-point.svg" alt="del" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="img/arrow-right.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
