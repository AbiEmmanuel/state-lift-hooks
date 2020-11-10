import { useState } from 'react';
import Player1 from './components/Player1';
import Player2 from './components/Player2';

function App() {
const [player1State, setPlayer1State] = useState('Player 1');
const [player2State, setPlayer2State] = useState('Player 2');

  return (
    <div className="App">
      <div className="Player1">
        <span>Greetings almighty hero ! What is your name ?</span>
        <Player1 onChange={value => setPlayer1State(value)} />
      </div>
      <div>
        <span>Ohhhh, we got another fighter ! Introduce yourself !</span>
        <Player2 onChange={value => setPlayer2State(value)} />
      </div>
      <div>
      <h2>{player1State} VS. {player2State}</h2>
      </div>
    </div>
  );
}

export default App;
