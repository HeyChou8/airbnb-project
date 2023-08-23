import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList=[],itemWidth } = props
  return (
    <RoomWrapper>
        {
          roomList.slice(0,8)?.map(item => {
            return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id}></RoomItem>
          })
        }
    </RoomWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string
}

export default SectionRooms