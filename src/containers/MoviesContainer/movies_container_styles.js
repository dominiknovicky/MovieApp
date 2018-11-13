import styled from 'styled-components';

export const MoviesWrapper = styled.div`
    display: flex;
    width: 100%;
    height:100vh;
    transition: all .2s ease-in-out;
    `;
    
    export const Search = styled.input`
    transition: all .2s ease-in-out;
    width: calc(100% - 2em);
    display: block;
    padding: .5em 1em;
    outline: 0;
    border: 1px solid #9c9c9c;
    &:hover{
        border: 1px solid #FFCFC8;
    }
    &:focus{
        border: 1px solid #fff;
        border-bottom: 1px solid #FFCFC8;
    }
    `;
    
    export const ContentWrapper = styled.div`
    align-items: center;
    transition: all .2s ease-in-out;
    justify-content: center;
    flex-direction: column;
    max-width: 600px;
    display: flex;
    margin: auto;
`;