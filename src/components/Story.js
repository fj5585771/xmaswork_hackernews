
const Story = ({story}) => {
    return (
            <div style={{background: "grey"}}>
                <p>Author: {story.by}</p>
                <p>Title: {story.title}</p>
                <p>Link: {story.url}</p>
            </div>
    );
}

export default Story;