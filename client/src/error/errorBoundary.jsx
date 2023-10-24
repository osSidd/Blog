import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: error,
            errorInfo: errorInfo
        })

        console.log(error, errorInfo)
    }

    render(){
        return this.state.error ? <FallbackComponent state={this.state}/> : this.props.children
    }
}

function FallbackComponent({state}){
    return (
        <div>
            <h2>Something went wrong</h2>
            <details>
                {state.error && state.error.toString()}
                <br />
                {state.errorInfo && state.errorInfo.componentStack}
            </details>
        </div>
    )
}

export default ErrorBoundary