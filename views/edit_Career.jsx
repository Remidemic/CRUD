


const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit_career extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Profile Page">
        <nav>
                <a href="/career">Back to career Index</a>
            </nav>
         <form
          action={`/careers/${this.props.career._id}?_method=PUT`}
          method="POST"
        >
          Career Title:{" "}
          <input
            type="text"
            name="career_title"
            defaultValue={this.props.career.career_title}
          />
          <br />
          Company:{" "}
          <input type="text" name="company" defaultValue={this.props.career.company} />
          <br />
          Salary:{" "}
          <input type="text" name="salary" defaultValue={this.props.career.salary} />
          <br />


          {/* Is looking for a new Role:
          {this.props.career.lookingForNewJob ? (
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
module.exports = Edit_career;