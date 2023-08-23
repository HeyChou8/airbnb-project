import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'  
import { Carousel } from 'antd'
import { useRef } from 'react'
const RoomItem = memo((props) => {
  const { itemData,itemWidth="25%",itemClick} = props
  const swiperRef = useRef()
  function handleControlClick(isRight = true,event){
    isRight ? swiperRef.current.next() : swiperRef.current.prev()
    //阻止事件冒泡
    event.stopPropagation()
  }
  function handleItemClick(){
    if(itemClick) itemClick(itemData)
  }
  // 子元素赋值
  const pictureElement = (<div className="cover">
  <img src={itemData.picture_url} alt="" />
</div>)
  const sliderElement = (<div className="swiper">
<div className="control">
  <div className="btn left" onClick={e => {handleControlClick(false,e)}}>
    <IconArrowLeft width='30' height='30'></IconArrowLeft>
  </div>
  <div className="btn right" onClick={e => {handleControlClick(true,e)}}>
    <IconArrowRight width='30' height='30'></IconArrowRight>
  </div>
</div>
<Carousel dots={false} ref={swiperRef} waitForAnimate={true}>
{
  itemData?.picture_urls?.map(item => {
    return <div className="cover" key={item}><img src={item} alt="" /></div>
  })
}
</Carousel>
</div>)
  return (
    <ItemWrapper 
    verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={handleItemClick}>
        <div className="inner">
          {!itemData.picture_urls ? pictureElement: sliderElement}
          <div className="desc">
            {itemData.verify_info.messages.join('·')}
          </div>
          <div className="name">{itemData.name}</div>
          <div className="price">￥{itemData.price}/晚</div>
          <div className="bottom">
          <Rating 
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly 
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>}
          </div>
        </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem