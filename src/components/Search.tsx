
import { useState} from "react";
import { IoSearch } from "react-icons/io5";
import axios from "axios";

export function SearchRecipe() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const options = {
      method: "GET",
      url: "https://tasty.p.rapidapi.com/recipes/auto-complete",
      params: {
        prefix: query,
      },
      headers: {
        'X-RapidAPI-Key': '47b90c0b15msh1f32277e69c01c9p123c88jsn0c5b7d2ef6ab',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label className="relative block m-10">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <IoSearch style={{ height: "20px", width: "20px", color: "grey" }} />
            </span>
            <input
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
              placeholder="Search "
              type="text"
              name="search"
              value={query}
              onChange={handleChange}
              onKeyDown={handleKeyDown} 
            />
          </label>
        </form>
      </div>
    </>
  );
}
