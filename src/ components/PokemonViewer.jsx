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
  const [data, setData] = useState(null);

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    if (!id || id < 1 || id > 150) {
      setError('Invalid Pokémon ID');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch Pokémon');
      }
      const data = await res.json();
      setData(data);
    } catch (err) {
      setError('Failed to fetch Pokémon');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [id]);

  return (
    <>
      {loading && <p>loading</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          <p>{data.name}</p>
          <img src={data.sprites.front_default} alt={data.name} />
        </div>
      )}
    </>
  );
};

export default PokemonViewer;
