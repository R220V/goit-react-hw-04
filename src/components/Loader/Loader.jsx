import { PuffLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader({ loading }) {
  return (
	<div className={css.loader}>
	  <PuffLoader
        color="#007dff"
        loading={loading}
        size={120}
		speedMultiplier={3}
      />
	</div>
  );
}