const App = () => {
    const currentDate = new Date();

    return (
        <div>
        <Tweet username="masonscotch" name="Jason Scott" date={currentDate.toDateString()} message="This is my first tweet!" />
        <Tweet username="taztheboxer" name="Taz Scott" date={currentDate.toDateString()} message="Woof! I need a treat." />
        <Tweet username="steffdateach" name="Steffi Thomann" date={currentDate.toDateString()} message="I can't wait to get off work!" />

        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))