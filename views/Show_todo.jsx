const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show_todo extends React.Component {
  render() {
    const {todo}= this.props;
      return (
      <DefaultLayout title={"todo Profile"}>
        <div>
            <nav>
              <a href="/todos"> Back2 Dashboard</a>
            </nav>
              <h1> {todo.task} show page </h1>
              task : {todo.task}
              <br />
            todo : {todo.todo}

            {/* =======EDIT */}
            <a href={`./${todo._id}/edit`}>
            <br />
            Edit todo
            </a>

            {/* =====Delete */}
            <form
              action={`/todos/${todo._id}?_method=DELETE`}
              method="POST">
            <input type="submit" value="DELETE" />
            </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show_todo;