import Card from '../components/Card/index'

function Home({
  items,
  searchValue,
  setSearchValue,
  addToCart,
  addToFavorite,
  onChangeSearchInput,
}) {
  return (
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
              onClickFavorite={(obj) => addToFavorite(obj)}
              onClickPlus={(obj) => addToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  )
}

export default Home
