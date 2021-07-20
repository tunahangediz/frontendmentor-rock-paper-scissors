import { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Main from "./components/Main";
import ScoreBoard from "./components/ScoreBoard";

function App() {
    const [on, setOn] = useState(0);
    const [playerChoose, setPlayerChoose] = useState();
    const [score, setScore] = useState(0);
    const [computer, setComputer] = useState();
    const [state, setState] = useState();

    const gamePlay = (player) => {
        let random = Math.round(Math.random() * 2);
        let pc;

        switch (random) {
            case 0:
                pc = "rock";
                setComputer("rock");
                break;
            case 1:
                pc = "paper";
                setComputer("paper");
                break;
            case 2:
                pc = "scissors";
                setComputer("scissors");
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (playerChoose == computer) {
            console.log("tie");
            console.log(playerChoose, computer);
            setState("Tie");
        } else if (
            (playerChoose == "rock" && computer == "paper") ||
            (playerChoose == "paper" && computer == "scissors") ||
            (playerChoose == "scissors" && computer == "rock")
        ) {
            console.log("you losee");
            setState("Lose");
        } else {
            setScore((prevCount) => prevCount + 1);
            setState("Win");
        }
    }, [computer]);

    return (
        <div className="App">
            <div className="container">
                <ScoreBoard score={score} />
                <div style={{ position: "relative" }}>
                    {on ? (
                        <Game
                            type={playerChoose}
                            setOn={setOn}
                            computer={computer}
                            state={state}
                        />
                    ) : (
                        <Main
                            setPlayerChoose={setPlayerChoose}
                            setOn={setOn}
                            gamePlay={gamePlay}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
