export default function CostumeSale(props) {
    const customs = props.c.map((c)=>(<div>
     <h1>{c.custom}</h1>
     <h1>{c.price}</h1>
     </div>))
    
 return customs;
       
       }
          
