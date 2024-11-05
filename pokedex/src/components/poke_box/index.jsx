import React from "react";
import { AtributosContainer, Box, ImgContainer } from "./styles";

const Pokebox = ({ pokemon }) => {
    return (
      <>
        <Box>

          <ImgContainer>
          <h3>{pokemon.name}</h3>
            {pokemon.photo && <img src={pokemon.photo} alt={`${pokemon.name} imagem`} />}
            <div className="type_stats">
                <h4>Types</h4>
                    {pokemon.types.map((type, index) => (
                      <p key={index}>{type}</p>
                    ))}

                <div>
                  <p><strong>Base Stats:</strong> {pokemon.base_stats}</p>
                </div>
              </div>
          </ImgContainer>
          <AtributosContainer>
              <div>
                <h4>Stats</h4>
                <ul>
                  {pokemon.stats.map((stat, index) => (
                    <li key={index}>{stat}</li>
                  ))}
                </ul>
              </div>    
           
              <div>
                <h4>Abilities</h4>
                <ul>
                  {pokemon.abilities.map((ability, index) => (
                    <li key={index}>{ability}</li>
                  ))}
                </ul>
              </div>

              
          </AtributosContainer>
        </Box>
      </>
    );
  };
  
  export default Pokebox;