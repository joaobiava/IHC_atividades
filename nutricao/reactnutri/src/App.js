import React, { useEffect, useState} from 'react';
import './estilo.css';

function App(){
  const [nutri, setNutri] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
    .then((dados)=>dados.json())
    .then((json)=>setNutri(json))
  }, []);

  useEffect(()=>{
    let url = 'https://pokeapi.co/api/v2/pokemon/ditto';

    fetch(url)
    .then((dados)=>dados.json())
    .then((json)=>setPokemon(json))
  }, []);

  return(
    <div>
      <div className='container'>
        <header>
          <strong>React Nutri</strong>
        </header>

        {nutri.map((item)=>{
          return(
            <article key={item.id} className='post'>
              <strong className='titulo'>{item.titulo}</strong>

              <em>Categoria: {item.categoria}</em>

              <img src={item.capa} alt={item.titulo} className='capa'/>

              <p className='subtitulo'>{item.subtitulo}</p>

            </article>
          );
        })}
      </div>

      <div className="container">
        {pokemon && (
          <article key={pokemon.id} className="post">
            <strong className="titulo">Nome: {pokemon.name}</strong>

            <em>ID: {pokemon.id}</em>
            <br />
            <em>Tipo: {pokemon.types.map((type) => type.type.name).join(', ')}</em>

            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="capa"
            />

            <p className="subtitulo">Habilidades:</p>
            <ul>
              {pokemon.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </article>
        )}
      </div>
    </div>
  )
}

export default App;