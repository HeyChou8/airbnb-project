import React, { memo, useState,useEffect } from 'react'
import { PicturesWrapper } from './style'
import { shallowEqual, useSelector,useDispatch } from 'react-redux'
import PictureBrowser from '@/base-ui/picture-browser'
import { changeDetailInfoAction } from '@/store/modules/detail'
const DetailPictures = memo(() => {
  const [showBrowser,setShowBrowser] = useState(false)
  const{ detailInfo} = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }),shallowEqual)
  // 从本地存储那到detailInfo
  const detailInfos = JSON.parse(window.localStorage.getItem('detailInfo'))
  // 发送网络请求
const dispatch = useDispatch()
useEffect(() => {
 dispatch(changeDetailInfoAction(detailInfos))
},[dispatch])
  return (
    <PicturesWrapper>
        <div className="pictures">
            <div className="left">
                <div className="item">
                    <img src={detailInfo?.picture_urls?.[0]} alt="" />
                    <div className="cover"></div>
                </div>
            </div>
            <div className="right">
              {detailInfo?.picture_urls?.slice(1,5).map(item => {
                return <div className="item" key={item}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              })}
            </div>
        </div>
        <div className="show-btn" onClick={e => setShowBrowser(true)}>查看图片</div>
        {showBrowser && <PictureBrowser pictureUrls={detailInfo?.picture_urls} closeClick={e => setShowBrowser(false)}></PictureBrowser>}
    </PicturesWrapper>
  )
})

export default DetailPictures