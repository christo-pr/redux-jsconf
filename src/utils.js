/**
 * Update <Gun /> position based on mouse position.
 * @param {Event} e
 */
export function updateGunPosition(e) {
  const pointer = document.getElementsByClassName("shootgun")[0]
  if (!pointer) return

  pointer.setAttribute("style", "left:" + e.pageX + "px;")
}

/**
 * Random number between min and max
 * @param {Number} min
 * @param {Number} max
 */
export function random(min, max) {
  return Math.floor(Math.random() * (+max - +min) + +min)
}

/**
 * Return an array with unique <count> index's within <total>
 * @param {Number} count
 * @param {Number} total
 */
export function randomIdsFromList(count, total) {
  const list = []

  while (list.length < count) {
    var r = random(0, total)
    if (list.indexOf(r) === -1) list.push(r)
  }

  return list
}
