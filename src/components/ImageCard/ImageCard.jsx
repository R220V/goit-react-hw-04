import css from './ImageCard.module.css';

export default function ImageCard({
  data: {
    urls: { small, regular },
    slug,
    likes,
    user,
    description,
  },
  onImageClick,
}) {
  return (
    <>
      <div className={css.container}>
        <img
          className={css.img}
          src={small}
          alt={slug}
          width={'400'}
          height={'340px'}
          onClick={() => onImageClick(regular)}
        />
        <div className={css.info}>
          <h2 className={css.title}>
            {description || 'No description'}
          </h2>
          <div className={css.wrapper}>
            <p className={css.text}>Photo by: {user?.name || 'Unknown'}</p>
            <p className={css.text}>Likes: {likes}</p>
          </div>
        </div>
      </div>
    </>
  );
}