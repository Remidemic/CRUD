// form for Todos to create new instance of a Log and save into DB

const React = require("react");
const DefaultLayout = require("./layouts/default");
class New_Todo extends React.Component {
    render() {
        return (
            <DefaultLayout title={"New Todo"}>
            <div>
            <nav>
                    <a href="/todos"> Back to Todo index</a>
                </nav>
                <form action="/todos" method="POST">
                Task: <input type="text" name="task" />
                <br />
                Todo: <input type="text" name="todo" />
                <br />
                Comments: <input body="text" date="date" name="comments"/>
                <br />
                Complete? <input type="checkbox" name="complete" />
                <br />
                <input type="submit" name="" value="add new Todo" />
                </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = New_Todo;