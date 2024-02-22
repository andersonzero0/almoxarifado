import {
  Building2,
  GitPullRequestArrow,
  PackageSearch,
  Users,
} from "lucide-react";
import CardNavbar from "./card-navbar";

export default function Navbar({ role }: { role: string }) {
  return (
    <nav className="rounded-sm flex-wrap h-20 gap-3 my-5 flex flex-row justify-center items-center">
      <CardNavbar name="Estoque" icon={<PackageSearch size={30} />} />
      <CardNavbar name="Fornecedores" icon={<Building2 />} />
      <CardNavbar name="Requisições" icon={<GitPullRequestArrow />} />
      <CardNavbar name="Usuários" icon={<Users />} restricted={role == 'ADMIN'} />
    </nav>
  );
}
