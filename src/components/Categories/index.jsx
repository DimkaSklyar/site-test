import React from "react";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickItem,
}) {


  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              key={`${name}_${index}`}
              onClick={() => onClickItem(index)}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
