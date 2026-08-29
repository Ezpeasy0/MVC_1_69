import { useState } from 'react';
import { talentModel } from '../models/talentModel';

export function useTalentController() {
  const [data, setData] = useState(talentModel.getData());
  const [selectedJudge, setSelectedJudge] = useState('J01');
  const [errorMessage, setErrorMessage] = useState('');

  const refreshData = () => {
    setData({ ...talentModel.getData() });
  };

  const handleVote = (contestantId, result) => {
    try {
      setErrorMessage('');
      talentModel.vote(selectedJudge, contestantId, result);
      refreshData();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGoldenBuzzer = (contestantId) => {
    try {
      setErrorMessage('');
      talentModel.useGoldenBuzzer(selectedJudge, contestantId);
      refreshData();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const getContestantList = () => {
    return data.contestants.map(c => ({
      ...c,
      statusInfo: talentModel.getContestantStatus(c.id)
    }));
  };

  return {
    judges: data.judges,
    selectedJudge,
    setSelectedJudge,
    errorMessage,
    contestants: getContestantList(),
    handleVote,
    handleGoldenBuzzer
  };
}