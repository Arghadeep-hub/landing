import React from 'react';

function Popup({ activePopup, handelPopup, popupfadingclass, name, description, link }) {

    return (
        <div className="container">
            <div className={`center popup ${popupfadingclass} ${activePopup}`}>
                <div className="cancel-icon" onClick={handelPopup}>
                    <i class="fas fa-times"></i>
                </div>
                <div className="name">
                    <h1>{name}</h1>
                </div>
                <div className="title">
                    <p>{description}</p>
                </div>
                <button href={link} class="btn btn-success py-2">Preview</button>
            </div>
        </div>
    )
}
export default Popup;