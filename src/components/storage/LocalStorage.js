class LocalStorage {
    constructor(key = 'my_app') {
        this.storageKey = key;
    }
    save(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
        }
    load() {
        return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    }       
}

export default LocalStorage;