import TouristCardBox from "./TouristCardBox";
import axios from "axios";
import { useState, useEffect } from "react";

function TouristAttraction() {
  const [tourist, setTourist] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getTouristData = async () => {
    const touristDataFromServer = await axios.get(
      `http://localhost:4001/trips?keywords=${searchText}`
    );
    setTourist(touristDataFromServer.data.data);
  };

  const limitChar = (text, maxchar) => {
    if (text.length > maxchar) {
      return text.substring(0, maxchar) + "...";
    }
    return text;
  };

  const showTag = (tag) => {
    for (let n = 0; n < tag.length; n++) {
      return tag[n];
    } 
  };



  useEffect(() => {
    getTouristData();
  }, [searchText]);

  return (
    <section>
      <div className=" searchbox flex-col container mx-auto py-10 font-sans">
        <span className="text-2xl ">ค้นหาที่เที่ยว</span>
        <input
          type="text"
          placeholder="⌕ หาที่เที่ยวเเล้วไปกัน..."
          className="font-bold text-2xl rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline text-center"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
      </div>

      <div className="showcontent">
        <div>
          {tourist.map((item) => {
            return (
              <TouristCardBox
                key={item.id}
                title={item.title}
                photos={item.photos}
                description={limitChar(item.description, 100)}
                url={item.url}
                tags = {showTag(item.tags)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default TouristAttraction;
