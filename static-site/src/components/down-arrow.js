import React from 'react';

const DownArrow = () => {
  return (
    <div
      className={'position-absolute d-flex w-100 down-scroll-container'}>
      <div
        className="m-auto text-white">
        <svg className="bi bi-chevron-compact-down down-scroll-arrow"
          width="2rem"
          height="2rem"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M1.553 6.776a.5.5 0 01.67-.223L8 9.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z"
              clipRule="evenodd"/>
        </svg>
      </div>
    </div>
  );
}

export default DownArrow;
