import { fetchRoomListAction } from '@/store/modules/entire/createAction'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  const dispatch = useDispatch()
  //发送网络请求
  useEffect(()=> {
    dispatch(fetchRoomListAction())
  },[dispatch])
  return (
    <EntireWrapper>
        <EntireFilter></EntireFilter>
        <EntireRooms></EntireRooms>
        <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

export default Entire