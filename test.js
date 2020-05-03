const test =
    () => {
      const one = pseudoDecrypt(document.getElementById('one').value.trim())
      const two = pseudoDecrypt(document.getElementById('two').value.trim())
      const three = pseudoDecrypt(document.getElementById('three').value.trim())

      if (one == firstWord && two == secondWord && three == thirdWord) {
        success();
      }
      else {
        failure();
      }
    }


const success =
    () => {
      document.getElementById('status').innerHTML = 'Correct!'
    }

const failure = () => {
  document.getElementById('status').innerHTML =
      'Sadly wrong... Try again! Or ask for hints!'
}