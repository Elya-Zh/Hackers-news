import NewsCard from "../components/NewsCard";
const NewsFeed = ({ news, handleDelete, showUserName }) => {
  return (
    <div>
      {news.map((el) => {
        return (
          <NewsCard
            el={el}
            handleDelete={handleDelete}
            key={el.objectID}
            showUserName={showUserName}
          />
        );
      })}
    </div>
  );
};
export default NewsFeed;
