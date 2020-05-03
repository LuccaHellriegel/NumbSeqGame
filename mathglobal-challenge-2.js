const [ruleFuncOne, ruleFuncTwo, ruleFuncThree] = createMediumRules()
const ruleOne = new Rule(startValue, ruleFuncOne)
const ruleTwo = new RuleTwo(startValue, ruleFuncTwo);
const ruleThree = new RuleTwo(startValue, ruleFuncThree);
const rules = [ruleOne, ruleTwo, ruleThree];

let codes = [
  'U2Vjb25kU2FsdCFDcnlwdG9Hb2VzQnJy', 'TPZzdW5nVHdvU2FsdCFDcnlwdG9Hb2VzQnJy',
  'U29sdXRpb25Ud29TYWx0IUNyeXB0b0dvZXNCcnI='
];
const solutionIndex = parseInt(pseudoDecrypt('MVNhbHQhQ3J5cHRvR29lc0Jycg=='))
const solution = codes.splice(solutionIndex, 1)
console.log(solution)
startGame(solution, codes)
