import React, { useEffect, useState} from 'react';
import './estilo.css';

function App(){
  const [nutri, setNutri] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
    .then((dados)=>dados.json())
    .then((json)=>setNutri(json))
  }, []);

  useEffect(() => {
    const fetchPokemons = async () => {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=20'; // Ajuste o limite conforme necessário

      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemons(data.results); // Armazena a lista básica de Pokémon
      } catch (error) {
        console.error('Erro ao buscar dados dos Pokémon:', error);
      }
    };

    fetchPokemons();
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
      <header>
        <strong>Lista de Pokémon</strong>
      </header>
      
      {pokemons.map((pokemon, index) => (
        <article key={index} className="post">
          <strong className="titulo">Nome: {pokemon.name}</strong>
          <br />
          <a href={pokemon.url} target="_blank" rel="noopener noreferrer">
            Ver detalhes
          </a>
        </article>
      ))}
    </div>
    </div>
  );
}

export default App;