import { NavBar } from "./NavBar";
import { useLocation } from "react-router-dom";

interface ResultItem {
  name: string; 
  thumbnail_url: string;
}

export function Results() {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <NavBar />
      <div>
        <ul>
          {state.results.map((element: ResultItem, i: number) => (
            <li key={i}>
              <h1>{element.name}</h1>
              <img 
               style={{width: '300px'}}
               src={element.thumbnail_url} 
               alt={element.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
