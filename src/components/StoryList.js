import Story from "./Story";

const StoryList = ({stories}) => {
    const storyNodes = stories.map((story) => {
        return (<Story story={story}/>);
    });

    return (
        <>
            {storyNodes}       
            {/* ^^referred to as a 'JSX' story  */}
        </> 
    );

}

export default StoryList;