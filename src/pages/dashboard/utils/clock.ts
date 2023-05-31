import { useEffect,useState } from "react"

export const clock = ()=>{

const [clock, setClock] = useState<string | Date>();

  useEffect(() => {
    const time = setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(time);
  }, []);

  return clock?.toLocaleString();

}