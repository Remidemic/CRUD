const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
  render() {
    const {school}= this.props;
      return (
      <DefaultLayout title={"school Profile"}>
        <div>
            <nav>
                <a href="/schools"> Back to school Dashboard</a>
            </nav>
          <h1> {school.schoolname} show page </h1>
          school name : {school.schoolname}
          <br />
            Program : {school.program}
          <br /> 
            tuition : {school.tuition}
          <br /> 

                {/* =======EDIT */} 
                <a href={`./${school._id}/edit`}>
                <br />
                Edit School
                </a>  
        {/* =====Delete */}
        <form
        action={`/schools/${school._id}?_method=DELETE`}
        method="POST">
        <input type="submit" value="DELETE" />
        </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;