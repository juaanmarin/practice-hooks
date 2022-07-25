import React, {useState, useEffect} from 'react'

export const DegitalClock = () => {

  const [UseHour, setUseHour] = useState("")

  const Clock = () =>{
    let hoy = new Date();
    let hr = hoy.getHours();
    let min = hoy.getMinutes();
    let sec = hoy.getSeconds();

    let ap = (hr < 12) ? "AM" : "PM";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

    min = num(min);
    sec = num(sec);

    setUseHour(hr + ":" + min + ":" + sec + " " + ap)
    
  }

  function num(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }

  useEffect(() => {
    setInterval(() =>{
      Clock()
    },1000);
  }, [])

  return (
    <div>
      <h2>{UseHour}</h2>
    </div>
  )
}
