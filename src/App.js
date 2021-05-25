
import { useEffect, useState } from 'react';
import './App.css';
import StoryList from "./components/StoryList";

function App() {

  const [articleIds, setArticleIds] = useState([]);
  const [stories, setStories] = useState([]);

  const fetchStoryData = (storyIds, numStories) => {  // DONE SECOND after initialising useEffect.  We want to initialise the top 10 stories on one page.

    // set parameter names to be reused when invoking new state (JSON files) ^^ 

    // slice storyIds variable into the amount we wish to show.  This assures we are not limiting it to a set amount.

    const topStories = storyIds.slice(0, numStories);

    // pass in single storyId element as callback for map on sliced storyIds array, fetch each single story URL relevant with arrow function expression.  this returns a promise OBJECT (in variable 'let promises'), meaning we can do multiple things with it.  thats the use of '.then' (meaning fulfilled), '.catch' (if/ when it is rejected)

    let promises = topStories.map((storyId) => {
       return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
    });

    // Promise.all as we need to wait until all promises are resolved, otherwise it will not return asynchornous operation as its meant.

    Promise.all(promises) //accepts an array of promises
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(stories => setStories(stories)); // render into use State AGAIN, because initial useState is the rendering of articles before it is fed to front end via props and JSX.
  }
  
  useEffect(() => { 
      fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => res.json())
      .then((data) => {
         setArticleIds(data);   // distinguish initial data here from stories data rendered with next change in useState.  THIS IS DONE FIRST before setStories.
    });

  }, []);

  useEffect(() => {   
    fetchStoryData(articleIds, 10);
  }, [articleIds]);  // << dependency is specific piece of state that trigger changes  DONE THIRD

  return (
      <div className="page-container">
          <h1>Hacker News</h1>
            <StoryList stories= {stories}/>
            {/* <Pages/> */}
            
      </div>
  );
} 

export default App;
