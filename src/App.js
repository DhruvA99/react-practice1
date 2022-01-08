import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/reducers/dataSlice";

import GridLayout from "./components/GridLayout/GridLayout";

function App() {
  const loading = useSelector((store) => store.data.loading);
  const data = useSelector((store) => store.data.data);
  const error = useSelector((store) => store.data.error);
  const [lsArray, setLsArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    let array = JSON.parse(localStorage.getItem("checkedStatusArray"));
    if (!array) {
      localStorage.setItem("checkedStatusArray", JSON.stringify([]));
      array = JSON.parse(localStorage.getItem("checkedStatusArray"));
    }
    setLsArray(array);
  }, [dispatch]);
  let page = <p>Loading...</p>;
  if (!loading && error !== null) {
    page = (
      <div>
        <span className="font-semibold text-xl text-red-500 ">{error}</span>
      </div>
    );
  }
  if (!loading && data && lsArray) {
    page = (
      <div className="w-full flex flex-col">
        <Navigation />
        <GridLayout data={data} array={lsArray} />
      </div>
    );
  }
  return <div>{page}</div>;
}

export default App;
