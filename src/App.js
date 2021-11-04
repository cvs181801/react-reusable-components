import './App.css';
import Shape from './components/Shape'

function App() {
  return (
    <div className="App">
      <Shape>
          <h1>Your Content Here</h1>
          <p>You have a lot of content.  That's why it's important to organize it in an easy-to-maintain way in React.</p>
      </Shape>

      <Shape>
          <div className="shape__child">
            <p>Your app will be far easier to maintain with React reusable components!</p>
          </div>
      </Shape>

      <Shape>
        <h2>Scalability is key to your organization.</h2>
          <div className="shape__child">
            <p>
              <p>Don't let poor design eat up your time</p>
            </p>
          </div>
      </Shape>

      <Shape>
          <div className="shape__child--flex">
            <p>
              <p>React provides tools for increased cybersecurity</p>
            </p>
            <p>
              <p>Don't wait until it's too late</p>
            </p>
          </div>
      </Shape>

      <Shape>
        <h1>Your team is busy.</h1>
          <div className="shape__child--flex">
            <p>
              <p>Increase productivity with react reusable components</p>
            </p>
            <p>
              <p>Increase morale</p>
            </p>
            <p>
              <p>Getting shit done - now that's a great feeling!</p>
            </p>
          </div>
      </Shape>


    </div>
  );
}

export default App;
