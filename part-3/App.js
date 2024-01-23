const App = () => {
    return (
        <div>
        <Person
        name="Henry"
        age={23}
        hobbies={["Golfing", "Coding", "Basketball"]}
        />
        <Person
        name="Micky"
        age={22}
        hobbies={["TikTok", "Cooking", "Ringette"]}
        />
        <Person
        name="Bob"
        age={0}
        hobbies={["Milk", "Sleeping", "Eye opening"]}
        />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));