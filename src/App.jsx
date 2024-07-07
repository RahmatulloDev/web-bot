import { useEffect } from "react";
import "./App.css";
import { getData } from "./constants/db";

const telegram = window.Telegram.WebApp;

const App = () => {
  const products = getData();

  useEffect(() => {
    telegram.ready();
  });
  return (
    <div className="App">
      <h1>Sammi kurslar</h1>
      <div className="cards_container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
