// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation'
import Footer from './components/Footer'


function App () {
  return (
    <>
      <Navigation />
      <div>
        <Outlet />
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default App;