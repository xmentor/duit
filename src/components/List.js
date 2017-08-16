class List {
    constructor(list = {}) {
        this.id = list.id || Date.now();
        this.name = list.name;
        this.tasks = list.tasks || [];
    }
}

export default List;