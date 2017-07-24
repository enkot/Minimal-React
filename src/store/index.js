const store = {
    id: 0,
    todos: [],
    status: ['todo', 'doing', 'done'],
    add: function(todo) {
        this.todos.push({ 
            id: this.generateId(), 
            desc: todo.desc, 
            name: todo.name, 
            status: todo.status || this.status[0]
        });
    },
    generateId: function() {
        return this.id++;
    }
};

export default store;