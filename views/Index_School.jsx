// this is the index_school page. where your school will see school profile, 

const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index_School extends React.Component{
   
    render(){
        const {schools} = this.props;
        console.log(schools);
        return(

      <DefaultLayout title={"School profile index_school"}>
        <ul>
          <nav>
            <a href="/home"> Home page</a>
            <br />
            <a href="/schools/new_school">New School Entry</a>
          </nav>
          Here is list of School Programs :
          {schools.map((school, i) =>{
            return (
              <li key={i}>
              {/* eachschool */}
                <a href={`/schools/${school.id}`}>
                School: {school.schoolname} with program {school.program}
                </a>
                {/* school name is ___ and is / isnt eligible to graduate*/}
                {/* =======EDIT */}
                <a href={`schools/${school._id}/edit`}>
                <br />
                Edit School
                </a>      
                {/* =====Delete */}
                <form
                  action={`/schools/${school._id}?_method=DELETE`}
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
module.exports = Index_School