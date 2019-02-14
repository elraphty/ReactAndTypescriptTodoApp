import * as React from "react";

export class App extends React.Component<{}, Istate> {
  
  constructor(props: {}) {
    super(props);

    this.state = {
      currentTask: "",
      tasks: []
    }
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    this.setState({
      currentTask: "",
      tasks: [
        ...this.state.tasks,
        this.state.currentTask
      ]
    });
  }

  renderTasks(): JSX.Element[] {
    return this.state.tasks.map((task: string, index: number) => {
      return (
        <div key={index}>
          {task}
        </div>
      );
    });
  }

  render(): JSX.Element {
    // console.log(this.state);
    return (
      <div>
        <h1>React Typescript Todo List</h1>
        <form onSubmit={(e)=> this.handleSubmit(e)}>
          <input type="text" placeholder="Add a task" onChange={e => {this.setState({currentTask: e.target.value})}}
          value={this.state.currentTask} 
          />
          <button type="submit">Add Task</button>
        </form>
        <section>
          {this.renderTasks()}
        </section>
      </div>
    )
  }
}

// interface IProps {
//   name: string
// }

interface Istate {
  tasks: Array<any>,
  currentTask: string
}