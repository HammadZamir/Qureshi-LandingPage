import Footer from "./components/footer";
import JoinFamily from "./components/JoinFamily";
import Navbar from "./components/Navbar";
import Verse from "./components/Verse";
import SearchMember from "./components/SearchMember";
import KalmaCounter from "./components/KalmaCounter";
import './index.css'

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">
          <KalmaCounter/>
          <SearchMember/>
          <Verse/>
          <JoinFamily />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
