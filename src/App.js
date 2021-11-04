import './App.css';
import Shape from './components/Shape'

function App() {
  return (
    <div className="App">
      <Shape>
          <h1>Your Content Here</h1>
          <p>You have a lot of content.  That's why it's important to organize it in an easy to maintain way in React.</p>
      </Shape>

      <Shape>
          <div>
            <p>Your app will be far easier to maintain with React reusaable components!</p>
          </div>
      </Shape>


    </div>
  );
}

export default App;
