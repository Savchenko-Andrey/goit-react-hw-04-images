import React, { useState, useEffect, useLayoutEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '../App.styled';
import { animateScroll as scroll } from 'react-scroll';

import { Api } from './Api/Api';
import { FormSerch } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { LoadMoreBtn } from './Button/Button';
import { Message } from './Message/Message';

export const App = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSpiner, setShowSpiner] = useState(false);
  const [serchQuery, setSerchQuery] = useState('');
  const [largePage, setLargePage] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (serchQuery === '') return;
    setShowSpiner(true);

    Api(serchQuery, page)
      .then(({ data: { hits, totalHits } }) => {
        setData(prevState => prevState.concat(hits));
        setShowBtn(true);
        Message(page, totalHits, hits, setShowBtn);
      })
      .catch(erore => {
        console.log(erore.message);
      })
      .finally(() => {
        setShowSpiner(false);
      });
    return () => {};
  }, [page, serchQuery]);


  useLayoutEffect(() => {
    scroll.scrollMore(1150, {
      smooth: true,
    });
  }, [page, serchQuery]);


const handeClick = e => {
    e.preventDefault();
    setLargePage(e.currentTarget.name);
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = inputQuery => {
    setSerchQuery(inputQuery);
    setPage(1);
    setData([]);
  };

  const handleClickLoadMoreBtn = e => {
    setPage(prevs => prevs + 1);
  };

    return (
      <Box>
        <FormSerch onSubmit={handleSubmit} />
        <ImageGallery onOpenModal={handeClick} data={data} />
        {showBtn && <LoadMoreBtn onClick={handleClickLoadMoreBtn} />}
        {showModal && <Modal onClick={toggleModal}>{largePage}</Modal>}
        {showSpiner && <ClipLoader color="#00BFFF" size={100} />}
        <ToastContainer autoClose={3000} />
      </Box>
    );
  
}