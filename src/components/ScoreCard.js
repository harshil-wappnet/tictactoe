import React from 'react'

const ScoreCard = ({ XScore, OScore, TieScore }) => {
    return (
        <div className='score-card'>
            <span className='x-score'>X - {XScore}</span>
            <span className='y-score'>O - {OScore} </span>
            <span className='tie-score'>Tie - {TieScore} </span>

        </div>
    )
}

export default ScoreCard
