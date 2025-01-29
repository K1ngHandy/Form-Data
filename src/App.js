import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Building A Basic Form
      <form className="centered-form" action="https://server.com/action_page">
        <label>
          First Name: 
          <input type="text" style={{ fontWeight: 'bold' }} />
        </label>
      </form>
    </div>
  );
}

export default App;
