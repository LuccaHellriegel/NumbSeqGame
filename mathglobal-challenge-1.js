const [ruleFuncOne, ruleFuncTwo, ruleFuncThree] = createEasyRules()
const ruleOne = new Rule(startValue, ruleFuncOne)
const ruleTwo = new Rule(startValue, ruleFuncTwo);
const ruleThree = new Rule(startValue, ruleFuncThree);
const rules = [ruleOne, ruleTwo, ruleThree];

let codes = [
  'U29sdXRpb25PbmVTYWx0IUNyeXB0b0dvZXNCcnI=',
  'TPZzdW5nT25lU2FsdCFDcnlwdG9Hb2VzQnJy', 'Rmlyc3RTYWx0IUNyeXB0b0dvZXNCcnI'
];
const solutionIndex = parseInt(pseudoDecrypt('MlNhbHQhQ3J5cHRvR29lc0Jycg=='))
const solution = codes.splice(solutionIndex, 1)

startGame(solution, codes)
