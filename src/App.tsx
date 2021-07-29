import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Dashboard } from "./views/Dashboard";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <Main>
      <Header />
      <Dashboard />
      <Footer />
    </Main>
  );
};