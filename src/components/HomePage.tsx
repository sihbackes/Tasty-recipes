/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { MainRecipe } from "./MainRecipe";
import { SecondaryRecipes } from "./SecondaryRecipes";
import { Loading } from "./Loading";
import { NavBar } from "./NavBar";

export function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: {
              from: '0',
              size: '20',
              tags: 'christmas'
            },
            headers: {
              'X-RapidAPI-Key': '47b90c0b15msh1f32277e69c01c9p123c88jsn0c5b7d2ef6ab',
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
          };

      try {
        const response = await axios.request(options);
        setRecipes(response.data.results);

        console.log(recipes[0])

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  if(recipes.length === 0) {
    return(
      <>
      <Loading/>
      </>
    )

  }

  return (
    <>
    
      <div className="px-10 lg:max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div>
           <MainRecipe recipes={recipes[2]} />
          </div>
         <div>
           <SecondaryRecipes recipes={recipes[3]}/>
           <SecondaryRecipes recipes={recipes[4]}/>
         </div>

        </div>
      </div>
    </>
  );
}
