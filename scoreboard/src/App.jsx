import React, { useState } from 'react';

// ⭐ 데이터를 파일에서 불러오지 않고 직접 여기에 적습니다. 에러 예방!
const initialData = {
  "gameTime": "13:05",
  "blueTeam": { 
    "name": "KT", "logo": "/kt-rolster.png", "kills": 0, "gold": "12.5K", "goldDiff": "+0.4K", "towers": 0 
  },
  "redTeam": { 
    "name": "HLE", "logo": "/hanwha.png", "kills": 0, "gold": "12.1K", "goldDiff": "0", "towers": 0 
  }
};

export default function App() {
  const [data, setData] = useState(initialData);

  const updateKill = (team, delta) => {
    setData(prev => ({ ...prev, [team]: { ...prev[team], kills: Math.max(0, prev[team].kills + delta) } }));
  };

  return (
    <div style={{
      width: '100%', height: '100vh', backgroundColor: 'transparent',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      paddingTop: '20px', margin: 0, fontFamily: "'Sora', sans-serif", position: 'relative'
    }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800;900&display=swap');
        body, html { margin: 0 !important; padding: 0 !important; overflow: hidden; background-color: transparent; }
      `}</style>

      {/* 스코어보드 메인 바 */}
      <div style={{
        width: '100%', maxWidth: '1200px', height: '84px', backgroundColor: '#17112B', 
        color: 'white', display: 'flex', alignItems: 'center', borderRadius: '8px', overflow: 'hidden'
      }}>
        {/* 블루팀 */}
        <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', padding: '0 20px', background: 'linear-gradient(90deg, #1F5AFE 0%, rgba(31, 90, 254, 0.4) 50%, transparent 100%)' }}>
          <img src={data.blueTeam.logo} style={{ width: '45px', height: '45px', objectFit: 'contain', marginRight: '15px', filter: 'brightness(0) invert(1)' }} />
          <span style={{ fontSize: '36px', fontWeight: '900', fontStyle: 'italic' }}>{data.blueTeam.name}</span>
          <div style={{ width: '1.5px', height: '50px', backgroundColor: 'rgba(255, 255, 255, 0.4)', margin: '0 20px' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}><img src="/tower.png" style={{ width: '22px', height: '22px', marginRight: '6px' }} /><span style={{ fontWeight: '300' }}>{data.blueTeam.towers}</span></div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/coin.png" style={{ width: '16px', height: '16px', marginRight: '6px' }} />
              {/* 블루팀 골드 및 파란색 증가량 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontWeight: '300' }}>{data.blueTeam.gold}</span>
                <span style={{ fontSize: '14px', fontWeight: '300', color: '#3b82f6', marginTop: '-4px' }}>
                  {data.blueTeam.goldDiff}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 중앙 점수 */}
        <div style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <span style={{ fontSize: '40px', cursor: 'pointer' }} onClick={() => updateKill('blueTeam', 1)}>{data.blueTeam.kills}</span>
          <img src="/league-studio_logo_draft_v3.png" style={{ width: '40px', filter: 'brightness(0) invert(1)' }} />
          <span style={{ fontSize: '40px', cursor: 'pointer' }} onClick={() => updateKill('redTeam', 1)}>{data.redTeam.kills}</span>
        </div>

        {/* 레드팀 */}
        <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', padding: '0 20px', background: 'linear-gradient(-90deg, #E6334D 0%, rgba(230, 51, 77, 0.4) 50%, transparent 100%)' }}>
          <img src={data.redTeam.logo} style={{ width: '45px', height: '45px', objectFit: 'contain', marginLeft: '15px', filter: 'brightness(0) invert(1)' }} />
          <span style={{ fontSize: '36px', fontWeight: '900', fontStyle: 'italic' }}>{data.redTeam.name}</span>
          <div style={{ width: '1.5px', height: '50px', backgroundColor: 'rgba(255, 255, 255, 0.4)', margin: '0 20px' }} />
          <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}><span style={{ fontWeight: '300' }}>{data.redTeam.towers}</span><img src="/tower.png" style={{ width: '22px', height: '22px', marginLeft: '6px' }} /></div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontWeight: '300' }}>{data.redTeam.gold}</span>
                {/* 레드팀은 현재 증가량이 없으므로 레이아웃 유지를 위해 투명하게 처리 */}
                <span style={{ fontSize: '14px', fontWeight: '300', color: 'transparent', marginTop: '-4px' }}>0</span>
              </div>
              <img src="/coin.png" style={{ width: '16px', height: '16px', marginLeft: '6px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* 하단 바 (시간 및 드래곤 로고) */}
      <div style={{ width: '100%', maxWidth: '1200px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(90deg, transparent, rgba(23,17,43,0.85), transparent)' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '15px', fontWeight: '700', color: '#E2E8F0', marginRight: '15px' }}>{data.gameTime}</span>
          <img src="/바람용.png" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
          <img src="/대지용.png" style={{ width: '20px', height: '20px' }} />
        </div>
      </div>
    </div>
  );
}