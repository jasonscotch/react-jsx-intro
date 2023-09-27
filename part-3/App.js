const App = () => (
    <div>
       <Person name="Jason" age={31} hobbies={['cooking','video games','fishing']} />
       <Person name="Steffi" age={33} hobbies={['painting','music','netflix']} />
       <Person name="Tazmanian Devil" age={16} hobbies={['eating','sleeping','eating']} />

    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))