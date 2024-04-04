import Image from "next/image";
import Link from "next/link";
import Empresas from "./components/Empresas";

export default function Home() {
  return (
    <main>
      <div>
        Analise de Balanços Fácil{" "}
        <p>
          <Link href="users">Users</Link>
        </p>
        <Empresas />
      </div>
    </main>
  );
}
