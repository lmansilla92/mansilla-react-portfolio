// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation'


function App () {
  return (
    <>
      <Navigation />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;