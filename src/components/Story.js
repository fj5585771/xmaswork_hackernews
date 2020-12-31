
const Story = ({story, index}) => {

    return (

        <div style={{background: "salmon"}}>

            <h5>{index}.</h5>
            <a href={story.url}>{story.title}</a>

        </div>
    );
}

export default Story;