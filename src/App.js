
import { useEffect, useState } from 'react';
import './App.css';
import StoryList from "./components/StoryList";

function App() {

  const [articleIds, setArticleIds] = useState([]);
  const [stories, setStories] = useState([]);

  const fetchStoryData = (storyIds) => {
    // grab first 10 ids from json(state)
    const stories = storyIds.slice(0, 10);

    const clonedStories = stories.map((element) => {
      return element
    });

    // with the first 10 ids, loop over them
    stories.forEach((storyId) => {
      const url = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
      //  fetch story for each id
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
          // save that story to the state
          // clone the state for the stories (in array)
          //  add new stories to cloned array
          clonedStories.push(data)
          // send the cloned array back into the state array with useState state change function 'setStories'
          setStories(clonedStories);
        })
    });
  
  }
  
  useEffect(() => { 
      fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => res.json())
      .then((data) => {
         setArticleIds(data); 
         fetchStoryData(data);
    });

  }, []);

  useEffect(() => {   // watches a part of your state (a single state variable)
    fetchStoryData(articleIds);
  }, [articleIds]);  // << dependency is specific piece of state that triggers changes

  return (
      <div className="page-container">
          <h1>Hacker News</h1>
            <StoryList stories= {stories}/>
            {/* <Story article={articleIds} /> */}  
      </div>
  );
} 

export default App;
