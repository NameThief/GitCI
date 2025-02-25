const { addTodoAction, addTodo, deleteTodoAction, deleteTodo, completeTodoAction, completeTodo } = require("./logic");

test("addTodo", () => {
    const state = { todos: [] };
    const action = addTodoAction("todo1");
    const newState = addTodo(state, action.payload.name);
    expect(newState).toEqual({
      todos: [{ id: expect.any(String), name: "todo1", completed: false }],
    });
  });

test("deleteTodo", () => {
    const state = { todos: [{ id: 1, name: "todo1", completed: false }] };
    const action = deleteTodoAction(1);
    const newState = deleteTodo(state, action.payload.id);
    expect(newState).toEqual({
      todos: [],
    });
  });

test("completeTodo", () => {
    const state = { todos: [{ id: 1, name: "todo1", completed: false }] };
    const action = completeTodoAction(1);
    const newState = completeTodo(state, action.payload.id);
    expect(newState).toEqual({
      todos: [{ id: 1, name: "todo1", completed: true }],
    });
  });