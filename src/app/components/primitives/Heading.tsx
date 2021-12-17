import styled from 'styled-components';

import { variant } from 'styled-system';
import { textCompose } from './styledCompose';
import { HeadingProps } from './rebassTypes';

const headingVariants = {
    h2: {
        fontSize: '25px',
        color: 'tan',
    },
};

const Heading = styled.h2<HeadingProps>`
    ${textCompose()};
    ${variant({ variants: headingVariants })}
`;

export default Heading;
