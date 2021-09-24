import Clear from '../assets/Clear.png';
import Hail from '../assets/Hail.png';
import Arrow from '../assets/navigation.svg';

import heavyCloud from '../assets/HeavyCloud.png';

import '../styles/dashboard.scss';

export function Dashboard() {
    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <div>
                    <button>ºC</button>
                    <button>ºF</button>
                </div>
            </nav>
            <header className="header">
                <div className="daysContainer">
                    <section className="days">
                        <p>Tomorrow</p>
                        <img src={heavyCloud} />
                        <div>
                            <p>16ºC</p>
                            <p>11ºC</p>
                        </div>
                    </section>

                    <section className="days">

                    </section>

                    <section className="days">

                    </section>
                
                    <section className="days">

                    </section>

                    <section className="days">

                    </section>
                </div>
            </header>
            <div className="titleData">
                <h2>Today's Hightlights</h2>
            </div>
            <main className="main">
                <div className="data">
                    <section className="dataWheater">
                        <p>Wind status</p>
                        <h3>7<span>mph</span></h3>
                        <div>
                            <figure className="windSvg">
                                <img src={Arrow} />
                            </figure>
                            <p>WSW</p>
                        </div>
                    </section>

                    <section className="dataWheater">
                        <p>Humidity</p>
                        <h3>84
                            <span>%</span>
                        </h3>
                    </section>

                    <section className="dataWheater">
                        <p>Visibility</p>
                        <h3>6,4
                            <span>miles</span>
                        </h3>
                    </section>

                    <section className="dataWheater">
                        <p>Air Pressure</p>
                        <h3>998
                            <span>mb</span>
                        </h3>
                    </section>
                </div>
            </main>
            <footer className="footer">
            <p>created by <b><u>Victor Souza</u></b> - devChallenges.io</p>
        </footer>
        </div>
    );
}