import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import {Box, ImgGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ data, onOpenModal }) => {
  return (
    <Box>
      <ImgGalleryList>
        {data.map(item => {
          return (
            <ImageGalleryItem
              onOpenModal={onOpenModal}
              key={item.id}
              img={item.webformatURL}
              name={item.tags}
              largeImg={item.largeImageURL}
            />
          );
        })}
      </ImgGalleryList>
    </Box>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};