export async function save(name: string, item: string) {
  localStorage.setItem(name, item);
}

export async function get(name: string) {
  return localStorage.getItem(name);
}
