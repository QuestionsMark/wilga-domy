import { LegalInfo } from "../../components/common/LegalInfo";
import { Map } from "../../components/common/Map";
import { Paragraph } from "../../components/common/Paragraph";
import { Section } from "../../components/common/Section";
import { Title } from "../../components/common/Title";

export const SalesOffice = () => {
    return (
        <main className="main sales-office">
            <Section>
                <Title>Biuro Sprzedaży</Title>
            </Section>
            <Section>
                <Paragraph indent={false} end>
                    Szczegółowych informacji na temat realizowanej inwestycji dowiedzieć się Państwo możecie w biurze obsługi klienta.
                </Paragraph>
                <Paragraph indent={false}>
                    Ogłoszenie handlowe inwestycji mozna znaleźć <a href="https://domy.pl/mieszkanie/krakow-podgorze-4-pokoje-560000-pln-80m2-sfb/dol1728349968" rel="noreferrer" target="_blank" className="investment__link">tutaj</a>.
                </Paragraph>
            </Section>
            <Section title="Mapa Dojazdu do Naszego Biura Sprzedaży">
                <Map />
                <Paragraph indent={false}>
                    <a href="https://www.google.com/maps/place/Biuro+Rachunkowo-Ubezpieczeniowe+Andrzej+Dziurman+Ksi%C4%99gowo%C5%9B%C4%87+Krak%C3%B3w+Szkolenia+BHP/@50.0324939,19.9192947,17z/data=!3m1!4b1!4m5!3m4!1s0x47165c9e0a4119dd:0x93122329dfff56ef!8m2!3d50.0324905!4d19.9214834?hl=pl-PL" target="_blank" rel="noreferrer" className="investment__link">Wyświetl większą mapę</a>
                </Paragraph>
            </Section>
            <LegalInfo />
        </main>
    );
};