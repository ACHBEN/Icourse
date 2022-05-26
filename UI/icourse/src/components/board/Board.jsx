import React from "react";
import "./style.css"

class Board extends React.Component{
    constructor(props){

        super(props);

    }

    render(){
        return(
            <div class="sketch" id="sketch"><canvas className="board" id="board"></canvas></div>
        )
    } 
}
export default Board