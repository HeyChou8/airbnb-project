import { getEntireRoomList } from "@/services/modules/entire"
import * as actionType from "./constants"
export const changeRoomListAction = (res) => ({
    type: actionType.CHANGE_ROOM_LIST,
    roomList: res
}) 
export const changeTotalCountAction = (totalCount) => ({
    type: actionType.CHANGE_TOTAL_COUNT,
    totalCount
})
export const changeIsLoadingAction = (isLoading) => ({
    type: actionType.CHANGE_IS_LOADING,
    isLoading
})
export const changeCurrentPageAction = (currentPage) => ({
    type: actionType.CHANGE_CURRENT_PAGE,
    currentPage
})

export const fetchRoomListAction = (page=0) => {
    return async (dispatch,getState) => {
        dispatch(changeIsLoadingAction(true))
        const res = await getEntireRoomList(page * 20)
        dispatch(changeIsLoadingAction(false))
        dispatch(changeRoomListAction(res?.list))
        dispatch(changeTotalCountAction(res?.totalCount))
        dispatch(changeCurrentPageAction(page))
    }
}