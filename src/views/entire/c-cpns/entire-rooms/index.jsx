import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  //从redux中获取roomList数据
  const { roomList, totalCount,isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount:state.entire.totalCount,
    isLoading:state.entire.isLoading
  }),shallowEqual)
  //传递itemClick给RoomItem
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleItemClick = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    window.localStorage.setItem("detailInfo",JSON.stringify(item))
    navigate('/detail')
  })
   return (
    <RoomsWrapper>
        <h2 className='title'>共{totalCount}多处住所</h2>
        {roomList && <div className="list">
          {
            roomList.map(item => {
              return (
                <RoomItem itemData={item} key={item._id} itemWidth='20%'
                itemClick={handleItemClick}></RoomItem>
              )
            })
          }
        </div>}
        {isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms