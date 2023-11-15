import { SearchRecipe } from "./Search";

export function NavBar(){
    return(
        <>
        <div className="h-20 bg-slate-400">
          <div className="h-20 flex items-center justify-end">
            <SearchRecipe/>
          </div>
        </div>
        </>
    )
}