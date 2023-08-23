
import { getHomeGoodPriceData } from '@/services'
import { fetchHomeDataAction } from '@/store/modules/home'
import { isEmptyO } from '@/utils/is-empty-object'
import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongfor from './c-cpns/home-longfor'
import { HomeWrapper } from './style'

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo,highScoreInfo,discountInfo,plusInfo,recommendInfo,longforInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    plusInfo: state.home.plusInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo
  }),shallowEqual)
    // 派发异步事件，发送网络请求
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchHomeDataAction())
    },[dispatch])
    // useEffect(() => {
    //   getHomeGoodPriceData().then((res) => {
    //     console.log(res);
    //   }, []);
    // });
  return (
    <HomeWrapper>
        <HomeBanner></HomeBanner>
        <div className="content">
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>}
        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}></HomeLongfor>}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>}
        </div>
    </HomeWrapper>
  )
})

export default Home