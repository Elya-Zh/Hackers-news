import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import Form from "./components/Form";
import Loading from "./components/Loading";
import NewsFeed from "./components/NewsFeed";
import Modal from "./components/Modal";
const api = "https://hn.algolia.com/api/v1/search?query=";
const userUrl = "https://hn.algolia.com/api/v1/users/";

const App = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [url, setUrl] = useState(api);
  const [isModal, setModal] = useState(false);
  const [showUser, setShowUser] = useState({});
  const [newUrl, setNewUrl] = useState(userUrl);

  const getData = () => {
    axios.get(url).then((data) => setNews(data.data.hits));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`${api}${searchValue}`);
    saveToLocalStorage(news);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleDelete = (id) => {
    const updateList = news.filter((item) => item.objectID !== id);
    setNews(updateList);
  };

  const showUserName = (userName) => {
    console.log(userName);
    axios.get(`${newUrl}${userName}`).then((data) => setShowUser(data.data));
    setModal(true);
    console.log(showUser);
  };

  const closeModal = () => {
    setModal(false);
  };

  const saveToLocalStorage = (news) => {
    localStorage.setItem("hacker-news", JSON.stringify(news));
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [url]);

  console.log(news);
  return (
    <div className="App">
      <header>
        <h1>Hacker News</h1>
      </header>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} />
      {isModal ? (
        <Modal showUser={showUser} closeModal={closeModal} />
      ) : (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <NewsFeed
              news={news}
              handleDelete={handleDelete}
              showUserName={showUserName}
            />
          )}
        </>
      )}
    </div>
  );
};
export default App;
