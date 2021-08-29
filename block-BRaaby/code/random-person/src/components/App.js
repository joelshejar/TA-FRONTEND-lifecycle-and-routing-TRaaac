import React from 'react'
import Loader from './Loader'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:''
        }
    }
    componentDidMount(){
        fetch(`https://randomuser.me/api/`)
            .then((res)=>res.json())
            .then((data)=>console.log(data))
            .then((data)=>this.setState({data}))
    }
    render(){
        if(!this.state.data){
            return <Loader/>
        }
        return(
            <div>
                {this.state.data.results[0].gender}
            </div>
        )
    }
}

export default App