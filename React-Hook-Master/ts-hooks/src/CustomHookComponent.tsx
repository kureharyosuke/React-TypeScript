import { useState, useEffect } from 'react'

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}


function useFetchData(url: string): {
  data: Beverage[] | null;
  done: boolean
} {
  const [data, dataSet] = useState<Beverage[] | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((d: Beverage[]) => {
        dataSet(d)
        doneSet(true);
      })
  }, [url])

  return {
    data,
    done,
  }
}

function CustomHookComponent() {
  const { data, done } = useFetchData('/hv-taplist.json')
  return (
    <div>
      {done && (
        <img
          src={data![1].logo}
          alt="Beverage logo"
        />
      )}
      {done && (
        <img
          src={data![7].logo}
          alt="Beverage logo"
        />
      )}
    </div>
  )
}

export default CustomHookComponent;

