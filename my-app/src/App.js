import React from 'react';
import Card from './Componands/Card';
import Data from './Data.json';


 let items=Data.map((item,index)=>{
    return <Card key={index} titleText={item.title} bodyText={item.decription} footerText={item.number}/>
})

function App(){
   return <div>
            <h1 className="headingStyle">Card Lists</h1>
            {items}
         
           

        </div>

}

export default App;