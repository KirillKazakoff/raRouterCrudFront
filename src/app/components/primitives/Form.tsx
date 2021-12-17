import styled from 'styled-components';
import { FlexProps } from './Flex';
import { flexCompose } from './styledCompose';

const Form = styled.form<FlexProps>`
    ${flexCompose()}
    gap: ${({ gap }) => gap || ''};
    row-gap: ${({ rowGap }) => rowGap || ''};
`;

export default Form;
