import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/recipes/${id}`);

  // console.log(recipe);
  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
        {/* <img src={recipe.img} alt="" style={{borderRadius:4}}/> */}
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
