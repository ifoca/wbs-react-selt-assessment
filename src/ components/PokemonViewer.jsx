import { useEffect, useState } from 'react';

const PokemonViewer = ({ id }) => {
  // TODO: Create state for loading, error, and data
  // TODO: If prop id is not a number between 1 and 151, render "Invalid Pokémon ID" and DO NOT fetch data
  // TODO: useEffect to fetch Pokémon data from https://pokeapi.co/api/v2/pokemon/{id}
  // TODO: Show loading indicator initially and while fetching
  // TODO: Show error message if fetch failed
  // TODO: Show Pokémon name and image sprites.front_default when data is fetched successfully
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState('');

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);
    if (id > 0 && id < 151 && !isNaN(id)) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch Pokémon');
        }
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      setError('Invalid Pokémon ID');
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [id]);

  return (
    <>
      <div>
        {loading && !data ? <p>loading</p> : ''}
        {data ? (
          <div>
            <p>{data.name}</p>
            <img src={data.sprites.front_default} alt={data.name} />
          </div>
        ) : (
          <p>{error}</p>
        )}
      </div>
    </>
  );
};

export default PokemonViewer;
