import ConvertationBlock from "./components/ConvertationBlock/ConvertationBlock";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={styles.globalBlock} style={{ minHeight: "100vh" }}>
        <Header />
        <ConvertationBlock />
      </div>
      <Footer />
    </>
  );
}
export default App;
