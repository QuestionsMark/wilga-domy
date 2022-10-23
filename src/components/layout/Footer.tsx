import { Link } from 'react-router-dom';

import { HiPhone } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';

import { EMAIL, PHONE_NUMBER } from "../../utils/data.util";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__section footer__section--flex">
                <div className="footer__section-flex">
                    <h2 className="footer__title">Kontakt</h2>
                    <p className="footer__text">
                        <HiPhone className="footer__icon" />
                        <a href={`tel:${PHONE_NUMBER}`} className="link footer__link">{PHONE_NUMBER}</a>
                    </p>
                    <p className="footer__text">
                        <IoMdMail className="footer__icon" />
                        <a href={`mailto:${EMAIL}`} className="link footer__link">{EMAIL}</a>
                    </p>
                    
                </div>
                <div className="footer__section-flex">
                    <h2 className="footer__title">Linki</h2>
                    <div className="footer__links">
                        <Link to="/" className="link footer__text">inwestycja</Link>
                        <Link to="/about-us" className="link footer__text">o nas</Link>
                        <Link to="/concept" className="link footer__text">koncepcja</Link>
                        <Link to="/visualisation" className="link footer__text">wizualizacja</Link>
                        <Link to="/sales-office" className="link footer__text">biuro sprzedaży</Link>
                    </div>
                </div>
            </div>
            <div className="footer__section">
                <p className="footer__text footer__copyright">Prawa autorskie &copy; 2022. Wszelkie prawa zastrzeżone</p>
            </div>
        </footer>
    );
};