const NewsCard = ({ el, handleDelete, showUserName }) => {
  return (
    <div key={el.objectID} className="underline">
      <h4>{el.title}</h4>
      <p>
        <span onClick={() => showUserName(el.author)}>Author: </span>
        {el.author}
      </p>
      <button onClick={() => handleDelete(el.objectID)} className="exit">
        X
      </button>
    </div>
  );
};
export default NewsCard;
