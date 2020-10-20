/**
 * Update <Gun /> position based on mouse position.
 * @param {Event} e
 */
export function updateGunPosition(e) {
  const pointer = document.getElementsByClassName("shootgun")[0]
  if (!pointer) return

  pointer.setAttribute("style", "left:" + e.pageX + "px;")
}
