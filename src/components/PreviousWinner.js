import React from 'react';

const PreviousWinner = ({ previousWinner }) => {
    return (
        <div>
            <h4>Previous Winners</h4>
            <table className='justify-content-center w-100 align-items-center winner-card'>
                <thead>
                    <tr>
                        <td>{previousWinner.length <= 1 ? "Match" : "Matches"}</td>
                        <td>Winner</td>
                    </tr>
                </thead>
                <tbody>
                    {previousWinner.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PreviousWinner;
