const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit_todo extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit todo Page">
        <nav>
                <a href="/todos">Back to todo Index</a>
            </nav>
         <form
          action={`/todos/${this.props.todo._id}?_method=PUT`}
          method="POST"
        >

          task:{" "}
          <input
            type="text"
            name="task"
            defaultValue={this.props.todo.task}
          />
          <br />
          todo:{" "}
          <input type="text" name="todo" defaultValue={this.props.todo.todo} />
          <br />



          {/* Is looking for a new Role:
          {this.props.school.lookingForNewJob ? (
            <input type="checkbox" name="lookingForNewJob" defaultChecked />
          ) : (
            <input type="checkbox" name="lookingForNewJob" />
          )}
          <br /> */}
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit_todo;