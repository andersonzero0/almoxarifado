import { Package, Power, User } from "lucide-react";

type HeaderProps = {
  username: String;
  name: String;
  role: String;
};

export default function Header({ username, name, role }: HeaderProps) {
  return (
    <header className="h-20 bg-[#0047AD] w-screen flex flex-row justify-around z-50 sticky top-0">
      <div className="flex flex-row justify-center items-center gap-2 text-white">
        <Package size={30}/>
        <p className="text-2xl font-mono">Almoxarifado</p>
      </div>

      <div className="flex flex-row gap-2 items-center divide-x-2">
        <div className="text-white flex flex-col items-end">
            <strong className="text-xl">{name}</strong>
            <small className="text-lg text-gray-300">{username}</small>
        </div>
        <div className="text-white flex flex-row gap-3 p-2 justify-center items-center font-bold">
            <div className="bg-green-500 flex flex-row items-center gap-1 p-2 rounded-sm">
                <p>{role}</p>
                <User/>
            </div>
            <div className="bg-red-600 p-3 rounded-lg">
              <Power/>
            </div>
        </div>
      </div>
    </header>
  );
}
