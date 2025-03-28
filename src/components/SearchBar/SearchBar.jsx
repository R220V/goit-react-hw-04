import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css'


export default function SearchBar({ onSubmit }) {
  return (
	<header className={css.header}>
	  <Formik
		initialValues={{ topic: '' }}
		onSubmit={(values, actions) => {
		  if (values.topic.trim() === '') {
			toast.error('Please enter your request', {
			  className: `${css['error']} ${css['info']}`,
			});
			return;
		  }

		  onSubmit(values.topic);
		//   console.log(values.topic);
		  actions.resetForm();
		}}
	  >
		<Form className={css.form}>
		  <Field
			className={css.input}
			type="text"
			name="topic"
			autoComplete="off"
			autoFocus placeholder = "Search photos"
		  />
		  <button className={css.button} type="submit">
			Search
		  </button>
		</Form>
	  </Formik>
	</header>
  );
}
