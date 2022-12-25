import React from "react";

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {

    const all = good + neutral + bad;
    const average = all > 0 ? toTwo((good - bad) / all) : 0;
    const positive = all > 0 ? toTwo((good / all) * 100) : 0;

    if (all === 0) return <div>No feedback given</div>

    return (
        <table>
            <tbody>
                <Statistic text="good" value={good}/>
                <Statistic text="neutral" value={neutral}/>
                <Statistic text="bad" value={bad}/>
                <Statistic text="all" value={all}/>
                <Statistic text="average" value={average}/>
                <Statistic text="positive" value={positive + " %"}/>
            </tbody>
        </table>
    );
};

const Statistic = ({text, value}) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
);

const toTwo = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

const App = () => {

    const [goodState, setGoodState] = React.useState(0);
    const [neutralState, setNeutralState] = React.useState(0);
    const [badState, setBadState] = React.useState(0);

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setGoodState(goodState + 1)} text="good"/>
            <Button handleClick={() => setNeutralState(neutralState + 1)} text="neutral"/>
            <Button handleClick={() => setBadState(badState + 1)} text="bad"/>
            <h1>statistics</h1>
            <Statistics good={goodState} neutral={neutralState} bad={badState}/>
        </div>
    );
};

export default App;
