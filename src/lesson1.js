
import React from "react";

let index=0;
let flag=false
class Timer extends React.Component{
   constructor(props){
       super(props);
       this.arrayOfName=['tamar','cani','faigy']
       this.state={
          seconds:index,
       }

       setInterval(()=>{
           if(flag)
           this.setState({seconds:index++});
           else
         this.setState({seconds:index});
       },1000)
   }
   restart(){
   index=0;
    flag=false
   }

   start(){
    flag=true
    setInterval()
   
    }

    // MyFind(array,callback){
    //   let i;
    //   for(i=0;i<array.length,i++)
    //   {callback(array[i])
    //     if(&&callback)
    //         return i;
    //   }
    // }

   render() {
     let my_buttens=this.arrayOfName.map((x,index)=><button key={index}>{x}</button>)
    return <div>
        <h1>Timer:{this.state.seconds} </h1>
        <button onClick={this.restart}>restart</button>
        <button onClick={this.start}>start</button>
        {my_buttens}
        </div>
}


}
export default Timer;