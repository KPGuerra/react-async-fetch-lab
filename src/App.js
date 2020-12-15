// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        people: [],
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(data => this.setState({
                people: data.people
            }))
    }

    renderPeople = () => {
        return this.state.people.map(person => <h1> {person.name} </h1>)
    }

    render() {
        return (
            <div>
                {this.state.people.length === 0 ? <h1>"Loading"</h1> :

                    <div>
                        {this.renderPeople()}
                    </div>
                }
            </div>
        )
    }
}

export default App