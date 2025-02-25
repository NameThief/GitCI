const { addTodoAction, addTodo } = require("./logic");

test("addTodo", () => {
    const state = { todos: [] };
    const action = addTodoAction("todo1");
    const newState = addTodo(state, action.payload.name);
    expect(newState).toEqual({
      todos: [{ id: expect.any(String), name: "todo1", completed: false }],
    });
  });