const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show_Career extends React.Component {
  render() {
    const {career}= this.props;
      return (
      <DefaultLayout title={"career Profile"}>
        <div>
            <nav>
                <a href="/careers"> Back to career Dashboard</a>
            </nav>
          <h1> {career.career_title} show page </h1>
          career name : {career.career_title}
          <br />
            Program : {career.company}
          <br /> 
            tuition : {career.salary}
          <br /> 
            does it match your Major? : {career.matchmajor}
            <br />

                {/* =======EDIT */} 
                <a href={`./${career._id}/edit`}>
                <br />
                Edit career
                </a>  
        {/* =====Delete */}
        <form
        action={`/careers/${career._id}?_method=DELETE`}
        method="POST">
        <input type="submit" value="DELETE" />
        </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show_Career;