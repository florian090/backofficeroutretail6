export default function (state = null, action) {
    if (action.type === 'VIEW_ROUNDS_LIST') {
        state = action.payload;
    }
    return state;
}
