import React from 'react'
import Modal from './Modal';
import SearchList from './SearchList';

interface IProps {
  open: boolean;
  closeSearchHandler: () => void;
}
const Search = (props: IProps) => {
  const { closeSearchHandler, open } = props;
  return (

    <Modal open={open}  >
      <div className='h-screen flex flex-col bg-white fixed top-0 right-0 bottom-0  md:w-7/12 lg:w-4/12 z-50 p-4 overflow-auto'>
        <SearchList closeSearchHandler={closeSearchHandler} />
      </div>
    </Modal>
  )
}

export default Search