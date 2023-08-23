import * as actionType from "./constants"
const initialState =  {
    roomList: [],
    totalCount: 0,
    isLoading: false,
    currentPage: 0
}
function reducer(state = initialState,action){
    switch(action.type){
        case actionType.CHANGE_ROOM_LIST: 
            return {...state,roomList:action.roomList}
        case actionType.CHANGE_TOTAL_COUNT:
            return {...state,totalCount: action.totalCount}
        case actionType.CHANGE_IS_LOADING:
            return {...state,isLoading: action.isLoading}
        case actionType.CHANGE_CURRENT_PAGE:
            return {...state,currentPage: action.currentPage}
        default:
            return state
    }
}
export default reducer