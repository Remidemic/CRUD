const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Profile Page">
        <nav>
                <a href="/users">Back to Index</a>
            </nav>
         <form
          action={`/users/${this.props.user._id}?_method=PUT`}
          method="POST"
        >
          User Name:{" "}
          <input
            type="text"
            name="username"
            defaultValue={this.props.user.username}
          />
          <br />
          Password:{" "}
          <input type="text" name="password" defaultValue={this.props.user.password} />
          <br />
          Desired role:{" "}
          <input type="text" name="desiredrole" defaultValue={this.props.user.desiredrole} />
          <br />


          Is looking for a new Role:
          {this.props.user.lookingForNewJob ? (
            <input type="checkbox" name="lookingForNewJob" defaultChecked />
          ) : (
            <input type="checkbox" name="lookingForNewJob" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;