import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({id, source, thumbnail, caption, url, description, position, toggleLightbox}) => {

    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

    return (<article key={id} className="12u 12u$(xsmall) work-item">
        <a
        className="image fit thumb"
        href={source}
        onClick={onClick}
        >
        <img src={thumbnail} />
        </a>

        <a
        href={url}>{caption}</a>
        <p>{description}</p>
    </article>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired
}

export default GalleryItem