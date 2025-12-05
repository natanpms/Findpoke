import Image from "next/image";
import pokedexIcon from "../../public/pokedex.svg";
import InputText from "./InputText";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import Link from "next/link";

type HeaderProps = {
  setParamChange?: (value: string) => void;
};

export default function Header({ setParamChange }: HeaderProps) {
  return (
    <header className="bg-[#3B4CCA] w-full p-12">
      <div className="fixed top-4 left-4 text-white font-bold text-lg">
        <Link href="/">
          <FaArrowLeft size={22} />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-center items-center gap-4">
          <Image
            src={pokedexIcon}
            alt="Pokémon Logo"
            width={45}
            height={45}
            priority
          />
          <h1 className="text-[#B3A125] font-bold tracking-widest text-3xl">
            FindPoke
          </h1>
        </div>

        <div className="flex justify-center gap-1 lg:w-1/2 w-full">
          <InputText
            onChange={(e) => setParamChange && setParamChange(e.target.value)}
          />
          <button className="bg-white p-3 rounded-xl cursor-pointer">
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  );
}
