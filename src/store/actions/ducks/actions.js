import { REMOVE_DUCK, NEW_DUCK } from "./types"
import { getNewDuck } from "api"

// ACTIONS
export const showNewDuck = () => async (dispatch) => {
  dispatch({ type: REMOVE_DUCK })
  try {
    const data = await getNewDuck()
    dispatch({
      type: NEW_DUCK,
      payload: data.duck,
    })
  } catch (error) {
    console.log(error)
  }
}
