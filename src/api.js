/**
 * Fetch 4 random monsters from the API
 * Note: The response is mocked by a proxy
 * defined on server.js
 */
export async function fetchRandomMonsters() {
  const response = await fetch("/api/monsters")
  const data = await response.json()
  return data
}
