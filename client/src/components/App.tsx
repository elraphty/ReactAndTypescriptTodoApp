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
        {
          id: this._generateId(),
          value: this.state.currentTask,
          completed: false
        }
      ]
    });
  }

  public toggleDone(index: number): void {
    let task : Itask[] = this.state.tasks.splice(index, 1);
    task[0].completed = !task[0].completed;

    // console.log('task', task);
    const currentTasks : Itask[] = [...this.state.tasks, ...task];

    this.setState({tasks: currentTasks});
  }

  renderTasks(): JSX.Element[] {
    return this.state.tasks.map((task: Itask, index: number) => {
      return (
        <div key={task.id} className="tdl-task">
          <span className={task.completed ? "is-completed" : " "}>{task.value}</span>
          <button onClick={() => this.deleteTask(task.id)}>Delete task</button>
          <button onClick={() => this.toggleDone(index)}>{task.completed ? 'Undo': 'Done'}</button>
        </div>
      );
    });
  }

  render(): JSX.Element {
    // console.log(this.state);
    return (
      <div>
        {/* <h1>React Typescript Todo List</h1>
        <form onSubmit={(e)=> this.handleSubmit(e)}>
          <input className="tdl-input" type="text" placeholder="Add a task" onChange={e => {this.setState({currentTask: e.target.value})}}
          value={this.state.currentTask} 
          />
          <button type="submit">Add Task</button>
        </form>
        <section>
          {this.renderTasks()}
        </section> */}
        <div className="div-opacity">
        </div>
        <div className="home-container">
          <div className="details-wrap">
            <h1>REACT TODO APP</h1>
            <p>A simple todo app made with reactjs, redux,typescript and nodejs, simply register to place your todo and manage them</p>
            <button>Create Todo</button>
          </div>
        </div>
      </div>
    )
  }

  private _generateId(): number {
    return Date.now();
  }

  private deleteTask(id: number): void {
    const filteredTask: Array<Itask>  = this.state.tasks.filter((task: Itask) => task.id !== id);

    this.setState({tasks: filteredTask});
  }

}

// interface IProps {
//   name: string
// }

interface Istate {
  tasks: Array<Itask>,
  currentTask: string
}

interface Itask {
  id: number,
  value: string,
  completed: boolean,
}