export async function save(name: string, item: string) {
  localStorage.setItem(name, item);
}

export async function get(name: string) {
  return localStorage.getItem(name);
}

export function hasSession() {
  const token = localStorage.getItem('token');

  if (token) {
    return true;
  } else {
    return false;
  }
}

export function clear() {
  localStorage.clear();
}
