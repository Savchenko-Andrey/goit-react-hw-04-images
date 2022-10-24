import { toast } from 'react-toastify';

export const Message = (page, totalHits, hits, setShowBtn) => {
  if (page * 12 > totalHits) {
    setShowBtn(false);
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
};