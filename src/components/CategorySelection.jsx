import React from "react";

export default function CategorySelection({categorySelection}) {
  const handleCategorySelection = (category) => {
    categorySelection(category);
  };
  return (
    <div className="category-buttons">
      <button onClick={() => handleCategorySelection(null)}>Reset</button>
      <button onClick={() => handleCategorySelection('Alkali metal')}>Alkali Metal</button>
      <button onClick={() => handleCategorySelection('Alkaline earth metal')}>Alkaline Earth Metal</button>
      <button onClick={() => handleCategorySelection('Noble gas')}>Nobel Gas</button>
      <button onClick={() => handleCategorySelection('Metalloid')}>Metalloid</button>
      <button onClick={() => handleCategorySelection('Nonmetal')}>Nonmetal</button>
      <button onClick={() => handleCategorySelection('Transition metal')}>Transition Metal</button>
      <button onClick={() => handleCategorySelection('Post-transition metal')}>Post-transition metal</button>
      <button onClick={() => handleCategorySelection('Unknown')}>Unknown</button>
    </div>
  );
}
