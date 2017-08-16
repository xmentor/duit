class Task {
    constructor(task = {}) {
        this.id = task.id || Date.now();
        this.name = task.name;
        this.isCompleted = false;
    }
}

export default Task;