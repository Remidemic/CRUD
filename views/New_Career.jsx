// form for users to create new instance of a Log and save into DB

const React = require("react");
const DefaultLayout = require("./layouts/default");
class New_Career extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Career Path"}>
        <div>
        <nav>
            <a href="/careers"> Back to Career Index</a>
        </nav>
        <form action="/careers" method="POST">
            Career Title: <input type="text" name="career_title" />
            <br />
            Company: <input type="text" name="company" />
            <br />
            Salary: <input type="text" name="salary" />
            <br />
            Matches with major?: <input type="checkbox" name="matchmajor" />

            {/* type radio -  */}
            <br />
            <input type="submit" name="" value="add new Career" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New_Career;