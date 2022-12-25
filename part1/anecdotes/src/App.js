import React from "react";

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
);

const App = () => {
    const allAnecdotes = [
        "If it hurts, do it more often",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
    ];

    const [selected, setSelected] = React.useState(0);
    const [marks, setMarks] = React.useState(new Array(allAnecdotes.length).fill(0));

    const vote = () => {
        const copyOfMarks = [...marks];
        copyOfMarks[selected] += 1;
        setMarks(copyOfMarks);
    };

    const IndexOfbestAnecdotes = marks.indexOf(Math.max(...marks));

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <div>{allAnecdotes[selected]}</div>
            <div>has {marks[selected]} points</div>
            <Button handleClick={() => vote()} text="vote"/>
            <Button
                handleClick={() =>
                    setSelected(Math.floor(Math.random() * allAnecdotes.length))
                }
                text="next anecdote"
            />
            <h1>Anecdote with most votes</h1>
            <div>{allAnecdotes[IndexOfbestAnecdotes]}</div>
            <div>has {marks[IndexOfbestAnecdotes]} votes</div>
        </div>
    );
};

export default App;
