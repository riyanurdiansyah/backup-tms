// import styles from "./page.module.css";
import GetPartner from "./home/GetPartner";
import Hero from "./home/Hero";
import MyPartner from "./home/MyPartner";
import Product from "./home/Product";
import Service from "./home/Service";
import Testimony from "./home/Testimony";
import Value from "./home/Value";
import ButtonHome from "@/components/ButtonHome";

export default function Home() {
  return (
    <main>
      <Hero />
      <GetPartner />
      <Product />
      <Service />
      <Value />
      <MyPartner />
      <Testimony />
      <ButtonHome />
    </main>
  );
}
