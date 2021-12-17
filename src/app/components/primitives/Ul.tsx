import styled from 'styled-components';
import { FlexProps } from './Flex';
import { flexCompose } from './styledCompose';

const Ul = styled.ul<FlexProps>`
    gap: ${({ gap }) => gap || ''};
    row-gap: ${({ rowGap }) => rowGap || ''};
    display: flex;
    ${flexCompose()};
`;

export default Ul;
