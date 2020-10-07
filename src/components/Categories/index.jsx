import React, { useState } from "react";

function Categories({ items }) {
  const [selectItem, setSelectItem] = useState(null);

  const selectItemCategory = (index) => {
    setSelectItem(index);
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
}

export default Categories;
