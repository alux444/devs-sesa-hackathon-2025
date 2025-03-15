import React, { useEffect } from "react";
import { usePokemon } from "../hooks/usePokemon";

const Pokemon = () => {
  const { data, loading, fetchData } = usePokemon();

  useEffect(() => {
    fetchData("pikachu");
  }, []);

  return (
    <div>
      <button onClick={() => console.log(data)}>Print pokemon data in developer console!</button>

      {data && !loading && (
        <>
          {data.species.name && <h1>{data.species.name}</h1>}
          {data.sprites.front_default && <img src={data.sprites.front_default} alt="pokemon" />}
          {data.sprites.back_default && <img src={data.sprites.back_default} alt="pokemon" />}

          {data.stats && (
            <ul>
              {data.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Pokemon;
