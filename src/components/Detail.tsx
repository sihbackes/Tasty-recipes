/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "./Loading";
import { NavBar } from "./NavBar";


export function Detail(id: any){
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
            params: {id: '8138'},
            headers: {
              'X-RapidAPI-Key': '47b90c0b15msh1f32277e69c01c9p123c88jsn0c5b7d2ef6ab',
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
          };
  
        try {
          const response = await axios.request(options);
          setRecipe(response.data);
  
          console.log(response.data)
  
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
    if(recipe.length === 0) {
      return(
        <>
        <NavBar/>
        <Loading/>
        </>
      )
  
    }
  

    return(
        <>
        <NavBar/>
        receita aqui
        </>
    )
}