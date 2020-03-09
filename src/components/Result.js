import React from 'react'
import ReactDOM from 'react-dom'

const Result = ({playAgain, score}) => (
    <div className = "score-board">
        <div className = "score">You scored {score}/5 correct answers!</div>
        <button className = "playBtn" onClick = {playAgain}>Play Again!</button>
    </div>
)

export default Result;