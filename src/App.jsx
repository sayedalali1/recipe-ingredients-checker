// src/App.jsx
import './App.css';

const App = () => {
  const recipes = [
    { ingredients: 'Salt', availabe: true },
    { ingredients: 'Pepper', availabe: false },
    { ingredients: 'Tumeric', availabe: true },
  ];

  return (
    <>
      <h1>Recipes List</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index} className={recipe.availabe ? 'completed' : 'not-completed'}>
            {recipe.ingredients}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;