import React, { useState } from 'react';

/**
 * LCK 스코어보드 오버레이 - 디자인.png 완벽 재현 버전
 * * [정밀 재현 포인트]
 * 1. 블루팀: 로고 -> 이름 -> 구분선 -> 타워 -> 골드 순서
 * 2. 레드팀: 골드 -> 타워 -> 구분선 -> 이름 -> 로고 순서 (반전 레이아웃)
 * 3. 중앙: 킬 스코어 사이의 특수 노드 아이콘 박스
 * 4. 하단: 게임 시간과 드래곤 아이콘의 정밀 배치
 */

// 드래곤 아이콘 컴포넌트
const DragonIcon = ({ type, color }) => {
  const icons = {
    ocean: "fa-droplet",
    mountain: "fa-mountain",
    infernal: "fa-fire",
    cloud: "fa-wind"
  };
  return (
    <i className={`fa-solid ${icons[type] || 'fa-dragon'} mx-0.5 text-[14px]`} style={{ color }}></i>
  );
};

export default function App() {
  const [data, setData] = useState({
    gameTime: "13:05",
    blueTeam: {
      name: "KT",
      logo: "/kt-rolster.png",
      kills: 0,
      gold: "12.5K",
      goldDiff: "+0.4K",
      towers: 0,
      dragons: ["ocean"]
    },
    redTeam: {
      name: "HLE",
      logo: "/hanwha.png",
      kills: 0,
      gold: "12.1K",
      goldDiff: "-0.4K",
      towers: 0,
      dragons: ["mountain"]
    }
  });

  const updateKill = (team, delta) => {
    setData(prev => ({
      ...prev,
      [team]: { ...prev[team], kills: Math.max(0, prev[team].kills + delta) }
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 bg-transparent select-none font-sans overflow-hidden">
      {/* 라이브러리 및 폰트 설정 */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800&display=swap');
        body { font-family: 'Sora', sans-serif; margin: 0; background-color: #f0f0f0; }
        .lck-bar { background-color: #17112B; box-shadow: 0 15px 35px rgba(0,0,0,0.4); }
        .blue-grad { background: linear-gradient(90deg, #1F5AFE 0%, rgba(31, 90, 254, 0.4) 40%, transparent 100%); }
        .red-grad { background: linear-gradient(-90deg, #E6334D 0%, rgba(230, 51, 77, 0.4) 40%, transparent 100%); }
      `}</style>

      {/* [1] 메인 스코어보드 상단 바 */}
      <div className="lck-bar relative flex items-center overflow-hidden" style={{ width: '1200px', height: '80px' }}>
        
        {/* 블루팀 영역 (좌측) */}
        <div className="flex-1 h-full flex items-center relative">
          <div className="absolute inset-y-0 left-0 w-full blue-grad pointer-events-none" />
          
          {/* 팀 정보 */}
          <div className="z-10 flex items-center pl-6">
            <img src={data.blueTeam.logo} alt="KT" className="w-11 h-11 object-contain mr-4" onError={(e) => e.target.src='https://via.placeholder.com/45/1F5AFE/FFFFFF?text=KT'} />
            <span className="text-white text-4xl font-black italic tracking-tighter">{data.blueTeam.name}</span>
          </div>

          <div className="w-[2px] h-10 bg-white/20 mx-8 z-10" />

          {/* 블루팀 스탯 (타워, 골드) */}
          <div className="z-10 flex items-center space-x-10">
            <div className="flex items-center">
              <i className="fa-solid fa-monument text-[#1F5AFE] text-xl mr-3"></i>
              <span className="text-white text-2xl font-bold">{data.blueTeam.towers}</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-[#1F5AFE] flex items-center justify-center mr-3">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white text-xl font-bold">{data.blueTeam.gold}</span>
                <span className="text-[#3B82F6] text-[12px] font-black mt-1">{data.blueTeam.goldDiff}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 중앙 점수 판 */}
        <div className="w-[280px] h-full flex items-center justify-between px-6 z-20">
          <span 
            className="text-white text-5xl font-black w-16 text-center cursor-pointer hover:text-blue-400"
            onClick={() => updateKill('blueTeam', 1)}
            onContextMenu={(e) => { e.preventDefault(); updateKill('blueTeam', -1); }}
          >
            {data.blueTeam.kills}
          </span>
          
          {/* 중앙 특수 아이콘 */}
          <div className="w-14 h-14 bg-white/5 border-2 border-white/20 rounded-xl flex items-center justify-center">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute w-full h-[2px] bg-white rotate-45"></div>
              <div className="absolute w-full h-[2px] bg-white -rotate-45"></div>
              <div className="absolute w-3 h-3 rounded-full border-2 border-white bg-[#17112B]"></div>
              <div className="absolute -top-1 w-2 h-2 rounded-full bg-white"></div>
              <div className="absolute -bottom-1 w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>

          <span 
            className="text-white text-5xl font-black w-16 text-center cursor-pointer hover:text-red-400"
            onClick={() => updateKill('redTeam', 1)}
            onContextMenu={(e) => { e.preventDefault(); updateKill('redTeam', -1); }}
          >
            {data.redTeam.kills}
          </span>
        </div>

        {/* 레드팀 영역 (우측 - 이미지와 똑같이 배치 역순) */}
        <div className="flex-1 h-full flex items-center relative flex-row-reverse">
          <div className="absolute inset-y-0 right-0 w-full red-grad pointer-events-none" />
          
          {/* 팀 정보 */}
          <div className="z-10 flex items-center flex-row-reverse pr-6">
            <img src={data.redTeam.logo} alt="HLE" className="w-11 h-11 object-contain ml-4" onError={(e) => e.target.src='https://via.placeholder.com/45/E6334D/FFFFFF?text=HLE'} />
            <span className="text-white text-4xl font-black italic tracking-tighter">{data.redTeam.name}</span>
          </div>

          <div className="w-[2px] h-10 bg-white/20 mx-8 z-10" />

          {/* 레드팀 스탯 (이미지처럼 골드 수치가 안쪽에 옴) */}
          <div className="z-10 flex flex-row-reverse items-center space-x-reverse space-x-10">
            <div className="flex flex-row-reverse items-center">
              <i className="fa-solid fa-monument text-[#E6334D] text-xl ml-3"></i>
              <span className="text-white text-2xl font-bold">{data.redTeam.towers}</span>
            </div>
            <div className="flex flex-row-reverse items-center">
              <div className="w-5 h-5 rounded-full bg-[#E6334D] flex items-center justify-center ml-3">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div className="flex flex-col items-end leading-none">
                <span className="text-white text-xl font-bold">{data.redTeam.gold}</span>
                <span className="text-[#E6334D] text-[12px] font-black mt-1">0</span> {/* 이미지에 0으로 표시됨 */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* [2] 하단 타이머 및 드래곤 바 */}
      <div className="flex flex-col items-center">
        <div className="bg-[#17112B]/95 px-6 py-0.5 rounded-b-md shadow-xl flex items-center justify-center min-w-[120px]">
          <span className="text-white text-xl font-bold">{data.gameTime}</span>
        </div>
        <div className="flex items-center mt-1">
          <DragonIcon type="ocean" color="#3B82F6" />
          <DragonIcon type="mountain" color="#A78BFA" />
        </div>
      </div>

      <div className="mt-20 text-[10px] font-bold text-black/10 tracking-[1em] uppercase">LCK GFX ENGINE</div>
    </div>
  );
}