import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Surah from "./components/Surah";
import SurahDetails from "./components/SurahDetails";

function App() {

  const routes = [
    <Route path="/" element={<Surah />} key="home" />,
    <Route path="surah-details/:idSurah" element={<SurahDetails />} key="details" />
  ]

  return (
    <>
      <Logo />
      <Routes>
        {routes}
      </Routes>
    </>
  );
}

export default App;
