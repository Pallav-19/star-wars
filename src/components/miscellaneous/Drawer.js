import React from 'react';
import '../../styles/Drawer.css';

const Drawer = ({ isOpen, onClose, children }) => {
    const drawerClass = isOpen ? 'drawer open' : 'drawer';

    return (
        <div className={drawerClass}>
            <div className="drawer-content">
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
                {children}
            </div>
        </div>
    );
};

export default Drawer;
