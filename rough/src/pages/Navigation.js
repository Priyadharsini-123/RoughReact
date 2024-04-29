import React, { useEffect, useState } from 'react';

const Navigation = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const listItems = document.querySelectorAll('.list');
        const handleItemClick = (index) => {
            setActiveIndex(index);
        };

        listItems.forEach((item, index) => {
            item.addEventListener('click', () => handleItemClick(index));
        });

        return () => {
            listItems.forEach((item) => {
                item.removeEventListener('click', () => handleItemClick());
            });
        };
    }, []);

    return (
        <div className="navigation">
            <ul>
                <li className={`list ${activeIndex === 0 ? 'active' : ''}`}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span className="text">Home</span>
                        <span className="circle"></span>
                    </a>
                </li>
                <li className={`list ${activeIndex === 1 ? 'active' : ''}`}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <span className="text">Profile</span>
                        <span className="circle"></span>
                    </a>
                </li>
                <li className={`list ${activeIndex === 2 ? 'active' : ''}`}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span className="text">Message</span>
                        <span className="circle"></span>
                    </a>
                </li>
                <li className={`list ${activeIndex === 3 ? 'active' : ''}`}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="camera-outline"></ion-icon>
                        </span>
                        <span className="text">Photos</span>
                        <span className="circle"></span>
                    </a>
                </li>
                <li className={`list ${activeIndex === 4 ? 'active' : ''}`}>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span className="text">Settings</span>
                        <span className="circle"></span>
                    </a>
                </li>
                <div className="indicator"></div>
            </ul>
        </div>
    );
};

export default Navigation;
