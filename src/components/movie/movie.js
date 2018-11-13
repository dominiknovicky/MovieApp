import React from 'react';
import { Wrapper, Title, About, Year, Header } from './movie_styles';

const Movie = ({ title, about, year }) => (
    <Wrapper>
        <Header>
            <Title>{title}</Title>
            <Year>[{year}]</Year>
        </Header>
        <About>{about}</About>
    </Wrapper>
)

export default Movie;