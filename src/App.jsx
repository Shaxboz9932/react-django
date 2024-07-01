import { useCallback, useEffect, useState, useRef} from "react"
import Login from "./components/Login"
import { jwtDecode } from "jwt-decode"
import Register from "./components/Register";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import TodoAddForm from "./components/TodoAddForm";
import TodoItem from "./components/TodoItem";
import api from "./services/axiosData";


function App() {
  const [token, setToken] = useState(window.localStorage.getItem('access_token'));
  const [todos, setTodos] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async() => {
    const res = await api.get('/todo/')
    setTodos(res.data)
  }

  if (token) {
    var username = jwtDecode(token).username
    window.document.title = 'Welcome to my site'
  }else{
    window.document.title = 'Authorization'
  }

  const logout = (e) => {
    e.preventDefault
    console.log('Logout !!')
    setToken(window.localStorage.removeItem('access_token'))
  }

  console.log('rendering...')

  return (
    <div className="container mx-auto">
      <NavMenu token={token}/>
      
      {token ? 
      <>
        <Home username={username} logout={logout}/> 
        <TodoAddForm author_id={jwtDecode(token).user_id} fetchData={fetchData}/>
        <TodoItem token={token} todos={todos} setTodos={setTodos} fetchData={fetchData}/>
      </>
      : 
      <div className="row">
        <Login setToken={setToken}/>
        <Register setToken={setToken}/>
      </div>
      }
    </div>        
  )
}

export default App


