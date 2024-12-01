import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import menu from "./data";
import Categories from "./Categories";

const uniqueCategories = ['All', ...new Set(menu.map((item)=> item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(uniqueCategories);
  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(menu);
      return;
    }
    const updatedItems = menu.filter((item) => item.category === category);
    setMenuItems(updatedItems);
  }

  return (
    <main>
      <section className="menu">
        <Title text="our menu"/>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
