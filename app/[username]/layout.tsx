import React from 'react'

const Dashboard = (
    {
        children,
        userModal
    } : {
        children : React.ReactNode,
        userModal : React.ReactNode
    }
) => {
  return (
    <main>
      <aside></aside>
      {children}
      {userModal}
    </main>
  )
}

export default Dashboard