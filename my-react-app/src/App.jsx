import { useTalentController } from './controllers/useTalentController';
import { JudgeSelector } from './views/JudgeSelector';
import { ContestantList } from './views/ContestantList';
import { SummaryView } from './views/SummaryView';

function App() {
  const {
    judges,
    selectedJudge,
    setSelectedJudge,
    errorMessage,
    contestants,
    handleVote,
    handleGoldenBuzzer
  } = useTalentController();

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Ladkrabang's Got Talent</h1>
      
      <JudgeSelector 
        judges={judges} 
        selectedJudge={selectedJudge} 
        onSelect={setSelectedJudge} 
      />

      {errorMessage && (
        <div style={{ color: 'red', border: '1px solid red', padding: '10px', marginBottom: '10px' }}>
          <b>ข้อผิดพลาด:</b> {errorMessage}
        </div>
      )}

      <ContestantList 
        contestants={contestants} 
        onVote={handleVote} 
        onGB={handleGoldenBuzzer} 
      />

      <SummaryView contestants={contestants} judges={judges} />
    </div>
  );
}

export default App;