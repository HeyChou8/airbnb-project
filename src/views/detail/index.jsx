import React, { memo,  } from 'react'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'


const Detail = memo(() => {
  return (
    <DetailWrapper>
        <DetailPictures></DetailPictures>
    </DetailWrapper>
  )
})

export default Detail