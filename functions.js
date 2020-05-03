const writeVal = (val, id) => {
  const ele = document.getElementById(id);
  ele.innerHTML = val;
};

const addOnClick = (func, id) => {
  const ele = document.getElementById(id);
  ele.onclick = func;
};

const randomizeArr = (arr) => {
  const order = [...arr];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = order[i];
    order[i] = order[j];
    order[j] = temp;
  }
  return order;
};

const removeOnClick =
    () => {
      // haha, global objects go brrr
      ids.forEach(id => {
        const ele = document.getElementById(id);
        ele.onclick = undefined
      })
    }

const removeOnClickAnswer =
    () => {
      ids.forEach(id => {
        const ele = document.getElementById(id + 'Choice');
        ele.onclick = undefined
      })
    }

const decreaseTries =
    () => {
      const tries = document.getElementById('tries');
      const curTries = parseInt(tries.innerHTML)
      const newTries = curTries - 1;
      tries.innerHTML = newTries;
      if (newTries == 0) {
        removeOnClick();
      }
    }

const writeToOut = (id, ruleObj) => {
  const ele = document.getElementById(id + 'Out');
  return () => {
    const nextVal = ruleObj.getNext();
    ele.innerHTML = ele.innerHTML + '<br />' + nextVal;
    decreaseTries()
  };
};

const writeToCode = (code) => {
  const ele = document.getElementById('code-fragment');
  return () => {
    ele.innerHTML = code;
    removeOnClick();
    removeOnClickAnswer();
  };
};

const produceInitalSequence =
    (rule) => {
      let startValue = rule.lastValue;
      let pseudoStartValue = Math.floor(Math.random() * (12 - 10 + 1) + 10);
      rule.lastValue = pseudoStartValue
      let result = '' + pseudoStartValue
      for (let index = 0; index < 5; index++) {
        result += ', ' + rule.getNext()
      }
      rule.lastValue = startValue
      if (rule.lasterValue) rule.lasterValue = undefined;
      return result;
    }

const startGame = (solutionCode, otherCodes) => {
  // nevermind the global objects
  // galaxy brain attention to state goes brr
  const randRules = randomizeArr(rules);

  const solutionIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0);

  const popIds = ids.slice()

  for (let index = 0; index < 3; index++) {
    let curCode;
    const curRule = randRules.pop();

    if (index == solutionIndex) {
      curCode = solutionCode;
      document.getElementById('given').innerHTML =
          produceInitalSequence(curRule)
    } else {
      curCode = otherCodes.pop();
    }
    const curID = popIds.pop();
    addOnClick(writeToOut(curID, curRule), curID);
    addOnClick(writeToCode(curCode), curID + 'Choice');
  }
}