import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 10 },
            { id: 4, value: 0 }
        ]
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: counters });
    };
    render() { 
        return (  
            <div className="container py-5 text-center">
                {this.state.counters.map(counter =>

                    <Counter key={counter.id}
                            counter={counter}
                            onDelete={this.handleDelete} />
                )}
            </div>
        );
    }
}
 
export default Counters;