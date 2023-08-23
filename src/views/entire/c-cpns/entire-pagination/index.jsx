import { fetchRoomListAction } from '@/store/modules/entire/createAction'
import Pagination from '@mui/material/Pagination'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PaginationWrapper } from './style'

const EntirePagination = memo(() => {
  const { totalCount, currentPage } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage
  }),shallowEqual)
  const dispatch = useDispatch()
  const count = Math.floor(totalCount/20)
  const start = currentPage*20 + 1
  const end = (currentPage+1) * 20
  const handlePageChange = (e,newPage) => {
    window.scrollTo(0,0)
    dispatch(fetchRoomListAction(newPage - 1))
  }
  return (
    <PaginationWrapper>
        <Pagination count={count} color="primary" onChange={handlePageChange}></Pagination>
        <div className="info">
          第{start}-{end}个房源,共超过{totalCount}个
        </div>
    </PaginationWrapper>
  )
})

export default EntirePagination