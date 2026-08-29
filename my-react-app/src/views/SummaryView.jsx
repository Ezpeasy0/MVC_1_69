export function SummaryView({ contestants, judges }) {
  const getJudgeName = (id) => judges.find(j => j.id === id)?.name || id;

  const waiting = contestants.filter(c => c.statusInfo.status === 'รอผล');
  const passed = contestants.filter(c => c.statusInfo.status === 'ผ่านเข้ารอบ');
  const failed = contestants.filter(c => c.statusInfo.status === 'ไม่ผ่านเข้ารอบ');

  return (
    <div style={{ marginTop: '24px' }}>
      <h3>สรุปผลการแข่งขัน</h3>
      
      <h4>1. ผ่านเข้ารอบ</h4>
      <ul>
        {passed.map(c => (
          <li key={c.id}>
            {c.name} - {c.statusInfo.isGB 
              ? `ผ่านด้วย Golden Buzzer โดย ${getJudgeName(c.statusInfo.gbJudge)}` 
              : `ผ่าน (ผ่าน ${c.statusInfo.passCount} / ไม่ผ่าน ${c.statusInfo.failCount})`}
          </li>
        ))}
      </ul>

      <h4>2. ไม่ผ่านเข้ารอบ</h4>
      <ul>
        {failed.map(c => (
          <li key={c.id}>
            {c.name} (ผ่าน {c.statusInfo.passCount} / ไม่ผ่าน {c.statusInfo.failCount})
          </li>
        ))}
      </ul>

      <h4>3. รอผล</h4>
      <ul>
        {waiting.map(c => (
          <li key={c.id}>{c.name} ({c.performance})</li>
        ))}
      </ul>
    </div>
  );
}