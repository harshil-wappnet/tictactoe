import React from 'react'

const ScoreCard = ({ XScore, OScore }) => {
    return (
        <div className='score-card'>
            <span className='x-score'>X - {XScore}</span>
            <span className='y-score'>O - {OScore} </span>
        </div>
    )
}

export default ScoreCard
