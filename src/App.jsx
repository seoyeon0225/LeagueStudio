import React, { useState } from 'react';

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

  const blueFilter = 'invert(32%) sepia(85%) saturate(2135%) hue-rotate(212deg) brightness(101%) contrast(106%)';
  const redFilter = 'invert(24%) sepia(86%) saturate(4649%) hue-rotate(346deg) brightness(91%) contrast(92%)';

  return (
    <div style={{
      width: '100%', height: '100vh', backgroundColor: 'white',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      paddingTop: '50px', margin: 0, fontFamily: "'Sora', sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800;900&display=swap');
        body { margin: 0; background-color: white; }
      `}</style>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '1000px' }}>
        
        {/* 상단 메인 바 */}
        <div style={{
          width: '100%', height: '70px', backgroundColor: '#17112B', 
          color: 'white', display: 'flex', alignItems: 'center', borderRadius: '4px', overflow: 'hidden'
        }}>
          {/* 블루팀 */}
          <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', padding: '0 25px', background: 'linear-gradient(90deg, #1F5AFE 0%, rgba(31, 90, 254, 0.5) 60%, transparent 100%)' }}>
            <img src={data.blueTeam.logo} style={{ width: '40px', filter: 'brightness(0) invert(1)', marginRight: '12px' }} />
            <span style={{ fontSize: '32px', fontWeight: '800', fontStyle: 'italic', marginRight: '20px' }}>{data.blueTeam.name}</span>
            <div style={{ width: '1px', height: '35px', backgroundColor: 'rgba(255,255,255,0.3)', marginRight: '20px' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <img src="/tower.png" style={{ width: '18px', filter: blueFilter }} />
                <span style={{ fontWeight: '400', fontSize: '18px' }}>{data.blueTeam.towers}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <img src="/coin.png" style={{ width: '16px', filter: blueFilter }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ fontWeight: '400', fontSize: '18px', lineHeight: '1' }}>{data.blueTeam.gold}</span>
                  <span style={{ fontSize: '11px', color: '#3b82f6', fontWeight: '300' }}>{data.blueTeam.goldDiff}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 중앙 점수 */}
          <div style={{ width: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <span style={{ fontSize: '38px', fontWeight: '500', cursor: 'pointer' }} onClick={() => updateKill('blueTeam', 1)}>{data.blueTeam.kills}</span>
            <img src="/league-studio_logo_draft_v3.png" style={{ width: '38px', filter: 'brightness(0) invert(1)' }} />
            <span style={{ fontSize: '38px', fontWeight: '500', cursor: 'pointer' }} onClick={() => updateKill('redTeam', 1)}>{data.redTeam.kills}</span>
          </div>

          {/* 레드팀 */}
          <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', padding: '0 25px', background: 'linear-gradient(-90deg, #E6334D 0%, rgba(230, 51, 77, 0.5) 60%, transparent 100%)' }}>
            <img src={data.redTeam.logo} style={{ width: '40px', filter: 'brightness(0) invert(1)', marginLeft: '12px' }} />
            <span style={{ fontSize: '32px', fontWeight: '800', fontStyle: 'italic', marginLeft: '20px' }}>{data.redTeam.name}</span>
            <div style={{ width: '1px', height: '35px', backgroundColor: 'rgba(255,255,255,0.3)', marginLeft: '20px' }} />
            
            <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: '400', fontSize: '18px' }}>{data.redTeam.towers}</span>
                <img src="/tower.png" style={{ width: '18px', filter: redFilter }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: '400', fontSize: '18px' }}>{data.redTeam.gold}</span>
                <img src="/coin.png" style={{ width: '16px', filter: redFilter }} />
              </div>
            </div>
          </div>
        </div>

        {/* ✅ [수정] 하단 그라데이션 바: 시안과 동일하게 양옆이 투명하게 퍼지는 스타일 */}
        <div style={{
          width: '100%', height: '32px', 
          background: 'linear-gradient(90deg, transparent 0%, rgba(23, 17, 43, 0.85) 35%, rgba(23, 17, 43, 0.85) 65%, transparent 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '-2px'
        }}>
          <span style={{ color: '#E2E8F0', fontSize: '15px', fontWeight: '700' }}>{data.gameTime}</span>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <img src="/바람용.png" style={{ width: '18px', height: '18px' }} />
            <img src="/대지용.png" style={{ width: '18px', height: '18px', opacity: 0.5 }} />
          </div>
        </div>
      </div>
    </div>
  );
}