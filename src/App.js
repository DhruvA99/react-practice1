import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/reducers/dataSlice";
import ContainerComponent from "./components/ContainerComponent/ContainerComponent";
import GridLayout from "./components/GridLayout/GridLayout";

function App() {
  const loading = useSelector((store) => store.data.loading);
  const data = useSelector((store) => store.data.data);
  const error = useSelector((store) => store.data.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  let page = <p>Loading...</p>;
  if (!loading && error !== null) {
    page = (
      <div>
        <span className="font-semibold text-xl text-red-500 ">{error}</span>
      </div>
    );
  }
  if (!loading && data) {
    page = (
      <div className="w-full flex flex-col">
        <Navigation />
        <GridLayout data={data} />
      </div>
    );
  }
  return <div>{page}</div>;
}

export default App;
