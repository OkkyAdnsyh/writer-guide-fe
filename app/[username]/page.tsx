async function generateStaticParams () {
  const usernames : string[] = ["OkkyAdnsyh", "Caitlyn"]
  
  return usernames.map(uname => ({
    username : uname
  })
  )
}

const Overview = ({params} : {params : {username : string}}) => {
  const {username} = params;

  return (
    <div>{username}</div>
  )
}

export default Overview