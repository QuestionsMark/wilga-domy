import { ReactNode } from 'react';

interface Props {
    value: string;
    className?: string;
    title?: string;
    icon?: ReactNode;
}

export const SectionItem = ({ value, className, icon, title }: Props) => {

    return (
        <div className={`section__item${className ? ' ' + className : ''}`}>
            {icon}
            {title && <h3 className="section__item-title">{title}</h3>}
            <p className="section__item-text">
                {value}
            </p>
        </div>
    );
};