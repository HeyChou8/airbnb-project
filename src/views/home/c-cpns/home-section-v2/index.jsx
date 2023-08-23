import SectionHeader from '@/components/section-header'
import React, { memo, useCallback } from 'react'
import { SectionV2Wrapper } from './style'
import PropTypes from 'prop-types'
import SectionFooter from '@/components/section-footer'
import { useState } from 'react'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  // 定义内部的state
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name,setName] =useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)
  // 事件处理函数
  const handleTabClick = useCallback(function(index,name){
    setName(name)
  },[name])
  return (
    <SectionV2Wrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
        <SectionTabs tabNames = {tabNames} onTabClick = {handleTabClick}></SectionTabs>
        <SectionRooms  roomList={infoData.dest_list[name]} itemWidth='33.3333%'></SectionRooms>
        <SectionFooter name={name}></SectionFooter>
    </SectionV2Wrapper>
  )
})
HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}
export default HomeSectionV2