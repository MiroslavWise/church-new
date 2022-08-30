import styled from 'styled-components';

const ScrollTop = () => {
        document.documentElement.scrollTop = 0
}

const ScrollLink = styled.a`
        background-color: inherit;
        text-decoration: none;
        text-style: italic;
        color: rgba(0,0,0,0.4);
        padding: 0;
        cursor: pointer;
`
const Pp10 = styled.a`
        background-color: inherit;
        padding-left: 10px;
`

const ScrollInfoBottom = ({str, link}) => <ScrollLink href={`#main-${link}`} id={`t${link}`}>{str}</ScrollLink>
const ScrollInfoTop = ({str, link}) => <ScrollLink href={`#t${link}`} id={`b${link}`}>{str}</ScrollLink>

export {ScrollLink, Pp10, ScrollInfoBottom, ScrollInfoTop, ScrollTop}