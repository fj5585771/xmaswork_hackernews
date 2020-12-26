import Story from "./Story";

const StoryList = ({stories}) => {
    const storyNodes = stories.map((story, index)=>{
        return (<Story story={story} index={index+1}/>);
    });

    return (
        <div style={{background: "#fffdd0"}}>
        {storyNodes}
        </div>
    );

}

export default StoryList;