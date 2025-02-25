const { addTodoAction, addTodo, deleteTodoAction, deleteTodo, completeTodoAction, completeTodo } = require("./logic");

test("addTodo", () => {
    const state = { last_id:0, todos: [] };
    const action = addTodoAction("todo1");
    const newState = addTodo(state, action.payload.name);
    expect(newState).toEqual({
      last_id:1,
      todos: [{ id: 0, name: "todo1", completed: false }],
    });
  });

test("deleteTodo", () => {
    const state = {last_id:3, todos: [{ id: 1, name: "todo1", completed: false }] };
    const action = deleteTodoAction(1);
    const newState = deleteTodo(state, 1);
    expect(newState).toEqual({
      last_id:3,
      todos: [],
    });
  });

test("completeTodo", () => {
    const state = {last_id:3, todos: [{ id: 1, name: "todo1", completed: false }] };
    const action = completeTodoAction(1);
    const newState = completeTodo(state, 1);
    expect(newState).toEqual({
      last_id:3,
      todos: [{ id: 1, name: "todo1", completed: true }],
    });
  });