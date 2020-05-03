class Rule {
  lastValue;
  rule;

  constructor(startValue, rule) {
    this.lastValue = startValue;
    this.rule = rule;
  }

  getNext() {
    this.lastValue = this.rule(this.lastValue);
    return this.lastValue;
  }
}

class RuleTwo {
  lastValue;
  lasterValue;
  rule;

  constructor(startValue, rule) {
    this.lastValue = startValue;
    this.rule = rule;
  }

  getNext() {
    const nextValue = this.rule(this.lasterValue, this.lastValue);
    this.lasterValue = this.lastValue;
    this.lastValue = nextValue
    return nextValue;
  }
}