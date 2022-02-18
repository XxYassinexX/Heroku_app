import { useState } from "react";

function ReadMore({task}){
    const text = task.description;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
    return(
        <p style={{display:'inline', width :'100%'}}>
            {isReadMore ? text.slice(0,50) : text}
            <span onClick={toggleReadMore} style={{color : 'grey', cursor : 'pointer'}}>
                {isReadMore ? "Read More" : "Read Less"}
            </span>
        </p>
    )
}

export default ReadMore;