/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { textCompose } from './styledCompose';
import { TextProps } from './rebassTypes';

export const Text = styled.span<TextProps>`
    ${textCompose()};
`;
