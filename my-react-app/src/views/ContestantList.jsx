export function ContestantList({ contestants, onVote, onGB }) {
  return (
    <div>
      <h3>รายการผู้เข้าแข่งขัน</h3>
      <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>ชื่อ</th>
            <th>การแสดง</th>
            <th>สถานะปัจจุบัน</th>
            <th>การกระทำ</th>
          </tr>
        </thead>
        <tbody>
          {contestants.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.performance}</td>
              <td>{c.statusInfo.status}</td>
              <td>
                {c.statusInfo.status === 'รอผล' && (
                  <>
                    <button onClick={() => onVote(c.id, 'PASS')}>ผ่าน</button>{' '}
                    <button onClick={() => onVote(c.id, 'FAIL')}>ไม่ผ่าน</button>{' '}
                    <button onClick={() => onGB(c.id)} style={{ backgroundColor: 'gold' }}>
                      Golden Buzzer
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}