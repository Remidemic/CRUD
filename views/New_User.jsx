// form for users to create new instance of a Log and save into DB

const React = require("react");
const DefaultLayout = require("./layouts/default");
class New_User extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New User"}>
        <div>
        <nav>
                <a href="/users"> Back to user index</a>
            </nav>
          <form action="/users" method="POST">
            USERNAME: <input type="text" name="username" />
            <br />
            Password: <input type="text" name="password" />
            <br />
            Desired Role: <input type="text" name="desiredrole" />
            <br />
            Actively looking? <input type="checkbox" name="lookingForNewJob" />
            <br />
            photo: <input type="text" name="photo" />
            <br />


            <input type="submit" name="" value="add new user" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New_User;