// this is the index_Todo page. where your Todo will see Todo profile, 

const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index_Career extends React.Component{
   
    render(){
        const {careers} = this.props;
        console.log(careers);
        return(

            <DefaultLayout title={"career List index_career"}>
                <ul>
                <nav>
                <a href="/home"> Home page</a>
                <br />
                <br />
                <a href="/careers/new_career">New career Entry</a>
            </nav>
            <h2>Here is list of careers. do any of these match your major? :</h2>
                {careers.map((career, i) =>{
                    return (
                    <li key={i}>
                        {/* eachcareer */}
                        <a href={`/careers/${career.id}`}>
                        Career Title: {career.career_title} 
                        <br/>
                        {/* career: {career.career}
                        <br />
                        comments: {career.comments}
                        <br />
                        complete? : {career.complete} */}
                        </a>
                        {/* =======EDIT */}
                            <a href={`careers/${career._id}/edit`}>
                              <br />
                            Edit career
                            </a>
                        {/* =====Delete */}
                        <form
                        action={`/careers/${career._id}?_method=DELETE`}
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
module.exports = Index_Career