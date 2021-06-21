import './App.css';
import { Component } from 'react';

import ColorPicker from './components/ColorPicker'
import {TwitterPicker} from 'react-color'

import CustomPickerLeft from './components/CustomPickerLeft';
import CustomPickerRight from './components/CustomPickerRight';

import FlatSvg from './components/FlatSvg'
import GradientSvg from './components/GradientSvg'

class App extends Component {

  state = {
    collapse: true,
    color:'#000000',
    gradientLeftColor:'#000000',
    gradientRightColor:'#000000',
    colorStyle:'flat',
    fileReady:false,
    fileId:''

  }

  handleClickOne = ()=>{
    this.setState({collapse:true,colorStyle:'flat',fileReady:false})
  }

  handleClickTwo = ()=>{
    this.setState({collapse:false,colorStyle:'gradient',fileReady:false})
  }

  handleColor = (color,position)=>{

    if(position ==='l'){
      this.setState({gradientLeftColor:color.hex,fileReady:false})
    } else if(position==='r'){
      this.setState({gradientRightColor:color.hex,fileReady:false})
    } else {
      this.setState({color:color.hex,fileReady:false})
    }
    
  }

  handleFlatColor=(color)=>{
    this.setState({color:color.hex,fileReady:false})
  }

  handleGradient= (color,position)=>{
    if(position ==='l'){
      this.setState({gradientLeftColor:color,fileReady:false})
    } else if(position==='r'){
      this.setState({gradientRightColor:color,fileReady:false})
    }
  }



  
  createFile =  ( )=>{


    if(this.state.colorStyle === 'flat'){
      fetch(`/create`,{
        method:'POST',
        headers:{
          "Content-Type":"text/html"
        },
        body:`<?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 533.859 265.201" style="enable-background:new 0 0 533.859 265.201;" xml:space="preserve">
        <style type="text/css">
          .st0{opacity:0.3;}
          .st1{fill:${this.state.color};}
        </style>
        <g id="SoftCore_1_" class="st0">
          <polygon class="st1" points="340.959,173.648 374.745,265.201 390.313,265.201 390.313,202.704 340.959,80.479 	"/>
          <path class="st1" d="M431.366,220.149l58.233-158.426v203.478h44.26V10.427h-32.252c-14.908,0-28.305,9.103-33.796,22.963
            l-36.445,91.991V220.149z"/>
          <path class="st1" d="M20.637,9.812v254.774h8.28c20.08,0,36.356-16.28,36.352-36.36L65.221,9.812H20.637z"/>
          <polygon class="st1" points="106.274,173.034 140.06,264.586 155.627,264.586 155.627,202.089 106.274,79.864 	"/>
          <path class="st1" d="M196.68,219.534l58.233-158.426v203.478h8.147c19.945,0,36.114-16.169,36.114-36.114V9.812h-34.321
            c-13.659,0-25.933,8.34-30.964,21.038l-37.208,93.916V219.534z"/>
        </g>
        <polygon class="st1" points="320.322,163.836 354.108,255.389 369.676,255.389 369.676,192.892 320.322,70.667 "/>
        <path class="st1" d="M0,0v254.774h8.473c19.973,0,36.163-16.194,36.159-36.167L44.584,0H0z"/>
        <path class="st1" d="M410.728,210.337L468.961,51.91v203.478h44.26V0.615H480.97c-14.908,0-28.305,9.103-33.796,22.963
          l-36.445,91.991V210.337z"/>
        <polygon class="st1" points="85.637,163.221 119.423,254.774 134.99,254.774 134.99,192.277 85.637,70.052 "/>
        <path class="st1" d="M176.043,209.722l58.233-158.427v203.478h8.225c19.902,0,36.035-16.134,36.035-36.035V0h-33.474
          c-14.17,0-26.904,8.652-32.123,21.826l-36.896,93.128V209.722z"/>
        </svg>
        `
        
      })
      .then(v=>v.json())
      .then(vv=>{
        this.setState({fileId:vv.id,fileReady:true})
        
      })
      .catch(e=>{console.log(e)})
    } else {

      fetch(`/create`,{
        method:'POST',
        headers:{
          "Content-Type":"text/html"
        },
        body:`<?xml version="1.0" encoding="utf-8"?>
              <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 825.7 410.2" style="enable-background:new 0 0 825.7 410.2;" xml:space="preserve">
              <style type="text/css">
                .st0{opacity:0.2;fill:url(#SVGID_1_);}
                .st1{fill:url(#SVGID_2_);}
              </style>
              <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="31.9201" y1="212.6836" x2="825.7275" y2="212.6836">
                <stop  offset="0" style="stop-color:${this.state.gradientLeftColor}"/>
                <stop  offset="1" style="stop-color:${this.state.gradientRightColor}"/>
              </linearGradient>
              <path class="st0" d="M527.4,124.5l76.3,189v96.7h-24.1l-52.3-141.6V124.5z M667.2,340.5l90.1-245v314.7h68.5V16.1h-49.9
                c-23.1,0-43.8,14.1-52.3,35.5l-56.4,142.3V340.5z M31.9,15.2v394.1h12.8c31.1,0,56.2-25.2,56.2-56.2l-0.1-337.8H31.9z M164.4,267.6
                l52.3,141.6h24.1v-96.7l-76.3-189V267.6z M304.2,339.6l90.1-245v314.7h12.6c30.8,0,55.9-25,55.9-55.9V15.2h-53.1
                c-21.1,0-40.1,12.9-47.9,32.5L304.2,193V339.6z"/>
              <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="197.5068" x2="793.8075" y2="197.5068">
                <stop  offset="0" style="stop-color:${this.state.gradientLeftColor}"/>
                <stop  offset="1" style="stop-color:${this.state.gradientRightColor}"/>
              </linearGradient>
              <path class="st1" d="M495.4,109.3l76.3,189V395h-24.1l-52.3-141.6V109.3z M0,0v394.1h13.1c30.9,0,55.9-25,55.9-55.9L69,0H0z
                M635.3,325.3l90.1-245V395h68.5V1h-49.9c-23.1,0-43.8,14.1-52.3,35.5l-56.4,142.3V325.3z M132.5,252.5l52.3,141.6h24.1v-96.7
                l-76.3-189V252.5z M272.3,324.4l90.1-245v314.7h12.7c30.8,0,55.7-25,55.7-55.7V0H379c-21.9,0-41.6,13.4-49.7,33.8l-57.1,144V324.4z"
                />
              </svg>

        `
        
      })
      .then(v=>v.json())
      .then(vv=>{
        this.setState({fileId:vv.id,fileReady:true})
        
      })
      .catch(e=>{console.log(e)})
    }

    
}

downloadFile = async()=>{

  fetch(`/download/${this.state.fileId}`)
        .then( res => res.blob() )
        .then( blob => {
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = this.state.fileId+".png";
          document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
          a.click();    
          a.remove();
        });

  }



