export function JudgeSelector({ judges, selectedJudge, onSelect }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label><b>เลือกกรรมการผู้ใช้งาน: </b></label>
      <select value={selectedJudge} onChange={(e) => onSelect(e.target.value)}>
        {judges.map(j => (
          <option key={j.id} value={j.id}>{j.id} - {j.name}</option>
        ))}
      </select>
    </div>
  );
}