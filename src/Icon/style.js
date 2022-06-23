import styled from 'styled-components';

export const StyledSvg = styled.svg`
    ${({color}) => color && `color: ${color};`}
    ${({fill}) => fill && `fill: ${fill};`}
    ${({stroke}) => stroke && `stroke: ${stroke};`}
`;