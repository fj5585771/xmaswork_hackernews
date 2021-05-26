import Story from "./Story";
import ReactPaginate from 'react-paginate';

const StoryList = ({stories, pageCount, changePage}) => {
    
    const storyNodes = stories.map((story, index)=>{
        return (
        <Story story={story} index={index+1}/>
        );
    });

    return (
        <>
        <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        <div style={{background: "#ffff00"}}>
        {storyNodes}
        </div>
        </>
    );

}

export default StoryList;