import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Con nhà ai',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/e/1/8/4e18565f935b83e9eb7a47380ae6de69.jpg'
        },
        {
            id: 2,
            name: 'Đêm trao kỷ niệm',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/1/2/1/01215e64ffab2250a95e19a2dd412e56.jpg'
        },
        {
            id: 3,
            name: 'Bất quá nhân gian',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/6/3/f/e63f88f90de81fe9cd5eb8b4e6dd275f.jpg'
        },
    ]
    return (
        <div>
            <h2>Nhac</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;