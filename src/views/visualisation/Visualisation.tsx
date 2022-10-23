import { LegalInfo } from "../../components/common/LegalInfo";
import { Section } from "../../components/common/Section";
import { Title } from "../../components/common/Title";

export const Visualisation = () => {
    return (
        <main className="main visualisation">
            <Section>
                <Title>Wizualizacja i Galeria</Title>
            </Section>
            <Section title="Wizualizacja Domu">
                video...
            </Section>
            <Section title="Zdjęcia Inwestycji">
                zdjęcia...
            </Section>
            <LegalInfo />
        </main>
    );
};