  render(){
    return (
      <div className="">

          <div className="w-full md:w-3/5 mx-auto pt-0 p-8">
         <div className="">

         <h1 className=" m-3 text-4xl font-bold text-center">Make Your Logo</h1>

            <div className="tab w-full overflow-hidden border ">

            
              
                  <div className="tab-content overflow-hidden  bg-white border-indigo-500 leading-normal p-5 pl-8 max-w-md mx-auto">
                    {
                      this.state.colorStyle === 'flat' ? <FlatSvg color={this.state.color}/> : <GradientSvg leftColor={this.state.gradientLeftColor} rightColor={this.state.gradientRightColor} />
                    }
                    

                  </div>

               
            </div>

            <div className="tab w-full overflow-hidden mt-3 border-t ">
               <label className="bg-gray-100 block p-3 text-center leading-normal cursor-pointer" onClick={this.handleClickOne}>Flat Color</label>
                {this.state.collapse ? 
                  <div className="tab-content overflow-hidden border-l-2  border-indigo-500 leading-normal p-5 md:pl-8">

                <p className="">Choose a Color</p>
                  <TwitterPicker color={this.state.color} className="my-3" onChangeComplete={this.handleFlatColor}/>

                  <p className="">Or Pick One</p>
                    <div className="mt-2"><ColorPicker handleColor={this.handleColor} color={this.state.color} /></div>
                  </div>
                :''}
               
            </div>

            <div className="tab w-full overflow-hidden border-t border-b">
               <label className="bg-gray-100 block p-3 text-center leading-normal cursor-pointer" onClick={this.handleClickTwo}>Gradient Color</label>
                {this.state.collapse? '':
                  <div className="tab-content flex justify-around overflow-hidden border-l-2  border-indigo-500 leading-normal">
                    <div className="p-5 ">
                      <p>Choose Left Color</p>
                      <CustomPickerLeft onChangeComplete={this.handleGradient}/>
                      <p className="mb-1">Or Pick</p>
                      <ColorPicker left='l' handleColor={this.handleColor}  color={this.state.gradientLeftColor}  />
                      
                    </div>
                    <div className="p-5 grid justify-items-end">
                      <p>Choose Right Color</p>
                      
                      <CustomPickerRight onChangeComplete={this.handleGradient}/>
                      <p className="mb-1">Or Pick</p>
                      <ColorPicker handleColor={this.handleColor}  right='r' color={this.state.gradientRightColor} />
                    </div>
                  </div>
                }
               

            </div>


            <div className="tab w-full overflow-hidden my-6">

                  <div className="tab-content flex justify-around overflow-hidden  leading-normal">

                    <span class=" flex-inline rounded-md shadow-sm">
                      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:border-rose-700 active:bg-purple-700 transition ease-in-out duration-150" onClick={this.state.fileReady?this.downloadFile:this.createFile}>

                        {
                          this.state.fileReady? 'Download': 'Convert'
                          
                        }

                        {/* <span>
                          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing
                        </span> */}
                        
                        


                      </button>
                    </span>
                  </div>
            </div>
      </div>
      </div>
      </div>
    );
  }
  
}

export default App;


  <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing
      </button>
    </span>