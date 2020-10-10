import React, { useState } from "react";

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [selectItem, setSelectItem] = useState(null);

  const selectItemCategory = (index) => {
    setSelectItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={selectItem === null ? "active" : ""}
          onClick={() => selectItemCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={selectItem === index ? "active" : ""}
              key={`${name}_${index}`}
              onClick={() => selectItemCategory(index)}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
