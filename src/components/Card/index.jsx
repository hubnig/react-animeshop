import React from "react";
import styles from "./Card.module.scss";

function Card({name, price, imageUrl, onClickPlus, onClickFavorite}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  
  const isPlus = () =>{
    onClickPlus({name, price, imageUrl});
    setIsAdded(!isAdded);
  }
  const isLike = () =>{
    onClickFavorite({name, price, imageUrl});
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={isLike}>
        <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="like" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="cover" />
      <h5>{name}</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={isPlus}
          src={isAdded ? "/img/checked.svg" : "/img/plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
