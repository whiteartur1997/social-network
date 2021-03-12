import CSS from 'csstype';
import React from 'react';
import Spinner from '../../../assets/img/Spinner.svg';

const Preloader: React.FC = () => {

  const styles: CSS.Properties = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translateX(-50%)"
  }

  return (
    <div style={styles}>
      <img alt="spinner" src={Spinner} />
    </div>
  )
}

export default Preloader;