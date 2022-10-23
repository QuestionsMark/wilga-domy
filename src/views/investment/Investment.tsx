import { Link } from 'react-router-dom';

import { Section } from "../../components/common/Section";
import { SectionItem } from "../../components/common/SectionItem";
import { Title } from "../../components/common/Title";

import { AiFillSetting } from 'react-icons/ai';
import { BiTimer } from 'react-icons/bi';
import { IoMdPin } from 'react-icons/io';
import { Paragraph } from "../../components/common/Paragraph";
import { LegalInfo } from "../../components/common/LegalInfo";

export const Investment = () => {
    return (
        <main className="main investment">
            <Section>
                <Title>Inwestycja</Title>
            </Section>
            <Section className="investment__list" flex center>
                <SectionItem
                    value="ul. Tyniecka, Kolna  Kraków"
                    className="investment__item"
                    title="Lokalizacja Inwestycji"
                    icon={<IoMdPin className="section__item-icon"/>}
                />
                <SectionItem
                    value="domy, segmenty"
                    className="investment__item"
                    title="Rodzaj Inwestycji"
                    icon={<AiFillSetting className="section__item-icon"/>}
                />
                <SectionItem
                    value="III / IV kwartał 2021 roku"
                    className="investment__item"
                    title="Termin Oddania"
                    icon={<BiTimer className="section__item-icon"/>}
                />
            </Section>
            <Section>
                <Paragraph indent={false} end>
                    SEGMENTY TYNIECKA - jest miejscem połączenia życia w mieście z bliskością natury, by czuli się Państwo beztrosko, komfortowo i szczęśliwie.
                </Paragraph>
                <Paragraph end>
                    Nasza inwestycja znajduje się przy ul. Tynieckiej, nieopodal sportowo-rekreacyjnego kompleksu basenowo-kajakowego KOLNA na skraju królewskiego miasta Krakowa z rozłożystym widokiem na zabytkowy Klasztor Kamedułów na Bielanach i las Wolski. To cichy pełen możliwości rekreacyjnych i wypoczynkowych atrakcji azyl z dala od zgiełku zatłoczonego miasta i miejsce wprost idealne dla spokojnego rodzinnego życia. Tyniecki kompleks segmentów to nie tylko piękne widoki, ale także możliwości. Bogata oferta rekreacyjna i kulturalna okolicy, która z pewnością nie pozwoli mieszkańcom się nudzić podczas spędzania wolnego czasu.
                </Paragraph>
                <Paragraph>
                    Osiedle położone jest na płaskim terenie pogranicza Kostrza i Koła Tynieckiego, wkomponowane w krajobraz bogactwa łąk i otaczających brzozowych zagajników. Kierunkiem drogowym okolicy jest węzeł tyniecki i sam Tyniec ze swym zabytkowym kompleksem klasztornym Benedyktynów. Wystarczająco odległy tyniecki węzeł autostradowy jest znakomitym punktem wyjazdowym aż w trzech kierunkach z Krakowa.
                </Paragraph>
                <Paragraph end>
                    Nieopodal osiedla w kierunku Podgórek Tynieckich umiejscowione jest Leśne Uroczysko Skotnickie stanowiące znakomite miejsce spacerowych przechadzek w leśnej ciszy i spokoju pośród czystego i świeżego powietrza. Segmenty Tyniecka spełnia wymagania miłośników rowerowych wycieczek ale także jest miejscem, w którym można spokojnie odpocząć po codziennych trudach pracy w hałaśliwym mieście, sprawiając sobie niezwykłą intymną radość pośród zieleni i natury.
                </Paragraph>
                <Paragraph indent={false}>
                    Więcej dokładnych informacji o inwestycji w zakładce <Link to="/concept" className="investment__link">Koncepcja</Link> i <Link to="/visualisation" className="investment__link">Wizualizacje</Link>.
                </Paragraph>
            </Section>
            <LegalInfo />
        </main>
    );
};