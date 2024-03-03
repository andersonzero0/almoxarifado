import { LockKeyhole } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function CardNavbar({
  name,
  icon,
  restricted = false,
}: {
  name: string;
  icon: ReactNode;
  restricted?: boolean;
}) {
  return (
    <Link href={"/usuarios"} className="flex-grow flex-shrink box-border text-white flex flex-row h-full relative ">
      <div
        className={`h-full relative ${
          restricted ? "cursor-not-allowed touch-none" : "cursor-pointer"
        } flex-grow flex-shrink box-border text-white p-3 flex flex-row justify-center items-center gap-3 rounded-md bg-blue-500`}
      >
        {icon}
        <p className="text-lg font-bold">{name}</p>
        {restricted ? (
          <LockKeyhole size={20} className="absolute top-2 right-2" />
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
