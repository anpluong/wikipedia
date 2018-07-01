import React from 'react';
import ReactHtmlParser from 'react-html-parser';

let Result = (props) => {

    let result = props.resultArray.map((obj) => {
        return (
            <div key={obj.pageid}>
                <h6>{obj['title']}</h6>
                {/* This is used to convert a string to react element. */}
                <h6>{ReactHtmlParser(obj.snippet)}</h6> 
            </div>
        )
    })

    return (
          <ul>{result}</ul>
 
    )
}

export default Result
