const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit_vacation extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit vacation Page">
        <nav>
                <a href="/vacations">Back to vacation Index</a>
            </nav>
         <form
          action={`/vacations/${this.props.vacation._id}?_method=PUT`}
          method="POST"
        >

          Location:{" "}
          <input
            type="text"
            name="location"
            defaultValue={this.props.vacation.location}
          />
          <br />
          country:{" "}
          <input type="text" name="country" defaultValue={this.props.vacation.country} />
          <br />
          duration:{" "}
          <input type="text" name="duration" defaultValue={this.props.vacation.duration} />
          <br />
          photo:{" "}
          <input type="text" name="photo" defaultValue={this.props.vacation.photo} />
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
module.exports = Edit_vacation;