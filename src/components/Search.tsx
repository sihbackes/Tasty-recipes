import { useState } from "react"
import { IoSearch } from "react-icons/io5";

export function SearchRecipe(){

    const [query, setQuery] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        console.log(e.target.value)
    }
    return (
        <>
        <div>
           <label className="relative block m-10">
             <span className="sr-only">Search</span>
             <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <IoSearch style={{height:"20px", width: "20px", color:"grey" }} />
             </span>
             <input 
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm" 
              placeholder="Search " 
              type="text" 
              name="search"
              value={query}
              onChange={handleChange}/>
            </label>
        </div>
        </>
    )
}