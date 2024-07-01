function Home({username, logout}) {
  return (
    <>
        <h2 className="m-3">{username ? 'Welcome ' + username : ''}</h2>
        <p className="m-3" style={{fontWeight: 'bold', cursor: 'pointer'}} onClick={logout}>Logout</p>
    </>
  )
}

export default Home
