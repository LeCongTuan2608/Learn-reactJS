import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss'
AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList(props) {
    const {albumList} = props;
    return (
        <div>
            <ul className='album-list'>
                {albumList.map(item =>(
                    <li key={item.id}>
                        <Album album={item}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;