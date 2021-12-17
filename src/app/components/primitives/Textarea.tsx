import styled from 'styled-components';
import { BoxProps } from './rebassTypes';
import { boxCompose } from './styledCompose';

const Textarea = styled.textarea<BoxProps>`
    ${boxCompose()};
`;
export default Textarea;
