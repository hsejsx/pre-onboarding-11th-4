export class LocalSearchRepository {
  save(name, keywords) {
    localStorage.setItem(name, JSON.stringify([...keywords]));
  }

  get(name) {
    return JSON.parse(localStorage.getItem(name));
  }
}
