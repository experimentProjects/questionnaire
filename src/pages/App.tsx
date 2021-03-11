
import '../assets/scss/App.scss';
import underconstruction from '../assets/animation/construction.gif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Questionnaire App</h1>
        <p>Under Construction, Please Co-operate</p>
        <img className="construction" src={underconstruction} alt="under-construction"/>
      </header>
    </div>
  );
}

export default App;
