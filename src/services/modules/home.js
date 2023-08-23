import MyRequest from "..";

export function getHomeGoodPriceData(){
    return MyRequest.get({
        url: "/home/goodprice"
    })
}
export function getHomeHighScoreData(){
    return MyRequest.get({
        url: '/home/highscore'
    })
}
export function getHomeDiscountData(){
    return MyRequest.get({
        url: '/home/discount'
    })
}
export function getHomePlusData(){
    return MyRequest.get({
        url: '/home/plus'
    })
}
export function getHomeRecommendData(){
    return MyRequest.get({
        url: '/home/hotrecommenddest'
    })
}
export function getHomeLongforData(){
    return MyRequest.get({
        url: '/home/longfor'
    })
}