import React from 'react'

interface IProp {
  name: string;
  onClick: ()=> void;
}
const NavItem = (props: IProp) => {
  return (
    <div onClick={props.onClick} className='group tracking-widest hover:cursor-pointer p-1 relative '>
      {props.name}
      <div className='h-1 w-0   border-b-2 group-hover:w-full group-hover:border-b-black transition-all delay-300'></div>
    </div>
  )
}

export default NavItem