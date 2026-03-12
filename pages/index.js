import { useState } from 'react';

export default function Home() {
  const [fortune, setFortune] = useState('');

  const getFortune = async () => {
    const res = await fetch('/api/fortune', { method: 'POST' });
    const data = await res.json();
    setFortune(data.fortune);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>今日のXLM運勢</h1>
      <button onClick={getFortune}>運勢を見る（1回課金）</button>
      {fortune && <p style={{ marginTop: '20px', fontSize: '20px' }}>{fortune}</p>}
    </div>
  );
}
