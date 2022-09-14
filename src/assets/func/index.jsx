import styled from 'styled-components';






const ScrollTop = (alt = 0) => {
        window.requestAnimationFrame(() => {
                window.scroll({ top: 0, behavior: 'smooth' });
        })
}

const ScrollLink = styled.a`
        background-color: inherit;
        text-decoration: none;
        color: white;
        padding: 0;
`
const Pp10 = styled.a`
        background-color: inherit;
        padding-left: 10px;
`

const ScrollInfoBottom = ({str, link}) => <ScrollLink href={`#main-${link}`} id={`t${link}`}>{str}</ScrollLink>
const ScrollInfoTop = ({str, link}) => <ScrollLink href={`#t${link}`} id={`b${link}`}>{str}</ScrollLink>

export {ScrollLink, Pp10, ScrollInfoBottom, ScrollInfoTop, ScrollTop}