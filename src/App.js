// Libraries
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

// Routes
import LandingPage from './routes/LandingPage/LandingPage';
import ContactPage from './routes/ContactPage/ContactPage';
import AboutPage from './routes/AboutPage/AboutPage';
import ProjectPage from './routes/ProjectPage/ProjectPage';
import Project1 from './routes/ProjectPage/Project1/Project1';

import './App.css';

function App() {
  return (
    // Wrapping the whole 
    <Router>

      {/* Static elements */}
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
          <Link to='/Projects'>Project</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} />

          <Route path='/About' element={<AboutPage />} />
          <Route path='/Contact' element={<ContactPage />} />

          {/* nested routing/pages */}
          <Route path='/Projects' element={<ProjectPage />}>

            <Route path='/Projects/Project1' element={<Project1 />} />
            
          </Route>

          {/* Cathcing all the invalid URLs */}
          <Route path='*' element={<h1>404 Error</h1>} />

        </Routes>
      </main>

      <footer>
        <h3>Footer</h3>
      </footer>
    </Router>
  );
}

export default App;
