import { useState, useEffect } from "react"
import Title from "./Title"
import Menu from "./Menu"
import Categories from "./Categories"
import menu from "./data"

const categories = ["all", ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)

  function filterMenuItems(category) {
    if (category === "all") return setMenuItems(menu)
    setMenuItems(menu.filter((item) => item.category === category))
  }

  return (
    <main>
      <section className='menu'>
        <Title text='The Pittz menu' />
        <Categories
          categories={categories}
          filterCategory={filterMenuItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
