"use client";

import { IoReload } from "react-icons/io5";
import { useState } from "react";

type LoadButtonProps = {
  onClick: () => Promise<void>;
};

export default function LoadButton({ onClick }: LoadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      onClick();
      setLoading(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#3B4CCA] hover:cursor-pointer flex justify-center items-center gap-2 text-white font-bold py-2 min-w-40 rounded hover:bg-[#2A37A5] transition-colors"
    >
      {loading ? "" : "Ver mais"}{" "}
      <IoReload className={`${loading ? "animate-spin" : ""}`} />
    </button>
  );
}
