import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function SearchRecipe() {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: {
        from: '0',
        size: '20',
        tags: query
      },
      headers: {
        'X-RapidAPI-Key': '47b90c0b15msh1f32277e69c01c9p123c88jsn0c5b7d2ef6ab',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    };
    

    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  useEffect(() => {
    if (data) {
      navigate(`/results/${query}`, {
        state: data
      });
    }
  }, [data, query, navigate]);

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

