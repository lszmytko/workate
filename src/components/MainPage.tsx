import React, { useState, useEffect } from "react";
import Card from "./Card";

const MainPage = () => {
  const [fetchedData, setFetchedData] = useState<any>([]);
  const [error, setError] = useState("");
  const [itemsToShowNumber, setItemsToShowNumber] = useState(3);
  const [itemsToShow, setItemsToShow] = useState([]);

  const INCREASE_ITEMSTOSHOW_ONCLICK = 3;

  const fetchData = (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFetchedData(data))
      .catch((e) => setError("blad"));
  };

  useEffect(() => {
    fetchData("https://picsum.photos/v2/list");
  }, []);

  useEffect(() => {
    console.log("presss");
    if (itemsToShowNumber + INCREASE_ITEMSTOSHOW_ONCLICK <= fetchedData.length)
      setItemsToShow(fetchedData.slice(0, itemsToShowNumber));
  }, [itemsToShowNumber, fetchedData]);

  return (
    <div>
      <div className="container">
        {itemsToShow.map(
          (item: { id: number; author: string; download_url: string }) => (
            <Card key={item.id} url={item.download_url} author={item.author} />
          )
        )}
      </div>
      <button
      className="btn"
        onClick={() =>
          setItemsToShowNumber(
            (prevState) => prevState + INCREASE_ITEMSTOSHOW_ONCLICK
          )
        }
      >
        Show more
      </button>
    </div>
  );
};

export default MainPage;
