import React from 'react'
import classes from './Pagination.module.css'

const Pagination = ({ changeOffset, page, pageCount }) => {
    return (
        <div className={classes.pagination}>
            <button className={classes.prev} onClick={() => changeOffset('prev')}>
                Prev
            </button>
            {page}
            /
            {pageCount}
            <button className={classes.next} onClick={() => changeOffset('next')}>
                Next
            </button>

        </div>
    )
}

export default Pagination