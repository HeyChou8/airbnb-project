import PropTypes from 'prop-types'
import React, { memo, useEffect,useState } from 'react'
import { BrowserWrapper } from './style'
import { CloseOutlined } from '@ant-design/icons'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const PictureBrowser = memo((props) => {
    const { closeClick,pictureUrls=[] } = props
    const [currentIndex,setCurrentIndex] = useState(0)
    // 当图片浏览器展示出来时，滚动功能消失
    useEffect(() =>{
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = "auto"
        }
    }
    ,[])
    function handleCloseClick(){
        if(closeClick) closeClick()
    }

    function handleControlClick(isNext = true){
        let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
        if(newIndex < 0) newIndex = pictureUrls.length - 1
        if(newIndex > pictureUrls.length - 1) newIndex = 0
        setCurrentIndex(newIndex)
    }
  return (
    <BrowserWrapper>
        <div className="top">
            <div className="close-btn" onClick={handleCloseClick}>
            <CloseOutlined style={{fontSize: 30, color: 'white'}} />
            </div>
        </div>
        <div className="slider">
            <div className="control" >
                <div className="btn left" onClick={e => handleControlClick(false)}>
                <IconArrowLeft width="77" height="77" ></IconArrowLeft>
                </div>
                <div className="btn right" onClick={e => handleControlClick(true)}>
                <IconArrowRight width="77" height="77"></IconArrowRight>
                </div>
            </div>

            <div className="picture">
                <img src={pictureUrls[currentIndex]} alt="" />
            </div>
        </div>
        <div className="preview"></div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array
}

export default PictureBrowser