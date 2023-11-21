import { SearchRecipe } from "./Search";
import { MdFoodBank } from "react-icons/md";
import { Link } from "react-router-dom";


export function NavBar(){
    return(
        <>
        <div className="h-20 bg-cyan-200">
          <div className="h-20 flex items-center justify-between">
           <Link to="/">
             <div className="w-32 flex flex-col items-center">
              <MdFoodBank 
                style={{ height: "60px", width: "60px", color: "#44403c" }} 
              />
              <h1 className="text-xs font-extrabold text-stone-700">
                BEST RECIPES
              </h1>
             </div>
            </Link>
            <SearchRecipe/>
          </div>

        </div>
        </>
    )
}