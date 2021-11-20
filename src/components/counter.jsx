import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
        classes: "m-2 badge badge-",
    };
    render(){
        return (
            <>
            <div className='d-flex m-5'>
                <button onClick={this.handleDec} className='btn btn-danger sm'> - </button>
                <h3 className={this.getClasses()}> { this.formatCount() } </h3>
                <button onClick={this.handleInc} className='btn btn-secondary sm'> + </button>
            </div>
            </> 
        );
    }
    handleInc = () =>{
        this.setState({ count: this.state.count + 1 });
    }
    handleDec = () =>{
        this.setState({ count: this.state.count - 1 });
    }
    getClasses(){
        return this.state.count === 0 ? this.state.classes += "warning" : this.state.classes += "primary";
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }
}
 
export default Counter;