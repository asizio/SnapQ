
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📸 SnapQ 퍼널 시작하기</h1>
      <p>사진을 올리고 광고 수익을 시작하세요.</p>
      <input type="file" accept="image/*" />
      <div style={{ marginTop: '1rem' }}>
        <button>퍼널 생성</button>
        <button style={{ marginLeft: '1rem' }}>광고하기</button>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
