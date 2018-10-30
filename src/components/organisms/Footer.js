import React from 'react';
import styled from 'styled-components';

import { Link } from '../atoms';

import GithubIcon from '../../resources/icons/github-icon.png';

const Footer = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  background-color : #ffc9c9;
  padding : 5rem 0;
`;

const TextArea = styled.div`
  

`;

const GithubImage = styled.img`
  width : 3rem;
`;

export default () => {
    return (
        <Footer>
            <div>
                <div>
                    Winter coding assignment
                </div>
            </div>
            <a href="https://github.com/digression99/winter-coding-todolist-client">
                <GithubImage src={GithubIcon} alt="github-icon"/>
            </a>
        </Footer>
    );
};

{/*<Link*/}
{/*link="https://www.github.com/digression99"*/}
{/*>*/}
{/*<img src={GithubIcon} alt="github-icon"/>*/}
{/*</Link>*/}