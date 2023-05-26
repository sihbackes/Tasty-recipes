import { useState } from "react"

export function SearchRecipe(){

    const [query, setQuery] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        console.log(e.target.value)
    }
    return (
        <>
        <div className="h-32 flex justify-center items-center">
         <input 
         className="border-2 border-black" 
         type="search" 
         value={query}
         onChange={handleChange}
         placeholder="Search"
         />
         <button className="border-2 border-black w-32 bg-zinc-300 ml-1">Search</button>
        </div>

        </>
    )
}