import Modal from 'react-modal';
import { IoClose } from "react-icons/io5";
import css from './ImageModal.modal.css'

// const modalStyles = {
// 	content: {
// 	  top: "50%",
// 	  left: "50%",
// 	  right: "auto",
// 	  bottom: "auto",
// 	  // marginRight: "-50%",
// 	  transform: "translate(-50%, -50%)",
// 	  padding: 0,
// 	  backgroundColor: "black",
// 	},
//   };
// Modal.setAppElement('#root');

// export default function ImageModal({ isOpen, onClose, imageUrl, alt }) {
// 	return (
// 	  <Modal className={css.modalwin}
// 		isOpen={isOpen}
// 		onRequestClose={onClose} // Закрытие по ESC и клику вне окна
// 		style={modalStyles}
// 		overlayClassName={css.overlay}
// 	  >
// 		<div className={css.content}>
// 		  <img src={imageUrl} alt={alt} className={css.image} />
// 		  <button className={css.closeButton} onClick={onClose}>
// 		  <IoClose size={30} className={style.icon} />
// 		  </button>
// 		</div>
// 	  </Modal>
// 	);
//   }

const modalStyles = {
	content: {
	  top: "50%",
	  left: "50%",
	  right: "auto",
	  bottom: "auto",
	  // marginRight: "-50%",
	  transform: "translate(-50%, -50%)",
	  padding: 0,
	  backgroundColor: "black",
	},
  };
  Modal.setAppElement("#root");
  function ImageModal({ image, modalIsOpen, closeModal }) {
	return (
	  <div className={css.wrapper}>
		{image && (
		  <Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={modalStyles}
			contentLabel="Example Modal"
		  >
			<button className={style.btn} onClick={closeModal}>
			  <IoClose size={30} className={style.icon} />
			</button>
			<div className={style.wrapper}>
			  <img
				className={style.img}
				src={image.urls.regular}
				alt={image.alt_description}
			  />
			  <div>
				<p>Likes : {image.likes}</p>
				{image.description && (
				  <p className={style.desc}>{image.description.toUpperCase()}</p>
				)}
				<p className={style.desc}>
				  {image.alt_description.toUpperCase()}
				</p>
			  </div>
			</div>
		  </Modal>
		)}
	  </div>
	);
  }
  
  export default ImageModal;