import React from 'react';
import beach from '../images/beach.jpg';
import waldo from '../images/waldo.png';
import odlaw from '../images/odlaw.png';
import wizard from '../images/wizard.png';

function Photo() {
    
    function placeMarker(e) {
        //need native event, because react event doesnt support offsetX/Y
        let event = e.nativeEvent;
        let marker = document.getElementById('marker');

        marker.style.left = event.offsetX - 10 + 'px';
        marker.style.top = event.offsetY -10 + 'px';
        marker.style.display = 'block';

        console.log([event.offsetX, event.offsetY]);
        return [event.offsetX, event.offsetY];
    }

    return(
        <div className='img-container'>
            <img onClick={(e) => placeMarker(e)} src={beach} alt='waldo beach'/>
            <div id='marker' className='marker'>
                <div className='dot'></div>
                <div className="dropdown-content">
                    <div><img className="option" src={waldo} />Waldo</div>
                    <div><img className="option" src={odlaw} />Odlaw</div>
                    <div><img className="option" src={wizard} />Wizard</div>
                </div>
            </div>
        </div>
    );
}

export default Photo;