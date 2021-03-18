import React from 'react';
import "./InformationBoxes.css";

function InformationBoxes() {
    return (
        <div className="informationBoxes">
            <div className="information__box">
                <h1 className="box__title">How Common Is This Disorder?</h1>
                <h4 className="box__questions">
                    <ul>
                        <li>What portion of human population is effected by this disorder?</li>
                        <li>Who is at greater risk for this disorder?</li>
                    </ul>
                </h4>
                <hr class="line-break" />
                <p className="box__information">
                    We know that 5% of females are colorblind (1 in 200) and about 8% of males are colorblind (1 in 12).
                    Having a history of color blindness in your family may put you at greater risk for colorblindness. 
                </p> 
            </div>

            <div className="information__box">
                <h1 className="box__title">How Is It Diagnosed?</h1>
                <h4 className="box__questions">
                    <ul>
                        <li>Why would someone get tested?</li>
                        <li>When is it tested?</li>
                        <li>What is the best test?</li>
                    </ul>
                </h4>
                <hr class="line-break" />
                <p className="box__information">
                    Someone may get tested because they are unable to tell the difference between different shades of similar colors.
                    When someone gets tested it is usually because other people notice that someone is identifying colors wrong (for example: calling green, blue when it is green).
                    <br />
                    <br />
                    One of the main methods of testing is the "hidden digit" method. 
                </p>
            </div>
        </div>
    )
}

export default InformationBoxes;
