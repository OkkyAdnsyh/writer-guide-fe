import React from 'react'

const Dashboard = ({children} : {children : React.ReactNode}) => {
  return (
    <main>
      <aside></aside>
      {children}
    </main>
  )
}

export default Dashboard