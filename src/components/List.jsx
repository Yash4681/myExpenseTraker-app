import React from 'react'
import ListItem from './ListItem'
import TotalExpence from './TotalExpence'

const List = () => {
  return (
    <div className='container flex py-2 flex-col justify-between w-1/2 h-[80vh] rounded-2xl bg-slate-200 my-5 mx-auto'>
        <div>
        <h2 className='flex justify-center py-4 font-bold'>All your entries</h2>
      <ListItem />
      </div>
      <TotalExpence />
    </div>
  )
}

export default List
