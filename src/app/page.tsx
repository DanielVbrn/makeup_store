import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import SideBar from "./components/layouts/SideBar";


export default function Home() {
  return (
    <main className="main-content">
      <Header />
      <SideBar/>
      <Footer/>
    </main>
  );
}
