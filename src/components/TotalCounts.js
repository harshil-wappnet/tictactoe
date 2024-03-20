import React from 'react'

const TotalCounts = ({ Xtotalwin, Ototalwin, totalMatch, tieCount }) => {
    return (
        <div>
            <h4>Total Wins</h4>
            <table className='w-100 winner-card'>
                <thead>
                    <tr>
                        <td>Total Match</td>
                        <td>X</td>
                        <td>O</td>
                        <td>Tie</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{totalMatch}</td>
                        <td>{Xtotalwin}</td>
                        <td>{Ototalwin}</td>
                        <td>{tieCount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TotalCounts
