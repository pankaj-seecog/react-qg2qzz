import React from 'react';

class Child1 extends React.PureComponent{

render(){
    console.log('Inside the child component')
return (
  <div>
The count is {this.props.val}
  </div>
)
}

}
export default Child1;