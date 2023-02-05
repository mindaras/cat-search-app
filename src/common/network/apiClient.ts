async function get<T>(url: string, options?: RequestInit) {
  const response = await fetch(url, options);
  const data: T = await response.json();
  return { data, headers: response.headers };
}

const apiClient = { get };

export { apiClient };
