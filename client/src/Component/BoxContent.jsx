import 
function BoxContent(props) {
  return (
    <section>
      <div>
        <img src={props.photos} alt={props.title} />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <span>อ่านต่อ</span>
        <span>หมวด</span><span>{props.tags}</span>
        <img>{props.photos}</img>
        
      </div>
    </section>
  );
}

export default BoxContent;
