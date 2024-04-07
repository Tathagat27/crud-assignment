import Image from "next/image";
import "./page.module.scss";
import DisplayUsers from "./components/DisplayUsers";
import AddUsers from "./components/AddUsers";

export default function Home() {
  return (
    <main>
      <AddUsers />
      <DisplayUsers />
    </main>
  );
}
