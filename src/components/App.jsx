import React, { Component } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animateScroll as scroll } from 'react-scroll';
import { Box } from '../App.styled';
import { Api } from './Api/Api';
import { FormSerch } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { LoadMoreBtn } from './Button/Button';

export class App extends Component {
  state = {
    showBtn: false,
    showModal: false,
    showSpiner: false,
    serchQuery: '',
    page: 1,
    data: [],
    largePage: '',
  };

 async componentDidUpdate(_, prevState) {
    const { serchQuery, page } = this.state;

    if (prevState.page !== page || prevState.serchQuery !== serchQuery) {
      this.setState({ showSpiner: !this.state.showSpiner });

      await Api(serchQuery, page)
        .then(({ hits, totalHits }) => {
          this.setState(prevState => ({ data: prevState.data.concat(hits) }));
          this.setState({ showBtn: true });

          if (this.state.page * 12 > +totalHits) {
            this.setState({ showBtn: false });
          }

          if (totalHits === 0) {
            return toast.error(
              'Sorry, there are no images matching your search query. Please try again.',
              {
                theme: 'dark',
              }
            );
          }

          if (totalHits < 12 && hits.length === 0) {
            return toast.warn(
              'Were sorry, but youve reached the end of search results.',
              {
                theme: 'dark',
              }
            );
          }
        })
        .catch(error => {
          return console.log(error);
        });

      this.setState({ showSpiner: !this.state.showSpiner });
    }
  };

  handeClick = e => {
    e.preventDefault();
    this.setState({
      largePage: e.currentTarget.name,
      showModal: !this.state.showModal,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSubmit = inputQuery => {
    this.setState({
      serchQuery: inputQuery,
      page: 1,
      data: [],
    });
  };

  handleClickLoadMoreBtn = e => {
    this.setState({ page: this.state.page + 1 });
    scroll.scrollMore(1150, {
      smooth: true,
    });
  };

  render() {
    const { data, largePage, showModal, showSpiner, showBtn } = this.state;

    return (
      <Box>
        <FormSerch onSubmit={this.handleSubmit} />
        <ImageGallery onOpenModal={this.handeClick} data={data} />
        {showBtn && <LoadMoreBtn onClick={this.handleClickLoadMoreBtn} />}
        {showModal && <Modal onClick={this.toggleModal}>{largePage}</Modal>}
        {showSpiner && <ClipLoader color="#00BFFF" size={100} />}
        <ToastContainer autoClose={3000} />
      </Box>
    );
  }
}