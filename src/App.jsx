import React, { useState } from 'react';

const initialData = {
  "gameTime": "13:05",
  "blueTeam": { 
    "name": "KT", "logo": "/kt-rolster.png", "kills": 0, "gold": "12.5K", "goldDiff": "+0.4K", "towers": 0, "dragons": ["cloud"]
  },
  "redTeam": { 
    "name": "HLE", "logo": "/hanwha.png", "kills": 0, "gold": "12.1K", "goldDiff": "-0.4K", "towers": 0, "dragons": ["mountain"]
  }
};

// 공통 스타일 상수
const COLORS = {
  blue: '#3B82F6',
  red: '#F43F5E',
  background: '#17112B',
  textMain: '#FFFFFF'
};

// 재사용 가능한 스탯 아이템 컴포넌트
const StatItem = ({ icon, value, diff, side, type }) => {
  const isBlue = side === 'blue';
  const filter = isBlue 
    ? 'invert(42%) sepia(93%) saturate(1352%) hue-rotate(203deg) brightness(101%) contrast(106%)' 
    : 'invert(35%) sepia(85%) saturate(2135%) hue-rotate(330deg) brightness(101%) contrast(106%)';
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexDirection: isBlue ? 'row' : 'row-reverse' }}>
      <img src={icon} style={{ width: type === 'tower' ? '23px' : '23px', filter }} alt="icon" />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: isBlue ? 'flex-start' : 'flex-end' }}>
        <span style={{ fontSize: '18px', fontWeight: '400', lineHeight: '1.2' }}>{value}</span>
        {diff && <span style={{ fontSize: '11px', color: COLORS[side], fontWeight: '400' }}>{diff}</span>}
      </div>
    </div>
  );
};

export default function App() {
  const [data, setData] = useState(initialData);

  const updateKill = (team, delta) => {
    setData(prev => ({ 
      ...prev, 
      [team]: { ...prev[team], kills: Math.max(0, prev[team].kills + delta) } 
    }));
  };

  return (
    <div style={{
      width: '100%', height: '100vh', backgroundColor: 'white',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      paddingTop: '50px', margin: 0, fontFamily: "'Sora', sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;800&display=swap');
        body { margin: 0; }
      `}</style>

      {/* TopScoreboard: 전체 컨테이너 (폭 1237px) */}
      <div style={{ width: '1237px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* MainBar (높이 90px) */}
        <div style={{
          width: '100%', height: '90px', backgroundColor: COLORS.background, 
          color: COLORS.textMain, display: 'flex', alignItems: 'center', borderRadius: '4px 4px 0 0', overflow: 'hidden'
        }}>
          
          {/* 블루팀 섹션 */}
          <div style={{ 
            flex: 1, height: '100%', display: 'flex', alignItems: 'center', padding: '0 37px',
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.2) 60%, transparent 100%)'
          }}>
            <img src={data.blueTeam.logo} style={{ width: '55px', height: '55px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            <span style={{ fontSize: '32px', fontWeight: '800', marginLeft: '12px', marginRight: '60px' }}>{data.blueTeam.name}</span>
            <div style={{ width: '1px', height: '59px', backgroundColor: 'rgba(255,255,255,0.2)', marginRight: '20px' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <StatItem icon="/tower.png" value={data.blueTeam.towers} side="blue" type="tower" />
              <StatItem icon="/coin.png" value={data.blueTeam.gold} diff={data.blueTeam.goldDiff} side="blue" type="coin" />
            </div>
          </div>

          {/* CenterScore (중앙 킬 스코어 및 로고) */}
          <div style={{ width: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
            <span style={{ fontSize: '42px', fontWeight: '400', cursor: 'pointer' }} onClick={() => updateKill('blueTeam', 1)}>{data.blueTeam.kills}</span>
            <img src="/league-studio_logo_draft_v3.png" style={{ width: '59px', height: '59px' }} alt="Center Logo" />
            <span style={{ fontSize: '42px', fontWeight: '400', cursor: 'pointer' }} onClick={() => updateKill('redTeam', 1)}>{data.redTeam.kills}</span>
          </div>

          {/* 레드팀 섹션 */}
          <div style={{ 
            flex: 1, height: '100%', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', padding: '0 37px',
            background: 'linear-gradient(-90deg, rgba(244, 63, 94, 0.6) 0%, rgba(244, 63, 94, 0.2) 60%, transparent 100%)'
          }}>
            <img src={data.redTeam.logo} style={{ width: '71px', height: '40px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            <span style={{ fontSize: '32px', fontWeight: '800', marginRight: '12px', marginLeft: '60px' }}>{data.redTeam.name}</span>
            <div style={{ width: '1px', height: '59px', backgroundColor: 'rgba(255,255,255,0.2)', marginLeft: '20px' }} />
            
            <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '30px' }}>
              <StatItem icon="/tower.png" value={data.redTeam.towers} side="red" type="tower" />
              <StatItem icon="/coin.png" value={data.redTeam.gold} diff={data.redTeam.goldDiff !== '0' ? data.redTeam.goldDiff : null} side="red" type="coin" />
            </div>
          </div>
        </div>

        {/* TimerObjectiveBar (높이 40px) */}
        <div style={{
          width: '100%', height: '40px', 
          background: 'linear-gradient(90deg, transparent 0%, rgba(23, 17, 43, 0.95) 30%, rgba(23, 17, 43, 0.95) 70%, transparent 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '-1px'
        }}>
          {/* 블루팀 드래곤 */}
          <div style={{ display: 'flex', gap: '6px' }}>
             {data.blueTeam.dragons.map(d => <img key={d} src={`/${d}용.png`} style={{ width: '23px' }} />)}
          </div>
          
          <span style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: '400', letterSpacing: '1px' }}>{data.gameTime}</span>
          
          {/* 레드팀 드래곤 */}
          <div style={{ display: 'flex', gap: '6px' }}>
             {data.redTeam.dragons.map(d => <img key={d} src={`/${d}용.png`} style={{ width: '23px' }} />)}
          </div>
        </div>
      </div>
    </div>
  );
}