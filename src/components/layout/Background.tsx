import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const Background = ({ children }: Props) => {
    return (
        <div className="background">
            <div className="background__curtain" />
            {children}
        </div>
    );
};