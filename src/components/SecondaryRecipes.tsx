interface Recipe {
    name: string;
    thumbnail_url: string;
    // Add other properties if needed
  }

export function SecondaryRecipes({ recipes }: { recipes: Recipe }){
    return(
        <div className="w-80 mt-5">
            <div>
             <h1 className="font-bold text-lg">{recipes.name}</h1>
            </div>
            <div className="mt-1">
             <img src={recipes.thumbnail_url} alt={recipes.name} />
            </div>
        </div>
    )
}