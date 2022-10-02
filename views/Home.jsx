// has links to all the different paths 

// this is the index_User page. where your user will see user profile, 

const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index_User extends React.Component{
   
    render(){
        const {users} = this.props;
        console.log(users);
        return(

        <DefaultLayout title={"Project Week II: Models Revenge"}>
         <ul>
            <html>
                <head>
                    <title>REMYS PROJECT WEEK HOME PAGE</title>    
                </head>
                <body>

                    <a href="/schools"> Schools List </a>
                    <br />
                    <br />
                    <a href="/users"> Users List</a>
                    <br />
                    <br />
                    <a href="/careers"> Careers List</a>
                    <br />
                    <br />
                    <a href="/todos"> Todos List</a>
                    <br />
                    <br />
                    <a href="/vacations">Vacations List</a>
                    <br />
                    <br />

                </body>
            </html>



        </ul>
      </DefaultLayout>
    );
  }
}
module.exports = Index_User