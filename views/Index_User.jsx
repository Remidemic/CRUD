// this is the index_User page. where your user will see user profile, 

const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index_User extends React.Component{
   
    render(){
        const {users} = this.props;
        console.log(users);
        return(

            <DefaultLayout title={"User profile index_User"}>
                <ul>
                <nav>
                <a href="/home"> Home page</a>
                <br />
                <br />
                <a href="/users/new">New User Entry</a>
            </nav>
            <h2>Here is list of users :</h2>
                {users.map((user, i) =>{
                    return (
                    <li key={i}>
                        {/* eachuser */}
                        <a href={`/users/${user.id}`}>
                        {user.username}: The Future {user.desiredrole}
                        </a>
                        {/* =======EDIT */}
                            <a href={`users/${user._id}/edit`}>
                              <br />
                            Edit user
                            </a>
                        {/* =====Delete */}
                        <form
                        action={`/users/${user._id}?_method=DELETE`}
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
module.exports = Index_User