import { LegalInfo } from "../../components/common/LegalInfo";
import { Paragraph } from "../../components/common/Paragraph";
import { Section } from "../../components/common/Section";
import { Title } from "../../components/common/Title";
import { LIST_1, LIST_2, LIST_3, LIST_4 } from "../../utils/data.util";

export const Concept = () => {
    return (
        <main className="main concept">
            <Section>
                <Title>Koncepcja</Title>
            </Section>
            <Section>
                <Paragraph>
                    Segmenty Tyniecka to nowe kameralne osiedle segmentów w zabudowie domów bliźniaczych umieszczonych na osobnych wydzielonych działkach, wybudowane w technologii tradycyjnej. Segmenty o powierzchniach ok. 80 m2 i 130 m2 z przydzielonymi działkami ok. 2,5 i 5 arów powierzchni z infrastrukturą zewnętrzną domu zbudowane w funkcjonalnej architekturze pozwala zachować wysoki standard wykonania.
                </Paragraph>
                <Paragraph>
                    Segmenty realizują potrzeby posiadania, wygodnego mieszkania z zaletami mieszkania w domu poprzez wygodne miejsca na postój z posiadaniem własnego fragmentu ogródka. Tereny zielone i rekreacyjne w okolicy kompleksu, bliski dojazd do centrum Krakowa i ośrodków handlowych i kulturalnych stanowi o wygodzie życia mieszkańców.
                </Paragraph>
            </Section>
            <Section title="Charakterystyka Osady:">
                {LIST_1}
            </Section>
            <Section>
                <Paragraph indent={false}>
                    Szeroka elastyczność projektów domów w naszej ofercie pozwala na modyfikacje dostosowania się do wymagań każdego klienta.
                </Paragraph>
            </Section>
            <Section title="Charakterystyka Domów i Lokali:">
                {LIST_2}
            </Section>
            <Section title="Opis Elementów Konstrukcyjnych">
                {LIST_3}
            </Section>
            <Section title="Standard Wykończenia w Stanie Deweloperskim">
                {LIST_4}
            </Section>
            <LegalInfo />
        </main>
    );
};