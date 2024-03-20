import React from 'react';

const PreviousWinner = ({ previousWinner }) => {
    return (
        <div className='mt-5'>
            <h4>Previous Winners</h4>
            <table className='w-100 winner-card'>
                <thead>
                    <tr>
                        <td>{previousWinner.length <= 1 ? "Match" : "Matches"}</td>
                        <td>Winner</td>
                    </tr>
                </thead>
                <tbody>
                    {previousWinner.length > 0 ?
                        previousWinner.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item}</td>
                            </tr>
                        ))
                        : <tr><td colSpan="2">Play a Match</td></tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PreviousWinner;
