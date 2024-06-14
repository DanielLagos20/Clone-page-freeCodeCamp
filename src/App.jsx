import "./App.css";
import NavBarHeader from "./components/NavbarHeader";
import ContentStart from "./components/ContentStart";
import Testimonios from "./components/Testimonios";
import BannerComoSeVio from "./components/BannerComoSeVio";
export default function App() {
  return (
    <>
      <NavBarHeader />
      <ContentStart></ContentStart>
      <BannerComoSeVio />
      <Testimonios />
    </>
  );
}
