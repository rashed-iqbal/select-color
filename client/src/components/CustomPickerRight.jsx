import React from 'react';
import { CustomPicker } from 'react-color';

class MyColorPicker extends React.Component {
    state = {
        colors:['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF']
    }
  render() {
    return <div className="flex-wrap flex justify-end my-2">

        {this.state.colors.map((v,i)=>(<div key={i} onClick={()=>this.props.onChangeComplete(v,'r')} className="w-7 h-7 ml-1 mb-1 rounded shadow" style={{background:v}}></div>))}
    </div>;
  }
}

export default CustomPicker(MyColorPicker);