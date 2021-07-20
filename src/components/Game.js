import React from "react";
import { ReactComponent as PaperImg } from "../images/icon-paper.svg";
import { ReactComponent as RockImg } from "../images/icon-rock.svg";
import { ReactComponent as RockImg2 } from "../images/icon-rock.svg";
import { ReactComponent as ScissorsImg } from "../images/icon-scissors.svg";

const Game = (props) => {
    const checkType = () => {
        switch (props.type) {
            case "rock":
                return <RockImg />;
                break;
            case "paper":
                return <PaperImg />;
                break;
            case "scissors":
                return <ScissorsImg />;
                break;
            default:
                break;
        }
    };
    const checkComputer = () => {
        switch (props.computer) {
            case "rock":
                return <RockImg />;
                break;
            case "paper":
                return <PaperImg />;
                break;
            case "scissors":
                return <ScissorsImg />;
                break;
            default:
                break;
        }
    };
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ marginBottom: "2rem", color: "white" }}>
                {"You " + props.state}
            </h1>
            <div className="game">
                <div
                    className={`box-shadow ${
                        props.type == "scissors" ? "scissors2" : props.type
                    } circle`}
                >
                    <div className="inner-circle">{checkType()}</div>
                </div>
                <button
                    style={{
                        margin: "1rem",
                        padding: "1rem",
                        backgroundColor: "white",
                        borderRadius: ".5rem",
                        fontSize: "1.2rem",
                    }}
                    onClick={() => props.setOn(false)}
                >
                    Play Again
                </button>
                <div
                    className={`box-shadow ${
                        props.computer == "scissors"
                            ? "scissors2"
                            : props.computer
                    } circle`}
                >
                    <div className="inner-circle">{checkComputer()}</div>
                </div>
            </div>
        </div>
    );
};

export default Game;
