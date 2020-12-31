
import { useEffect, useState } from 'react';
import './App.css';
import StoryList from "./components/StoryList";

function App() {

  const [articleIds, setArticleIds] = useState([]);
  const [stories, setStories] = useState([]);

  const fetchStoryData = (storyIds, numStories) => {

    // grab first 10 ids from json(state)

    const topStories = storyIds.slice(0, numStories);

    // map every url to the promise of the fetch.  this returns a promise OBJECT, meaning we can do multiple things with it.  thats the use of '.then' (meaning fulfilled), '.catch' (if/ when it is rejected)

    let promises = topStories.map((storyId) => {
       fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
    });

    // Promise.all to wait until all promises are resolved 

    Promise.all(promises) //accepts an array of promises
      .then(response => {
         return Promise.all(response.map((stories) => {
            stories.json();
          }));
      })
      .then(stories => {
        return setStories(stories)
      })
      .catch(err => console.log(err));
  }
  
  useEffect(() => { 
      fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => res.json())
      .then((data) => {
         setArticleIds(data); 
    });

  }, []);

  useEffect(() => {   
    fetchStoryData(articleIds, 10);
  }, [articleIds]);  // << dependency is specific piece of state that trigger changes

  return (
      <div className="page-container">
          <h1>Hacker News</h1>
            <StoryList stories= {stories}/>
            
      </div>
  );
} 

export default App;
