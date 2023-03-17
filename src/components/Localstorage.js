import { useRef } from "react";
import localStorage from "./component/localStorage"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    collection = {
        siteName: 'Quote Collector',
        siteDescription: "Quote Collector"

    },
    localData =

  localStorage.setitem ('collection', JSON.stringify(collection));

  localData = JSON.parse(localStorage.getitem('collection'));

  console.log (localData);
  console.log (localStorage.getItem ('collection'));

)

root.innerHTML = localData.collection;
    
