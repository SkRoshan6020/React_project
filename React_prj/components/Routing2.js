import {
          BrowserRouter as Router, Link,
          Routes, Route
} 
from 'react-router-dom'
import './Routing2.css';
import Home from './Pages/RouteHome';
import Courses from './Pages/RouteCourses';
import Search from './RouteSearch';
import List from './RouteList';

function Routing2() {
    return(
                 <div className="App">
                    <Router>
                              <nav>
                                          <Link to="/">Home</Link>;
                                          <Link to="courses">Courses</Link>;
                              </nav>
                              <Routes>
                                            <Route path="/" element={<Home />} />
                                            <Route path="/courses" element={<Courses />}>
                                                     <Route path="search" element={<Search />} />
                                                     <Route path="list" element={<List />} />
                                        </Route>             
                              </Routes>
                    </Router>
                 </div>
    );
}
export default Routing2;