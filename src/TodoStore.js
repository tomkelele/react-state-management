class TodoStore {
  constructor() {
    this.data = [];
    this.observers = [];
  };

  subscribe = f => {
    this.observers.push(f);
  };

  notify = data => {
    this.observers.forEach(callback => callback(data))
  };

  add = data => {
    this.data.push(data);
    this.notify(this.data);
  };

  edit = (index, checked) => {
    const data = this.data[index];
    data.resolve = checked;
    this.data[index] = data;
    this.notify(this.data);
  };

  getItem = index => {
    const data = this.data[index];
    return data;
  };

  getData = () => this.data;
}

export default new TodoStore();