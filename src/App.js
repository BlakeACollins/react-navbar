import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import {About} from './pages/About'
import {Services} from './pages/Services'
import {Projects} from './pages/Projects'
import {Experience} from './pages/Experience'
import {Contact} from './pages/Contact'
import './App.css'




function App() {
  return (
    <>
      <Router>
        <Navbar />

      <div className='pages'>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
      <Switch>
      <Route exact path='/about' component={About}/>
      </Switch>
        
        <Route exact path='/services' component={Services}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/experience' component={Experience}/>
        <Route exact path='/contact' component={Contact}/>
      </div>
      </Router>
    </>
  );
}

export default App;
