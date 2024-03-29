import React, { memo } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconMenu from '@/assets/svg/icon_menu'
import { useState } from 'react'
import { useEffect } from 'react'
const HeaderRight = memo(() => {
    // 定义内部状态
    const [ showPanel, setShowPanel ] = useState(false)
    useEffect(() => {
        function handleWindowClick(){
            setShowPanel(false)
        }
        window.addEventListener('click',handleWindowClick,true)
        return () => {window.removeEventListener('click',handleWindowClick,true)}
    },[])
    //事件处理函数
    function handleProfileClick(){
        setShowPanel(true)
    }
  return (
    <RightWrapper>
        <div className="btns">
            <span className='btn'>登录</span>
            <span className='btn'>注册</span>
            <span className='btn'>
                <IconGlobal/>
            </span>
        </div>
         <div className="profile" onClick={handleProfileClick}>
            <IconMenu/>
            <IconAvatar/>
            {showPanel && (<div className="panel">
                <div className="top">
                    <div className="item register">注册</div>
                    <div className="item login">登录</div>
                </div>
                <div className="bottom">
                    <div className="item">出租房源</div>
                    <div className="item">开展体验</div>
                    <div className="item">帮助</div>
                </div>
            </div>)}
        </div>
    </RightWrapper>
  )
})

export default HeaderRight