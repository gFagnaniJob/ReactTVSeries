import React, {Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then((response => response.json()))
            .then(json => this.setState({
                show: json
            }));
    }

    render() {
        const {show} = this.state;
        console.log(show);
        return (
            <div>
                {show === null && <Loader />}
                {show !== null
                &&
                <div>
                    <h1>{show.name}</h1>
                    <div dangerouslySetInnerHTML={{ __html: show.summary }} />
                    <p>Premiered - {show.premiered}</p>
                    <p>Rating - {show.rating.average} / 10</p>
                    <p>Episodes - {show._embedded.episodes.length}</p>
                    <p>
                        <img alt="Show" src={show.image.medium} />
                    </p>
                </div>
                }
            </div>
        )
    }
}

export default SingleSeries;