/* ADVERTISEMENT */
#js-ad {
    position: relative;
    border: 2px solid lightgray;
  }
  
  #js-ad-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    background-color: darkgrey;
    font-size: 1.3rem;
    line-height: 1;
  }
  
  #js-ad-close:before, #js-ad-close:after {
    position: absolute;
    left: 7px;
    content: ' ';
    height: 16px;
    width: 2px;
    background-color: white;
  }
  #js-ad-close:before {
    transform: rotate(45deg);
  }
  #js-ad-close:after {
    transform: rotate(-45deg);
  }
  
  /* COOKIES */
  .cookies {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    padding: .5rem 0;
    background-color: rgba(0,0,0,.7);
  }