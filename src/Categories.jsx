function Categories({ categories, filterCategory }) {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            className='btn'
            key={category}
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
