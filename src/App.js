import { useEffect, useState } from "react";
import "./App.css";
import { FetchData } from "./FetchData";
import Navigation from "./components/Navigation";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("https://flipkart-page-api.vercel.app/");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
