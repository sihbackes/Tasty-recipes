export function SearchRecipe(){
    return (
        <>
        <div className="h-32 flex justify-center items-center">
         <input className="border-2 border-black" type="search" id="site-search"/>
         <button className="border-2 border-black w-32 bg-zinc-300 ml-1">Search</button>
        </div>

        </>
    )
}