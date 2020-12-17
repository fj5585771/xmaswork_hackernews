
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [article, setArticle] = useState([]);

  const getArticles = () => {
      console.log("getting the article information");
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(res => res.json())
    .then(data => setArticle(data));
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="story-container">
        <h1>Hacker News</h1>
          {/* <StoryList /> */}
      </div>
    </>
  )
}

export default App;
