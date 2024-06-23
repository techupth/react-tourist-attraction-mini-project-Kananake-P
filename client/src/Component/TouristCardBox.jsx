function TouristCardBox(props) {
  const showTag = (tag) => {
    for (let n = 0; n < tag.length; n++) {
      return tag[n];
    }
  };

  return (
    <div className=" bg-red-200">
      <div className="flex items-center  gap-36 p-32 flex-col lg:flex-row bg-white font-sans">
        <img src={props.photos[0]} className="max-w-xl rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold ">{props.title}</h1>
          <p className="py-6 text-3xl leading-relaxed">
            {props.description} <br></br>
            <a href={props.url} target="_blank" className="text-blue-700 underline">
              อ่านต่อ
            </a>
            <h6 className="text-slate-500 ">
              หมวด <span className="underline">{props.tags}</span>
            </h6>
          </p>

          <div className="flex flex-row  gap-20 /bg-red-900 ">
            <img
              src={props.photos[1]}
              className=" rounded-lg shadow-2xl size-36 "
            />
            <img
              src={props.photos[2]}
              className=" rounded-lg shadow-2xl size-36"
            />
            <img
              src={props.photos[3]}
              className=" rounded-lg shadow-2xl size-36"
            />
            <a href={props.url} target="_blank" className="text-6xl flex">
              <button>🔗</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristCardBox;
