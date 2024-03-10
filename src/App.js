import { useEffect, useState } from "react";



function App() {
  const[paragrafGoster, paragrafIslem] =useState(true)
  const [sayac,sayacGuncelle]=useState(0)

  useEffect( ()=>
  {console.log("1.effect çalıştı");} , [sayac])


  useEffect( ()=>
  {console.log("2.effect çalıştı");})
 



  return (
  <>
  Sayaç:{sayac}
  </>
  );
}

export default App;
