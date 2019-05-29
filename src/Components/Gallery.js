import React from 'react';
import PropTypes from 'prop-types';
import JsonData from '../data.json'
import './indexPage.css'


class Gallery extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    LoginSwitch: true,
    redirect: false
  };



  render() {

    return (



     /* <div >

       
        {JsonData.map((postDetail, index) => {
          return <div>
            <br></br>
             <div className="w3-container">
          <h2 style={{color:'white' , fontFamily:"'Permanent Marker', cursive" }}>{postDetail.title}</h2>
          <br></br>

          <div className="w3-card-4" style={{ width: '95%' }}>
            <img src={postDetail.image} alt="Alps" className='card' />
            <br></br>
              <em   >{postDetail.content}</em>
              <br></br>
            <div className="w3-container w3-center">
             
            </div>
          </div>
        </div>

          </div>
        })}
<br></br>
      </div>*/
      <div>

      {JsonData.map((postDetail , index) => {
        return (
          <div>
            <br></br>
          <br></br>

          <br></br>
        <div className='card'>

        <h1 className='title'>{postDetail.title}</h1>

            <img src={postDetail.image} alt="Alps"  />
            <div className='container'>
              
            <p className='imgContent'> {postDetail.content}</p>

            </div>

        </div>
        </div>
        )

      })}
      </div>
    );
  }
}



export default Gallery;
