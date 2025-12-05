import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white bg-linear-to-br from-gray-700 to-gray-900">
      <main className="flex flex-col items-center justify-center p-12 text-center bg-white bg-opacity-10 rounded-xl shadow-lg max-w-[90%]">
        <div className="animate-bounce mb-8">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokémon Logo"
            width={300}
            height={150}
            priority
          />
        </div>
        <div className="text-gray-400">
          <h1 className="text-5xl text-black/75 font-bold mb-4 animate-pulse">
            Bem-vindo a FindPoke
          </h1>
          <p className="text-lg mb-8 max-w-md">
            Explore o mundo dos Pokémon. Encontre informações detalhadas sobre
            suas espécies favoritas.
          </p>
        </div>
        <Link
          href="/pokedex"
          className="bg-[#3B4CCA] text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-[#3B4CCA]/45 transition duration-300 transform hover:scale-110"
        >
          Visitar
        </Link>
      </main>
    </div>
  );
}
