import { LegalInfo } from "../../components/common/LegalInfo";
import { Paragraph } from "../../components/common/Paragraph";
import { Section } from "../../components/common/Section";
import { Title } from "../../components/common/Title";

export const AboutUs = () => {
    return (
        <main className="main about-us">
            <Section>
                <Title>O nas</Title>
            </Section>
            <Section>
                <Paragraph end>
                    Deweloperska Firma Budowlana „WILGA” w Krakowie S.C. to prężnie rozwijające się wielobranżowe przedsiębiorstwo, w którym pasją właścicieli jest urbanistyczny rozwój okolic Kostrza i Koła Tynieckiego wzdłuż ulicy Tynieckiej z zamiarem poszerzania atrakcji rekreacyjnych nadwiślańskiego starorzecza.
                </Paragraph>
                <Paragraph>
                    Osiedle SEGMENTY TYNIECKA to czwarty już etap mieszkaniowych zamierzeń budowlanych firmy, która łącząc rzetelną jakość wykończenia z urokliwym wyglądem budynków osiedla pragnie aby domy, w których Państwo zamieszkają spełniały indywidualne i oczekiwane marzenia Rodziny.
                </Paragraph>
            </Section>
            <LegalInfo />
        </main>
    );
};