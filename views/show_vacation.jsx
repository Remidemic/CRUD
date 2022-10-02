const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show_vacation extends React.Component {
  render() {
    const {vacation}= this.props;
      return (
      <DefaultLayout title={"vacation ID show Page"}>
        <div>
            <nav>
                <a href="/vacations"> Back to vacation Dashboard</a>
            </nav>
          <h1> {vacation.location} show page </h1>
          vacation country: {vacation.country}
          <br />
            duration : {vacation.duration}
          <br /> 
          photo: <img src={vacation.photo} alt="user img" width="400px" height="400px"/>
          <br /> 

                {/* =======EDIT */} 
                <a href={`./${vacation._id}/edit`}>
                <br />
                Edit vacation
                </a>  
        {/* =====Delete */}
        <form
        action={`/vacations/${vacation._id}?_method=DELETE`}
        method="POST">
        <input type="submit" value="DELETE" />
        </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show_vacation;