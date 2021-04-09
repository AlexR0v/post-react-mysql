import './App.css'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Post from './pages/Post'

function App () {

  return (
    <div className='App-wrap'>
      <div className='App'>
        <Router>
          <Link to='/create-post'>Создать пост</Link>
          <Link to='/'>Домой</Link>
          <Switch>
            <Route
              path='/'
              exact
            >
              <Home />
            </Route>
            <Route
              path='/create-post'
              exact
            >
              <CreatePost />
            </Route>
            <Route
              path='/:id'
              exact
            >
              <Post />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
