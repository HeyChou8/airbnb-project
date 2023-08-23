import React, { memo } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'
import { useState } from 'react'

const EntireFilter = memo(() => {
  const [selectItems,setSelectItems] = useState([])
  function handleItemClick(item){
    const newItems = [...selectItems]
    if(newItems.includes(item)){
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(itemIndex,1)
    }else {
      newItems.push(item)
    }
    setSelectItems(newItems)
  }
  
  return (
    <FilterWrapper>
        <div className="filter">
          {
            filterData.map((item,index) => {
              return (
                <div className={classNames("item",{active: selectItems.includes(item)})} key={item}
                  onClick={e => handleItemClick(item)}
                >{item}</div>
              )
            })
          }
        </div>
    </FilterWrapper>
  )
})

export default EntireFilter