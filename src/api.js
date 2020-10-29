/**
 * Fetch a new DUCK!
 * Note: The response is mocked by a proxy
 * defined on server.js
 */
export async function getNewDuck() {
  const response = await fetch("/api/duck")
  const data = await response.json()
  console.log("getNewDuck -> data", data)
  return data
}
