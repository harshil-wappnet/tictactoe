import React from 'react'

const TotalCounts = ({ Xtotalwin, Ototalwin }) => {
    return (
        <div>
            <h4>Total Wins</h4>
            <table className='justify-content-center w-100 align-items-center winner-card'>
                <thead>
                    <tr>
                        <td>X</td>
                        <td>O</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Xtotalwin}</td>
                        <td>{Ototalwin}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TotalCounts
