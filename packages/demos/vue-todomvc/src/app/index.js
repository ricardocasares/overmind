import { Overmind } from 'overmind'
import { createConnect } from 'overmind-vue'

const app = new Overmind({
  state: {
    todos: [],
    newTodoTitle: '',
    count: (state) => state.todos.length,
  },
  actions: {
    changeNewTodoTitle({ value: event, state }) {
      state.newTodoTitle = event.target.value
    },
    addTodo({ value: event, state }) {
      event.preventDefault()
      state.todos.unshift({
        id: String(Date.now()),
        title: state.newTodoTitle,
        completed: false,
      })
      state.newTodoTitle = ''
    },
    toggleCompleted({ value: todo }) {
      todo.completed = !todo.completed
    },
  },
})

export const connect = createConnect(app)

export default app
