import React from 'react';

export default ({data}) => {
  const dataList = data.map((d, i) => <li key={i}>{d}</li>)
  console.log(data);
  return (
    <div>
      <h3>Messages</h3>
      <ul>
        {dataList}
      </ul>
    </div>
  )
}
