import React from "react";
import { ReactComponent as PaperImg } from "../images/icon-paper.svg";
import { ReactComponent as RockImg } from "../images/icon-rock.svg";
import { ReactComponent as ScissorsImg } from "../images/icon-scissors.svg";
const Main = ({ setPlayerChoose, setOn, gamePlay }) => {
    return (
        <div>
            <div>
                <div className="triangle-board">
                    <div
                        onClick={() => {
                            setPlayerChoose("paper");
                            setOn(true);
                            gamePlay("paper");
                        }}
                        style={{ position: "absolute" }}
                        className="box-shadow  paper circle"
                    >
                        <div className="inner-circle">
                            <PaperImg style={{}} />
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            setPlayerChoose("rock");
                            setOn(true);
                            gamePlay("rock");
                        }}
                        style={{ position: "absolute" }}
                        className="box-shadow rock circle"
                    >
                        <div className="inner-circle">
                            <RockImg style={{}} />
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            setPlayerChoose("scissors");
                            setOn(true);
                            gamePlay("scissors");
                        }}
                        style={{ position: "absolute" }}
                        className="box-shadow  scissors circle"
                    >
                        <div className="inner-circle">
                            <ScissorsImg style={{}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
