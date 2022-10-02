// form for users to create new instance of a Log and save into DB

const React = require("react");
const DefaultLayout = require("./layouts/default");
class New_Trial extends React.Component {
render() {
    return (
    <DefaultLayout title={"New trial"}>
        <div>
        <nav>
            <a href="/trials"> Back to trial index</a>
        </nav>
        <br />
            <form action="/trials" method="POST">
            {/* input type reset example */}
        <label for="fname">First name:</label>
            <br/>
            <input type="text" id="fname" name="fname" value="John" required/>
            <br/>
        <label for="lname">Last name:</label>
            <br/>
            <input type="text" id="lname" name="lname" value="Doe" required/>
            <br/>
            <p>How many models did you make?</p>
            <input type="radio" id="some" name="how_many" value="some"/> some ( less than 5 )
            <br />
            <input type="radio" id="enough" name="how_many" value="enough"/> enough (5)
            <br />
            <input type="radio" id="too_many" name="how_many" value="too_many"/> too many (5+)
            <br />
            <br />
            <input type="checkbox" name="likeTheTask" value="likeTheTask" /> did you like the assignment?
            <br />
            <br />

            <label for="codeStart">When did you first start coding? <br />(month and year):</label>

            <input type="month" id="code_month" name="code_month" />

            <br />
            <br />
            <label for="email">Join our mailing list : </label> 
            <br />
            <input type="email" id="email" placeholder="Enter Email"  name="email"/>





            <br />
            <br />

            <input type="submit" value="Submit"/>
            <input type="reset"/>
            <br />

            </form>
        </div>
    </DefaultLayout>
    );
}
}

module.exports = New_Trial;