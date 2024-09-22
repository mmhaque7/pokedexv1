import Pokemon from "./components/pokemon/pokemon";
import PokemonCard from "./components/pokemon/pokemonCard";
export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page for pokedex</h1>
      <Pokemon/>
    
    </section>
  );
}
