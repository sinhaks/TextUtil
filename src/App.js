
import './App.css';
import Navbar from './Components/Navbar'
import TextBox from './Components/TextBox'

function App() {
  return (
  <>
  <Navbar title="TextUtil" aboutText="About Us"/>
  {/* <Navbar/> */}
  <div className='container'>
  <TextBox heading="Enter Your Text Below"/>
  </div>
  </>
  );
}

export default App;
