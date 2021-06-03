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


function useFetchData<Payload>(url: string): {
  data: Payload | null;
  done: boolean
} {
  const [data, dataSet] = useState<Payload | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((d: Payload) => {
        dataSet(d)
        doneSet(true);
      })
  }, [url])

  return {
    data,
    done,
  }
}

function CustomHookComponent2() {
  const { data, done } = useFetchData<Beverage[]>('/hv-taplist.json')
  return (
    <div>
      {done && (
        <img
          src={data![3].logo}
          alt="Beverage logo"
        />
      )}
      {done && (
        <img
          src={data![8].logo}
          alt="Beverage logo"
        />
      )}

    </div>
  )
}

export default CustomHookComponent2;

