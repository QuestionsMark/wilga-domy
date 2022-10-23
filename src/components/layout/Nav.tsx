import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/" end className="nav__link">Inwestycja</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/about-us" className="nav__link">O nas</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/concept" className="nav__link">Koncepcja</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/visualisation" className="nav__link">Wizualizacja</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/sales-office" className="nav__link">Biuro Sprzedaży</NavLink>
                </li>
            </ul>
        </nav>
    );
};