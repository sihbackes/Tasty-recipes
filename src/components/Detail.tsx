import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loading } from "./Loading";
import { NavBar } from "./NavBar";

interface Recipe {
  name: string;
  thumbnail_url: string;
  description: string;
  instructions: Instruction[];
  original_video_url: string;
}

interface Instruction {
  display_text: string;

}

export function Detail() {
  const params = useParams<{ id: string }>();
  const { id } = params;
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
        params: { id: id },
        headers: {
          "X-RapidAPI-Key": "47b90c0b15msh1f32277e69c01c9p123c88jsn0c5b7d2ef6ab",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setRecipe(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching the recipe.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <>
        <NavBar />
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar />
        <div>Error: {error}</div>
      </>
    );
  }

  if (!recipe) {
    return (
      <>
        <NavBar />
        <div>No recipe found.</div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="px-10 lg:max-w-6xl mx-auto flex justify-center">
        <div className="">
          <h1>{recipe.name}</h1>
          <img
            style={{ width: "300px" }}
            src={recipe.thumbnail_url}
            alt={recipe.name}
          />
          <video 
            style={{ width: "300px" }}
            className="rounded-xl hidden md:flex" 
            src={recipe.original_video_url} 
            autoPlay loop muted
          />
          <p>{recipe.description}</p>
          <div>
           <ul>
             {recipe.instructions.map((element, i) => (   
                 <li key={i}>
                  {element.display_text}
                </li>
             ))}
          </ul>
          </div>
        </div>
      </div>
    </>
  );
}