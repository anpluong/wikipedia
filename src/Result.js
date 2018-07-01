import React from 'react';
import ReactHtmlParser from 'react-html-parser';

let Result = (props) => {
    let result = props.resultArray.map((obj) => {
        return (
            <div key={obj.pageid} id='item'>
                <div style={{color: 'red', fontSize: '24px'}}>{obj['title']}</div>
                {/* This is used to convert a string to react element. */}
                <div style={{padding:'0 10px 15px 10px'}}>{ReactHtmlParser(obj.snippet)}</div> 
            </div>
        )
    })

    return (
          <ul>{result}</ul>
    )
}

export default Result
