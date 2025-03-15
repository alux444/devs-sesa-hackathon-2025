import React, { useEffect } from "react";
import { usePokemon } from "../hooks/usePokemon";

const Pokemon = ({ pokemonName }) => {
  const { data, loading, fetchData } = usePokemon();

  useEffect(() => {
    fetchData(pokemonName);
  }, []);

  return (
    <div className="card">

      {data && !loading && (
        <div>
          {data.species.name && <h1>{data.species.name}</h1>}
          {data.sprites.front_default && <img src={data.sprites.front_default} alt="pokemon" />}
          {data.sprites.back_default && <img src={data.sprites.back_default} alt="pokemon" />}
          {data.sprites.front_shiny && <img src={data.sprites.front_shiny} alt="pokemon" />}
          {data.sprites.back_shiny && <img src={data.sprites.back_shiny} alt="pokemon" />}

          {data.stats && (
            <div className="flexGapStyle flexColumn card">
              {data.stats.map((stat) => (
                <span key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </span>
              ))}
            </div>
          )}

          <button onClick={() => console.log(data)}>Print pokemon data in developer console!</button>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
