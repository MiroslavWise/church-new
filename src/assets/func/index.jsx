import styled from 'styled-components';

const ScrollLink = styled.a`
        background-color: inherit;
        text-decoration: none;
        text-style: italic;
        color: rgba(0,0,0,0.4);
        padding: 0;
        cursor: pointer;
        &:hover {
                color: rgba(0,255,255,.6);
        }
`
const Pp10 = styled.a`
        background-color: inherit;
        padding-left: 10px;
`

const ScrollInfoBottom = ({str, link}) => <ScrollLink href={`#b${link}`} id={`t${link}`}>{str}</ScrollLink>
const ScrollInfoTop = ({str, link}) => <ScrollLink href={`#t${link}`} id={`b${link}`}>{str}</ScrollLink>

export {ScrollLink, Pp10, ScrollInfoBottom, ScrollInfoTop}