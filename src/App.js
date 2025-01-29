// import logo from './logo.png';
import './App.css';

function App() {
  const clickHandler = (evt) => {
    evt.preventDefault();
    console.log("Form submitted.");
    
  };

  return (
    <div className="App">
      Building A Basic Form
      <form className="centered-form">
      
        <label>
          First Name: 
          <input type="text" style={{ fontWeight: 'bold' }} />
        </label>
        <button onClick={clickHandler}>
          Submit Form Data 
        </button>
      </form>
    </div>
  );
}

export default App;
