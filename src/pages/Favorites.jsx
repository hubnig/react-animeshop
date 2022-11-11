import Card from "../components/Card"

function Favorites({ items, addToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex justify-between flex-wrap">
        {items.map((item, index) => (
          <Card
            key={index}
            onClickFavorite={addToFavorite}
            favorited={true}
            {...item}
            // onClickFavorite={(obj) => addToFavorite(obj)}
            // onClickPlus={(obj) => addToCart(obj)}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
