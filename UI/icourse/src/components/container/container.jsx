import React from "react";
import Board from "../board/Board"
import "./style.css"

class Container extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            color: "#000000",
            size: "5",
        }
    }


    changeColor(params){
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params){
        this.setState({
            size: params.target.value
        })
    }
    /*
    //Pour effacer
    erase(){
        var c = document.getElementById("board");
        var ctx = c.getContext("2d");
        ctx.globalCompositeOperation = "destination-out";

    }
    // Pour redessiner après avoir effacer
    draw(){
        var c = document.getElementById("board");
        var ctx = c.getContext("2d");
        ctx.globalCompositeOperation = "source-over";
    }
    */

    render(){
        return(
            <div className="container">
                <span class="title"><h1>My Classroom</h1></span>
                <br></br>
                <div className="tools">
                    <div className="color-container">
                        Select color : &nbsp;

                        <input type="color" value={this.state.color} onChange ={this.changeColor.bind(this)} /> 
                    </div>
                    <div className="pensize-container">
                        Select size : &nbsp;
                        <select value={this.state.size} onChange ={this.changeSize.bind(this)}>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                        </select>
                    </div>
                    {/* <div>
                        <button id ="erase" onClick={this.erase}>clear</button>
                    </div>
                    <div>
                        <button id ="draw" onClick={this.draw}>draw</button>
                    </div> */}
                    <div className="board-container">
                        <Board color ={this.state.color} size={this.state.size}></Board>
                    </div>
                </div>
            </div>
        )
    }
}
export default Container