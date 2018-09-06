import React from 'react'
import spinner from '../../assets/spinner.svg';

const Spinner = () => {
   return (
      <React.Fragment>
         <img src={ spinner } alt="loading ..." style={{ margin: '40px auto', display:'block' }}/>
      </React.Fragment>
   )
}
export default Spinner;
