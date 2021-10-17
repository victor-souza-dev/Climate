import { useEffect } from 'react';

import '../styles/sidebar.scss';
import imageSidebar from '../assets/Shower.png';
import place from '../assets/place.png';
import { City } from '../components/City';

export function Sidebar(data) {

    return (
        <aside className="sidebar">
            <div className="container-sidebar">
                <nav className="navbar-sidebar">
                    <button>Seach for places</button>
                    <button>
                        <img />
                    </button>
                </nav>
                <figure className="image-sidebar">
                    <img src={imageSidebar} />
                </figure>
                <section className="date-sidebar">
                    <h1>15<span>ºC</span></h1>
                    <h2>Shower</h2>
                    <section className="date-texts">
                        <div className="date-subtexts">
                            <p>Today</p>
                            <p>•</p>
                            <p>Fri, 5 Jun</p>
                        </div>
                        <div className="date-city">
                            <img src={place} />
                            <City value={data}></City>
                        </div>
                    </section>
                </section>
            </div>
        </aside>
    );
}