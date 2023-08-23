import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeLongforData, getHomePlusData, getHomeRecommendData } from "@/services";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchHomeDataAction = createAsyncThunk("fetchData", (payload,{dispatch}) => {
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })
    getHomePlusData().then(res => {
        dispatch(changePlusInfoAction(res))
    })
    getHomeRecommendData().then(res => {
        dispatch(changeRecommendInfoAction(res))
    })
    getHomeLongforData().then(res => {
        dispatch(changeLongforInfoAction(res))
    })
})
const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo:{},
        highScoreInfo:{},
        discountInfo:{},
        plusInfo:{},
        recommendInfo:{},
        longforInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state,{payload}){
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state,{payload}){
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state,{payload}){
            state.discountInfo = payload
        },
        changePlusInfoAction(state,{payload}){
            state.plusInfo = payload
        },
        changeRecommendInfoAction(state,{payload}){
            state.recommendInfo = payload
        },
        changeLongforInfoAction(state,{payload}){
            state.longforInfo = payload
        }
    }
})
export const {changeGoodPriceInfoAction,changeHighScoreInfoAction,changeDiscountInfoAction,
                changePlusInfoAction,changeRecommendInfoAction,changeLongforInfoAction
} = homeSlice.actions
export default homeSlice.reducer