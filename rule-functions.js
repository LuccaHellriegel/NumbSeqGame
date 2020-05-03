const plusRule =
    (x) => {
      return (numb) => {
        return numb + x
      }
    }

const minusRule =
    (x) => {
      return (numb) => {
        return numb - x
      }
    }

const multiplyRule =
    (x) => {
      return (numb) => {
        return numb * x
      }
    }

const createEasyRules =
    () => {
      const max = 7;
      const min = 1;

      let ruleFuncArr = randomizeArr([plusRule, minusRule, multiplyRule]);

      const startValue = Math.floor(Math.random() * (max - min + 1) + min);


      const ruleArr =
          [
            ruleFuncArr.pop()(startValue), ruleFuncArr.pop()(startValue + 1),
            ruleFuncArr.pop()(startValue + 2)
          ]

          return ruleArr
    }

const fibPlusStyle = (x) => {
  return (numbMinusOne, numb) => {
    if (!numbMinusOne) return numb;
    return numbMinusOne + numb + x;
  }
};

const fibMinusStyle = (x) => {
  return (numbMinusOne, numb) => {
    if (!numbMinusOne) return numb;
    return numbMinusOne + numb - x;
  }
};

const fibMultiplyStyle = (x) => {
  return (numbMinusOne, numb) => {
    if (!numbMinusOne) return numb;
    return (numbMinusOne + numb) * x;
  }
};

const createMediumRules =
    () => {
      const ruleArr =
          [
            multiplyRule(-2.5),
            fibMultiplyStyle(1),
            fibPlusStyle(1),
          ]

          return ruleArr
    }



const createHardRules = () => {
  const max = 3;
  const min = 1;

  let ruleFuncArr =
      randomizeArr([fibPlusStyle, fibMinusStyle, fibMultiplyStyle]);

  const startValue = Math.floor(Math.random() * (max - min + 1) + min);


  const ruleArr =
      [
        ruleFuncArr.pop()(startValue), ruleFuncArr.pop()(startValue + 1),
        ruleFuncArr.pop()(startValue + 2)
      ]

      return ruleArr
}
