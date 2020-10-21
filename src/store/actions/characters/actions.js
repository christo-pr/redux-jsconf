import { fetchRandomMonsters } from "api"
import { SET_CHARACTERS } from "./types"

export const getRandomMonsters = () => async (dispatch) => {
  try {
    const data = await fetchRandomMonsters()
    dispatch({
      type: SET_CHARACTERS,
      payload: { characters: data },
    })
  } catch (error) {}
}
