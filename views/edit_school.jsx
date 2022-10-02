const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit_school extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Profile Page">
        <nav>
                <a href="/schools">Back to Index</a>
            </nav>
         <form
          action={`/schools/${this.props.school._id}?_method=PUT`}
          method="POST"
        >
          school Name:{" "}
          <input
            type="text"
            name="schoolname"
            defaultValue={this.props.school.schoolname}
          />
          <br />
          Program:{" "}
          <input type="text" name="program" defaultValue={this.props.school.program} />
          <br />
          Tuition:{" "}
          <input type="text" name="tuition" defaultValue={this.props.school.tuition} />
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
module.exports = Edit_school;