const App = () => (
    <div>
      <Tweet
        name="Henry Tse"
        username="henrytsetse"
        date={new Date().toDateString()}
        message="My name is Henry"
      />
      <Tweet
        name="Hello World"
        username="helloworld"
        date={new Date().toDateString()}
        message="#helloworld"
      />
      <Tweet
        name="Micky Mouse"
        username="mickymouse"
        date={new Date().toDateString()}
        message="Follow me on Twitter!"
      />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))