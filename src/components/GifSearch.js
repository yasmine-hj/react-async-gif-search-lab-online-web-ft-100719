import React, {Component} from 'react'

export default class GifSearch extends Component {
    state = {
        query: ""
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                </form>
            </div>
        )
    }

} 