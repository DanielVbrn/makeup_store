import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import SideBar from "./components/layouts/SideBar";
import styles from '../styles/Footer.module.css'; // Ajuste o caminho conforme necessário


export default function Home() {
  return (
    <main className="main-content">
      <Header />
      <SideBar/>
      <Footer/>
    </main>
  );
}
