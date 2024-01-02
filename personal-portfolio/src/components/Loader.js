import React from 'react';

export const Loader = () => {
  return (
      <div className="loading">
        
        {/* You can use any loading symbol or animation here */}
        <div class="pyramid-loader">
          <div class="wrapper">
              <span class="side side1"></span>
              <span class="side side2"></span>
              <span class="side side3"></span>
              <span class="side side4"></span>
              <span class="shadow"></span>
          </div>  
        </div>
        <h1>Loading...</h1>
      </div>
  );
};

export default Loader;