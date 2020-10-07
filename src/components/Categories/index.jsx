import React, { useState } from "react";

function Categories({ items }) {
  const [selectItem, setSelectItem] = useState(null);

  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((name, index) => (
          <li
            className={selectItem === index ? "active" : ""}
            key={`${name}_${index}`}
            onClick={() => setSelectItem(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
