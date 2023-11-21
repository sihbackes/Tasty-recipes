import { Link } from "react-router-dom";

interface Recipe {
    name: string;
    thumbnail_url: string;
    id: string;
  }

export function SecondaryRecipes({ recipes }: { recipes: Recipe }){
    return(
        <div className="w-80 mt-5">
        <Link to={`/detail/${recipes.id}`}>
            <div>
             <h1 className="font-bold text-lg hover:text-red-600">{recipes.name}</h1>
            </div>
            <div className="mt-1">
             <img src={recipes.thumbnail_url} alt={recipes.name} />
            </div>
         </Link>
        </div>
    )
}