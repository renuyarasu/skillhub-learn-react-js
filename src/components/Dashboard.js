import React from 'react'

const Dashboard = ({match}) => {
    return (
        <div>
            <h1>Dashboard Page: {match.params.name}</h1>
        </div>
    )
}

export default Dashboard;
