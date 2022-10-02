// this is the index_Todo page. where your Todo will see Todo profile, 

const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index_Todo extends React.Component{
   
    render(){
        const {todos} = this.props;
        console.log(todos);
        return(

            <DefaultLayout title={"Todo List index_Todo"}>
                <ul>
                <nav>
                <a href="/home"> Home page</a>
                <br />
                <br />
                <a href="/todos/new_todo">New Todo Entry</a>
            </nav>
            <h2>Here is list of Todos :</h2>
                {todos.map((todo, i) =>{
                    return (
                    <li key={i}>
                        {/* eachTodo */}
                        <a href={`/Todos/${todo.id}`}>
                        Task: {todo.task} 
                        <br/>
                        {/* todo: {todo.todo}
                        <br />
                        comments: {todo.comments}
                        <br />
                        complete? : {todo.complete} */}
                        </a>
                        {/* =======EDIT */}
                            <a href={`Todos/${todo._id}/edit`}>
                              <br />
                            Edit Todo
                            </a>
                        {/* =====Delete */}
                        <form
                        action={`/Todos/${todo._id}?_method=DELETE`}
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
module.exports = Index_Todo