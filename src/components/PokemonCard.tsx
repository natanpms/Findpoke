type PokemonCardProps = {
  name: string;
  url: string;
  identification: number;
};

export default function PokemonCard({
  name,
  url,
  identification,
}: PokemonCardProps) {
  return (
    <div
      className={`w-full rounded-lg shadow-lg overflow-hidden  p-4 flex flex-col items-center hover:cursor-pointer hover:scale-105 transition-transform`}
    >
      <div className="flex justify-between items-center p-1 w-full">
        <h2 className="uppercase text-gray-700 font-bold  tracking-wider">
          {name}
        </h2>
        <p className="text-gray-400 font-semibold">#{identification}</p>
      </div>
    </div>
  );
}
