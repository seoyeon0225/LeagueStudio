 {/* 블루팀 영역 (잃어버린 KT 로고와 그라데이션 복구!) */}
        <div style={{
          flex: 1, height: '100%', display: 'flex', alignItems: 'center', padding: '0 30px',
          background: 'linear-gradient(90deg, #1F5AFE 0%, rgba(31, 90, 254, 0.4) 50%, transparent 100%)'
        }}>
          <img src={data.blueTeam.logo} style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '30px', filter: 'brightness(0) invert(1)' }} />
          <span style={{ fontSize: '40px', fontWeight: '900', fontStyle: 'italic' }}>{data.blueTeam.name}</span>
          <div style={{ width: '1.5px', height: '60px', backgroundColor: 'rgba(255, 255, 255, 0.4)', margin: '0 40px' }} />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/tower.png" style={{ width: '25px', height: '25px', marginRight: '8px', filter: 'invert(35%) sepia(96%) saturate(3332%) hue-rotate(212deg) brightness(101%) contrast(106%)' }} />
              <span style={{ fontSize: '24px', color: 'white', fontWeight: '500' }}>{data.blueTeam.towers}</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/coin.png" style={{ width: '18px', height: '18px', marginRight: '8px', filter: 'invert(35%) sepia(96%) saturate(3332%) hue-rotate(212deg) brightness(101%) contrast(106%)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '20px', color: 'white', fontWeight: '600' }}>{data.blueTeam.gold}</span>
                <span style={{ fontSize: '13px', color: '#3B82F6', fontWeight: '700', marginTop: '-2px' }}>{data.blueTeam.goldDiff}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 킬 스코어 & 중앙 로고 영역 (테두리 없는 흰색 로고) */}
        <div style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '25px' }}>
          <span style={{ fontSize: '40px', fontWeight: '300', cursor: 'pointer' }} onClick={() => updateKill('blueTeam', 1)}>{data.blueTeam.kills}</span>
          
          <div style={{ 
            width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <img 
              src="/league-studio_logo_draft_v3.png" 
              style={{ width: '45px', height: '45px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
            />
          </div>
          
          <span style={{ fontSize: '40px', fontWeight: '300', cursor: 'pointer' }} onClick={() => updateKill('redTeam', 1)}>{data.redTeam.kills}</span>
        </div>

 {/* 레드팀 영역 (잃어버린 HLE 로고와 그라데이션 복구!) */}
        <div style={{
          flex: 1, height: '100%', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', padding: '0 30px',
          background: 'linear-gradient(-90deg, #E6334D 0%, rgba(230, 51, 77, 0.4) 50%, transparent 100%)'
        }}>
          <img src={data.redTeam.logo} style={{ width: '50px', height: '50px', objectFit: 'contain', marginLeft: '30px', filter: 'brightness(0) invert(1)' }} />
          <span style={{ fontSize: '40px', fontWeight: '900', fontStyle: 'italic' }}>{data.redTeam.name}</span>
          <div style={{ width: '1.5px', height: '60px', backgroundColor: 'rgba(255, 255, 255, 0.4)', margin: '0 40px' }} />
          
          <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', color: 'white', fontWeight: '500', marginRight: '8px' }}>{data.redTeam.towers}</span>
              <img src="/tower.png" style={{ width: '25px', height: '25px', filter: 'invert(31%) sepia(82%) saturate(3660%) hue-rotate(335deg) brightness(97%) contrast(102%)' }} />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', color: 'white', fontWeight: '600', marginRight: '8px' }}>{data.redTeam.gold}</span>
              <img src="/coin.png" style={{ width: '18px', height: '18px', filter: 'invert(31%) sepia(82%) saturate(3660%) hue-rotate(335deg) brightness(97%) contrast(102%)' }} />
            </div>
          </div>
        </div>
      </div>

