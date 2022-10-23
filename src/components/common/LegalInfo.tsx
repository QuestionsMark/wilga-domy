import { Section } from "./Section";

export const LegalInfo = () => {
    return (
        <Section>
            <p className="legal-info">
                Informacje zawarte na niniejszej stronie <span className="legal-info__span">nie stanowią</span> oferty handlowej w rozumieniu ustawy o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz w rozumieniu kodeksu cywilnego.
            </p>
            <p className="legal-info">
                Szczegółowych informacji na temat realizowanej inwestycji dowiedzieć się Państwo możecie w biurze obsługi klienta
            </p>
        </Section>
    );
};