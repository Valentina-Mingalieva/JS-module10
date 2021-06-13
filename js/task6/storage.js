export default class LocalStorage {
    static save(todos) {
        localStorage.setItem(todoList, JSON.stringify(todos));
    }

    static load() {
        try {
            return JSON.parse(localStorage.getItem(todoList));
        } catch (e) {
            console.log(e);
            return [];
        }
    }
}