import PropTypes from 'prop-types';
import React from 'react';

Pagination.propTypes = {
   pagination: PropTypes.object.isRequired,
   onPageChane: PropTypes.func,
};
Pagination.defaultProps = {
   onPageChane: null,
};

function Pagination(props) {
   const { pagination, onPageChane } = props;
   const { page, limit, totalRows } = pagination;
   const totalPages = Math.ceil(totalRows / limit);
   const handlePageChane = (newPage) => {
      if (onPageChane) {
         onPageChane(newPage);
      }
   };

   return (
      <div>
         <button disabled={page <= 1} onClick={() => handlePageChane(page - 1)}>
            Pre
         </button>
         <h1>helloooooooo</h1>
         <button disabled={page >= totalPages} onClick={() => handlePageChane(page + 1)}>
            Next
         </button>
      </div>
   );
}

export default Pagination;
