import './App.css';

import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="app">
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
