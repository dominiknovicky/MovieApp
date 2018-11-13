import React, {Component} from 'react';
import { MoviesWrapper, Search, ContentWrapper } from './movies_container_styles';
import Movie from '../../components/movie/movie';

class MoviesContainer extends Component {

    state = {
        movies: [
            {
                id: 1,
                title: "CITIZEN KANE",
                about: "Orson Welles's epic tale of a publishing tycoon's rise and fall is entertaining, poignant, and inventive in its storytelling, earning its reputation as a landmark achievement in film.",
                year: "1941"
            },
            {
                id: 2,
                title: "ALL ABOUT EVE",
                about: "Smart, sophisticated, and devastatingly funny, All About Eve is a Hollywood classic that only improves with age.",
                year: "1950"
            },
            {
                id: 3,
                title: "SINGIN' IN THE RAIN",
                about: "Clever, incisive, and funny, Singin' in the Rain is a masterpiece of the classical Hollywood musical.",
                year: "1952"
            }
        ],
        input: "",
        moviesCopy: []
    }

    componentWillMount(){
        this.setState({moviesCopy: this.state.movies})
    }

    findSomeValue = (e) => {
        let arr = [];
        this.state.movies.find((item, index) => {
            if (item.title.toLowerCase().includes(e.target.value.toLowerCase()) || item.about.toLowerCase().includes(e.target.value.toLowerCase())) {
                arr[index] = item;
            }
        });
        this.setState({moviesCopy: arr})
    }

    render(){
        const { moviesCopy } = this.state;
        return(
            <MoviesWrapper>
                <ContentWrapper>
                    {moviesCopy.map(item => (
                        <Movie
                        title={item.title}
                        about={item.about}
                        year={item.year}
                        />
                        ))}
                    <Search placeholder="Search ..."onChange={(e) => {this.findSomeValue(e)}}/>
                </ContentWrapper>
            </MoviesWrapper>
        )
    }
}

export default MoviesContainer;