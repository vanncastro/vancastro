import styled from 'styled-components';
import { COLORS, fontFamily } from '../../utils/utils';

const StyledText = styled.p<{
    type?: string;
    height?: number | string;
    color?: string;
    textAlign?: string;
    margin?: string;
}>`
    color: ${({ color }) => (color ? color : COLORS.background)};

    font-family: ${fontFamily};
    height: ${({ height }) => (height ? height : 0)};
    margin: ${({ margin }) => margin || ''};
    ${({ type }) => {
        switch (type) {
            case 'header':
                return `
				font-size: 28px;
				display: block;
				font-weight: 700;
				text-transform: capitalize;
				@media (max-width: 600px) {
					font-size: 18px;
				}
				
				`;
            case 'body':
                return `font-size: 20px; font-weight: 400`;
            case 'label':
                return `font-size: 16px; font-weight: 600; text-transform: capitalize`;
            case 'small':
                return `
				font-size: 11px;
				font-weight: 400;
				@media (max-width: 600px) {
					font-size: 8px;
				}
				`;
            default:
                return `font-size: 14px; font-weight: normal`;
        }
    }};

    ${({ textAlign }) => (textAlign ? `text-align: ${textAlign}` : '')};
`;

// available weights 300/400/700

export const Text = ({
    children,
    type,
    height,
    color,
    textAlign,
    margin,
    ...props
}: {
    children?: React.ReactNode | string;
    type?: string;
    height?: string | number;
    color?: string;
    textAlign?: string;
    margin?: string;
}) => {
    return (
        <StyledText height={height} type={type} color={color} textAlign={textAlign} margin={margin} {...props}>
            {children}
        </StyledText>
    );
};
