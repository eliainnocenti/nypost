import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import BackgroundSlider from './components/extra/BackgroundSlider';
import Header from './components/header/Header';
import MainContent from './components/maincontent/MainContent';
import Footer from './components/footer/Footer';

// styles
import './style/style.scss';

const App: React.FC = () => {
    return (
        // FIXME: check and change all the ids and classeNames
        <React.Fragment>
            <BackgroundSlider /> {/* TODO: check if it's necessary */}
            <div id={"page"} className={"site"}> {/* TODO: check */}
                <React.Fragment>
                    <Header />
                    {/* <div className="ie-notice" style="display:none" aria-hidden="true"></div> */ /* TODO: check if it's necessary */}
                    <MainContent />
                    <Footer />
                </React.Fragment>
            </div>
            {/* TODO: check if something else is necessary */}
        </React.Fragment>
    );
};

// ! not null assertion operator
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<App />);