// form for Todos to create new instance of a Log and save into DB

const React = require("react");
const DefaultLayout = require("./layouts/default");
class New_vacation extends React.Component {
    render() {
        return (
            <DefaultLayout title={"New Vacation"}>
            <div>
                <nav>
                <a href="/vacations">Back to vacation Index</a>
            </nav>
            <form action="/vacations" method="POST">
            location: <input type="text" name="location" />
            <br />
            country: <input type="text" name="country" />
            <br />
            duration: <input type="text" name="duration" />
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

module.exports = New_vacation;