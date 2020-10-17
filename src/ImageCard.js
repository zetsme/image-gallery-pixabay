import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faHeart,
  faCloudDownloadAlt,
} from '@fortawesome/free-solid-svg-icons';

const ImageCard = ({
  tags,
  webformatURL,
  views,
  downloads,
  likes,
  user,
  type,
}) => {
  const imageTags = tags.split(',');
  return (
    <article className='image'>
      <div className='image__photo'>
        <img src={webformatURL} alt={`${type} by ${user}`} />
      </div>
      <div className='image__content'>
        <h3 className='image__title'>Photo by {user}</h3>
        <ul className='image__list'>
          <li className='image__listItem'>
            <FontAwesomeIcon icon={faEye} />
            <strong>Views :</strong>
            {views}
          </li>
          <li className='image__listItem'>
            <FontAwesomeIcon icon={faCloudDownloadAlt} />
            <strong>Downloads :</strong>
            {downloads}
          </li>
          <li className='image__listItem'>
            <FontAwesomeIcon icon={faHeart} />
            <strong>Likes :</strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className='image__tags'>
        {imageTags.map((tag, i) => {
          return (
            <span className='image__tag' key={i}>
              {tag}
            </span>
          );
        })}
      </div>
    </article>
  );
};

export default ImageCard;
