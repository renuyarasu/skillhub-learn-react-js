export const incAction = (value) => async dispatch => {
    dispatch({
        type: 'INCREMENT',
        payload: value
    })
}
export const decAction = () => async dispatch => {
    dispatch({
        type: 'DECREMENT'
    })
}