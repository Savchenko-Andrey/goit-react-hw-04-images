import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { Serchbar, InputForm, HeaderForm } from './Searchbar.styled';
import { SerchButton } from 'components/Button/Button';

export const FormSerch = ({ onSubmit }) => {
  const schema = yup.object().shape({
    serchQuery: yup.string(),
  });
  const initialValue = {
    serchQuery: '',
  };

  const handleSubmiit = ({ serchQuery }, { resetForm }) => {
    if (serchQuery.trim() === '') {
      return toast.error('Required field', {
        theme: 'dark',
      });
    }
    onSubmit(serchQuery.trim());
    resetForm();
  };

  return (
    <HeaderForm>
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={handleSubmiit}
      >
        <Serchbar>
          <InputForm type="text" name="serchQuery" />
          <SerchButton />
        </Serchbar>
      </Formik>
    </HeaderForm>
  );
};

FormSerch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};