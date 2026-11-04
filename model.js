"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nextId = 1;
// 3. addTask Operation
function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title,
        status: "todo",
    };
    return [...tasks, newTask];
}
// 4. completeTask Operation
function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id ? { ...task, status: "done" } : task);
}
// 5. filterByStatus Operation
function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
// 6. Custom/Extra Operation
function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
function advanceTask(tasks, id) {
    return tasks.map((task) => {
        if (task.id !== id)
            return task;
        if (task.status === "todo")
            return { ...task, status: "in-progress" };
        if (task.status === "in-progress")
            return { ...task, status: "done" };
        return task;
    });
}
//# sourceMappingURL=model.js.map