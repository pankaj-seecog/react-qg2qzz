import React from  'react';
import Child1 from './Child1';

class Pattern extends React.Component{

constructor(){
super();
this.state = {
  count : 0
}
}

componentDidMount(){
  setInterval(()=>{

// let ele = Math.floor(Math.random(0,1)*9)
// console.log('The elemnt is ',ele)
// this.setState({
//   count : ele
// })


  },2000)
}

render(){
return (
  <Child1 val="23"/>
)
}

}

export default Pattern;