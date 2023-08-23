import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabWrapper } from './style'

const SectionTabs = memo((props) => {
  const { tabNames = [], onTabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  
  function handleItemClick(index,item){
    setCurrentIndex(index)
    onTabClick(index,item)
  }
  return (
    <TabWrapper>
       <ScrollView>
        {
          tabNames.map((item,index) => {
            return <div 
            key={index} 
            className={classNames("item",{active: index === currentIndex})}
            onClick={e => handleItemClick(index,item)}
            >
              {item}
            </div>
          })
        }
       </ScrollView>
    </TabWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs