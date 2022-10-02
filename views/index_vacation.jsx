// this is the index_User page. where your user will see user profile, 

const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index_Vacation extends React.Component{
   
    render(){
        const {vacations} = this.props;
        console.log(vacations);
        return(

            <DefaultLayout title={"Welcome to a INDEX showcase of Vacation Destinations"}>
                <ul>
                <nav>
                <a href="/home"> Home page</a>
                <br />
                <br />
                <a href="/vacations/new_vacation">New Vacation Entry</a>
            </nav>
            <h2>Here is list of vacations :</h2>
                {vacations.map((vacation, i) =>{
                    return (
                    <li key={i}>
                        {/* eachvacation */}

                        {/* location, country, duration, photo, hasbeen-bool */}


                        <a href={`/vacations/${vacation.id}`}>
                        {vacation.location}: The Future {vacation.country}
                        </a>
                        {/* =======EDIT */}
                            <a href={`vacations/${vacation._id}/edit`}>
                              <br />
                            Edit user
                            </a>
                        {/* =====Delete */}
                        <form
                        action={`/vacations/${vacation._id}?_method=DELETE`}
                        method="POST">
                      <input type="submit" value="DELETE" />
                      </form>
                      <br />
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}
module.exports = Index_Vacation