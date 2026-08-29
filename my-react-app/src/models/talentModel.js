import initialData from '../seed_data.json';

class TalentModel {
  constructor() {
    this.judges = [...initialData.judges];
    this.contestants = [...initialData.contestants];
    this.decisions = [...initialData.decisions];
    this.goldenBuzzers = [...initialData.golden_buzzers];
  }

  getData() {
    return {
      judges: this.judges,
      contestants: this.contestants,
      decisions: this.decisions,
      goldenBuzzers: this.goldenBuzzers
    };
  }

  getContestantStatus(contestantId) {
    const gb = this.goldenBuzzers.find(g => g.contestant_id === contestantId);
    if (gb) {
      return { status: 'ผ่านเข้ารอบ', isGB: true, gbJudge: gb.judge_id };
    }

    const votes = this.decisions.filter(d => d.contestant_id === contestantId);
    const passCount = votes.filter(v => v.result === 'PASS').length;
    const failCount = votes.filter(v => v.result === 'FAIL').length;

    if (votes.length === 4) {
      if (passCount >= 3) {
        return { status: 'ผ่านเข้ารอบ', isGB: false, passCount, failCount };
      } else {
        return { status: 'ไม่ผ่านเข้ารอบ', isGB: false, passCount, failCount };
      }
    }

    return { status: 'รอผล', isGB: false, passCount, failCount };
  }

  vote(judgeId, contestantId, result) {
    const contestantStatus = this.getContestantStatus(contestantId);
    if (contestantStatus.status !== 'รอผล') {
      throw new Error('ไม่สามารถให้ผลได้ เนื่องจากผู้เข้าแข่งขันสรุปผลไปแล้ว');
    }

    const existingVote = this.decisions.find(
      d => d.judge_id === judgeId && d.contestant_id === contestantId
    );
    if (existingVote) {
      throw new Error(`กรรมการ ${judgeId} เคยให้ผลแก่ผู้เข้าแข่งขันนี้ไปแล้ว`);
    }

    this.decisions.push({ judge_id: judgeId, contestant_id: contestantId, result });
  }
// GoldenBuzzer
  useGoldenBuzzer(judgeId, contestantId) {
    const hasUsedGB = this.goldenBuzzers.some(g => g.judge_id === judgeId);
    if (hasUsedGB) {
      throw new Error(`กรรมการ ${judgeId} เคยใช้สิทธิ์ Golden Buzzer ไปแล้ว`);
    }

    const contestantStatus = this.getContestantStatus(contestantId);
    if (contestantStatus.status !== 'รอผล') {
      throw new Error('ไม่สามารถใช้ Golden Buzzer ได้ เนื่องจากผู้เข้าแข่งขันสรุปผลไปแล้ว');
    }

    const existingVote = this.decisions.find(
      d => d.judge_id === judgeId && d.contestant_id === contestantId
    );
    if (existingVote) {
      throw new Error(`กรรมการ ${judgeId} เคยให้ผลปกติกับผู้เข้าแข่งขันคนนี้แล้ว ไม่สามารถใช้ Golden Buzzer ได้`);
    }

    this.goldenBuzzers.push({ judge_id: judgeId, contestant_id: contestantId });
  }
}

export const talentModel = new TalentModel();