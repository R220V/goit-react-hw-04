import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css'

export default function SearchBar({onSearch} ){
	return(
<header className={css.header}>
<Formik
	initialValues={{topic:''}}
	onSearch={(values, actions) => {
	 if (values.topic.trim() === '') {
		toast.error("Please enter your request", {
			duration: 1750,
			position: 'top-center',
			className: `${css['custom-toast-error']} ${css['info']}`,
			});
			return
			}
			onSearch(values.topic)
			actions.resetForm()
		}}>
		  <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search photos"
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}