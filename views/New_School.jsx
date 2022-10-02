// form for users to create new instance of a Log and save into DB

const React = require("react");
const DefaultLayout = require("./layouts/default");
class New_School extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New School Program"}>
        <div>
        <nav>
            <a href="/schools"> Back to School Index</a>
        </nav>
        <form action="/schools" method="POST">
            School: <input type="text" name="schoolname" />
            <br />
            Program: <input type="text" name="program" />
            <br />
            Tuition: <input type="text" name="tuition" />
            <br />
            <input type="submit" name="" value="add new program" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New_School;