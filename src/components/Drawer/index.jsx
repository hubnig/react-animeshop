import styles from "./Drawer.module.scss";

function Drawer({ onClose, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between align-center mb-30">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="img/del-point.svg"
            alt="del"
          />
        </h2>
        <div className={styles.items}>
          {items.map((obj) => (
            <div className={styles.cartItem}>
              <img
                className="mr-20"
                width={70}
                height={70}
                src={obj.imageUrl}
                alt="cover"
              />
              <div className="mr-20">
                <p className="mb-5">{obj.name}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img
                className={styles.removeBtn}
                src="img/del-point.svg"
                alt="del"
              />
            </div>
          ))}
        </div>
        <div className={styles.cartTotalBlock}>
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
          <button className={styles.greenButton}>
            Оформить заказ <img src="img/arrow-right.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
