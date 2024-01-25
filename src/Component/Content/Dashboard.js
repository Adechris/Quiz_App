import React from 'react'
import Questions from './Questions'

const Dashboard = ({firstName, myDate}) => {
  return (
    <div>
        <Questions firstName={firstName} myDate={myDate} />
    </div>
  )
}

export default Dashboard