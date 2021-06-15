import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Components/Admin/Admin';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import Manage from './Components/Manage/Manage';
import Footer from './Components/Footer/Footer';
//import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
     
      <Router>
       <Route>
          <Admin/>
        </Route>
        <Route> 
          <Footer/>
        </Route>
        </Router>
      </div>
  
  );
}

export default App; 
