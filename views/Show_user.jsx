const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show_user extends React.Component {
  render() {
    const {user}= this.props;
      return (
      <DefaultLayout title={"user Profile"}>
        <div>
            <nav>
              <a href="/users"> Back2 Dashboard</a>
            </nav>
              <h1> {user.username} show page </h1>
              User name : {user.username}
              <br />
                Password : {user.password}
              <br /> 
                Desired role : {user.desiredrole}
              <br /> 
                user : {" "}
              {user.lookingForNewJob
                ? "looking for new role"
                : "not looking for new role"}
              <br />
              photo: <img src={user.photo} alt="user img" width="400px" height="400px"/>
              

            {/* =======EDIT */}
            <a href={`./${user._id}/edit`}>
            <br />
            Edit user
            </a>

            {/* =====Delete */}
            <form
              action={`/users/${user._id}?_method=DELETE`}
              method="POST">
            <input type="submit" value="DELETE" />
            </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show_user;