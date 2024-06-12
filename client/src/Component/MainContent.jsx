import BoxContent from "./BoxContent";
import { useState, useEffect } from "react";
import axios from "axios";

function MainContent() {
  const [tourist, setTourist] = useState({});
  const [searchText, setSearchText] = useState("");

  const getTouristData = async () => {
    const result = await axios.get(
      `http://localhost:4001/trips?keywords=${searchText}`
    );
    setTourist(result.data.data);
  };

  useEffect(() => {
    getTouristData();
  }, [searchText]);

  return (
    <section>
      <div>
        <h6>ค้นหาที่เที่ยว</h6>
        <input
          type="text"
          placeholder="หาที่เที่ยวเเล้วไปกัน..."
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
      </div>
      <div>
        {tourist.map((item) => {
          return (
            <BoxContent
              key={item.id}
              photos={item.photos}
              title={item.tile}
              tags={item.tags}
            />
          );
        })}
      </div>
    </section>
  );
}
export default MainContent;
