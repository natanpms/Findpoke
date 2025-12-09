import { typeColors } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";

type PokemonCardProps = {
  name: string;
  image: string;
  types: string[];
  identification: number;
};

export default function PokemonCard({
  name,
  image,
  types,
  identification,
}: PokemonCardProps) {
  return (
    <Link href={`/pokedex/${name}`} className="w-full">
      <div
        className={`w-full rounded-lg shadow-lg overflow-hidden min-h-[220px]  p-4 flex flex-col items-center hover:cursor-pointer hover:scale-105 transition-transform`}
      >
        <div className="flex justify-between items-center p-1 w-full">
          <h2 className="uppercase text-gray-700 font-bold  tracking-wider">
            {name}
          </h2>
          <p className="text-gray-400 font-semibold">#{identification}</p>
        </div>
        {image && <Image src={image} alt={name} width={75} height={75} />}
        <div className="flex flex-wrap gap-2 mt-3">
          {types.map((type) => (
            <span
              key={type}
              className={` text-gray-950 px-2 py-1 rounded-md text-sm`}
              style={{ background: typeColors[type] }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
