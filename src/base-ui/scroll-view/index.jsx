import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { useRef } from 'react'
import { useEffect } from 'react'

const ScrollView = memo((props) => {
    // 定义内部状态
    const [showLeft, setShowLeft ] = useState(false)
    const [showRight,setShowRight ] = useState(false)
    const [posIndex,setPosIndex] = useState(0)
    const totalDistanceRef = useRef()
    // 组件渲染完毕，判断是否显示右侧按钮
    const scrollContentRef = useRef()
    useEffect(() => {
        const scrollWidth = scrollContentRef.current.scrollWidth //一共可以滚动的宽度
        const clientWidth = scrollContentRef.current.clientWidth //本身占据的宽度
        const totalDistance = scrollWidth - clientWidth
        totalDistanceRef.current = totalDistance
        setShowRight(totalDistance > 0)
    },[props.children])
    //事件处理逻辑
    function handleControlClick(isRight){
        const newIndex = isRight ? posIndex + 1 : posIndex -1
        const newEl = scrollContentRef.current.children[newIndex]
        const newOffsetLeft = newEl.offsetLeft
        scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
        setPosIndex(newIndex)
        //是否继续显示右侧按钮
        setShowRight(totalDistanceRef.current > newOffsetLeft)
        setShowLeft(newOffsetLeft > 0)
    }


  return (
    <ViewWrapper>
        {showLeft && (<div className="control left" onClick={e => handleControlClick(false)}>
            <IconArrowLeft/>
        </div>)}
        {showRight && (<div className="control right" onClick={e => handleControlClick(true)}>
            <IconArrowRight/>
        </div>)}
        <div className="scroll">
            <div className="scroll-content" ref={scrollContentRef}>
                {props.children}
            </div>
        </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView