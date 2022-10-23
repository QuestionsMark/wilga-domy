import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    end?: boolean;
    indent?: boolean;
}

export const Paragraph = ({ children, end, indent = true }: Props) => {
    return (
        <p className={`paragraph${indent ? ' paragraph--indent' : ''}${end ? ' paragraph--end' : ''}`}>
            {children}
        </p>
    );
};