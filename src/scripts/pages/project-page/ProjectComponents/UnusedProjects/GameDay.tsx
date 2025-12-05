import team2Capture from "../../../../media/images/Team2Capture.png";
import devConsole from "../../../../media/images/DevConsole.png";

export function GameDay() {
  return (
    <div className="GameDay">
      <h1>Game Day</h1>
      <p>
        A game I worked on in grade 12 for my religion class's 'Game Day'.
        <br />
        It is an implementation of 3 team hangman, made in Unity Engine.
        <br />
        It reads in words to be used from a JSON file.
        <br />
        Below are screenshots of the game being played.
        <br />
        [Left] The letter 'E' is guessed
        <br />
        [Right] The dev console, for forcing outcomes
      </p>
      <div className="GameDayImages">
        <img src={team2Capture} alt="Team 2 gameplay capture" />
        <img src={devConsole} alt="Developer console" />
      </div>
    </div>
  );
}
