
const Story = ({story, index}) => {

    // story object has a url - the href - i.e hyperlink
    // story object anchor is the title
    // h5 is the index - single parameter with a . after the value used to format

    return (

        <div style={{background: "salmon"}}>

            <h5>{index}</h5>
            <a href={story.data.url}>{story.data.title}</a>
            {/* <a href={story.story.data.url}>{story.story.data.title}</a> */}
            

        </div>
    );
}

export default Story;