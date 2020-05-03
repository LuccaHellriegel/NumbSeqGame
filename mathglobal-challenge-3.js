const [ruleFuncOne, ruleFuncTwo, ruleFuncThree] = createHardRules()
const ruleOne = new RuleTwo(startValue, ruleFuncOne)
const ruleTwo = new RuleTwo(startValue, ruleFuncTwo);
const ruleThree = new RuleTwo(startValue, ruleFuncThree);
const rules = [ruleOne, ruleTwo, ruleThree];

let codes = [
  'U29sdXRpb25UaHJlZVNhbHQhQ3J5cHRvR29lc0Jycg==',
  'VGhpcmRTYWx0IUNyeXB0b0dvZXNCcnI=', 'TPZzdW5nVGhyZWVTYWx0IUNyeXB0b0dvZXNCcnI='
];
const solutionIndex = parseInt(pseudoDecrypt('MFNhbHQhQ3J5cHRvR29lc0Jycg=='))
const solution = codes.splice(solutionIndex, 1)
startGame(solution, codes)
