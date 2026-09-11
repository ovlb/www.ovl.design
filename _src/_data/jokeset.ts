export default [
  {
    model: 'DeepSeek v4 Pro',
    tokens: {
      input: 14_541,
      output: 68,
    },
    cost: 0.803,
    output:
      'Funny Python one-liner:<br>`print([n for n in range(2, 100) for f in range(2, int(n**0.5)+1) if n % f == 0] or "nobody gets out alive")`<br>Or the classic:<br>`import this`',
  },
  {
    model: 'GLM 5.2',
    tokens: {
      input: 12_813,
      output: 631,
    },
    cost: 0.206,
    output:
      '`print("I\'d tell you a Python joke, but you\'d probably mess up the indentation")`',
  },
  {
    model: 'GLM 5.3',
    tokens: {
      input: 13_899,
      output: 135,
    },
    cost: 0.201,
    output:
      "`print('\\n'.join(f\"{'buy' if i%3 and i%5 else 'fizz' if i%3==0 else 'buy'}\" for i in range(1,101)))`<br>FizzBuzz for adults: every multiple of 3 says \"fizz\", everything else says \"buy\". More classic option:<br>`import this`<br>— zen of Python, only joke shipped in stdlib.",
  },
  {
    model: 'GPT 5.5 Pro',
    tokens: {
      input: 28_674,
      output: 498,
    },
    cost: 0.966,
    output:
      '`print("I told Python a joke about indentation... it didn\'t get the block.")`',
  },
  {
    model: 'GPT 5.5',
    tokens: {
      input: 28_726,
      output: 657,
    },
    cost: 0.896,
    output:
      '`print("I put the \'fun\' in function, mostly by removing the tests.")`',
  },
  {
    model: 'GPT-6 Astra',
    tokens: {
      input: 43_792,
      output: 396,
    },
    cost: 0.2_577,
    output:
      '`print("I\'ve got 99 problems, but thanks to zero-indexing, the last one is 98.")`',
  },
  {
    model: 'Kimi K 2.6',
    tokens: {
      input: 13_538,
      output: 75,
    },
    cost: 0.66,
    output:
      '`import __hello__ # The only import that says hi then ghosts you, just like my dating life`',
  },
  {
    model: 'Kimi K 2.7 Code',
    tokens: {
      input: 14_362,
      output: 1_184,
    },
    cost: 0.183,
    output:
      "`print(''.join(['🐍' if i % 2 else '💤' for i in range(10)]))  # 🐍💤🐍💤🐍💤🐍💤🐍💤`<br>Or, if you prefer meta-humor:<br>`__import__('antigravity')  # Python's official sense of humor (try it in your terminal)`",
  },
  {
    model: 'Kimi K 3',
    tokens: {
      input: 13_499,
      output: 300,
    },
    cost: 0.517,
    output:
      'Here one:<br>`print("Why do Python programmers wear glasses? Because they can\'t C")`<br>Bonus, nerdy:<br>`import antigravity`<br>Run second one. Opens xkcd comic. Real easter egg.',
  },
  {
    model: 'Minimax M2.5',
    tokens: {
      input: 14_567,
      output: 122,
    },
    cost: 0.45,
    output:
      '`import antigravity  # opens a web browser showing the famous xkcd comic`<br>Or for something that actually runs:<br>`print(lambda: print(lambda: print(lambda: print("Python")))())  # the lambda that keeps on lambdating`',
  },
  {
    model: 'Minimax M2.7',
    tokens: {
      input: 14_565,
      output: 69,
    },
    cost: 0.004,
    output: '`import this`',
  },
  {
    model: 'Minimax M3',
    tokens: {
      input: 13_006,
      output: 4_388,
    },
    cost: 0.87,
    output:
      '`print(f"0.1 + 0.2 = {0.1 + 0.2}, but she wanted exactly {0.3}. 🐍💔")`',
  },
  {
    model: 'Mistral Medium 3.5',
    tokens: {
      input: 10_090,
      output: 689,
    },
    cost: 0.203,
    output:
      '`print(f"The answer to life, the universe, and everything is {6*9}")`',
  },
  {
    model: 'Opus 4.6',
    tokens: {
      input: 16_317,
      output: 24,
    },
    cost: 0.1_026,
    output: "`print(' '.join(['spam'] * 100 + ['eggs']))`",
  },
  {
    model: 'Opus 4.7',
    tokens: {
      input: 22_643,
      output: 86,
    },
    cost: 0.1_437,
    output:
      '`print((lambda f: f(f))(lambda f: lambda n: 1 if n < 2 else n * f(f)(n-1))(5), "... I computed a factorial recursively in a lambda because regular functions are for people with friends.")`',
  },
  {
    model: 'Opus 4.8',
    tokens: {
      input: 19_491,
      output: 116,
    },
    cost: 0.1_247,
    output:
      '`import antigravity  # opens https://xkcd.com/353 in your browser because Python literally has a joke built in`<br>Or a self-deprecating classic:<br>`print("This code has no bugs"); # narrator: it had bugs`',
  },
  {
    model: 'Opus 5',
    tokens: {
      input: 21_247,
      output: 174,
    },
    cost: 0.137,
    output:
      '`print("\\n".join(f"{n}: {\'FizzBuzz\'[n%3*4:8-n%5*4] or n}" for n in range(1,16)))`<br>Cursed FizzBuzz. Slices "FizzBuzz" — string index math does the branching. Nobody on your team will forgive you.',
  },
  {
    model: 'Qwen 3.6 Plus',
    tokens: {
      input: 15_082,
      output: 57,
    },
    cost: 0.96,
    output:
      '`print("I\'m not lazy, I\'m just on energy-saving mode." or exit())`',
  },
  {
    model: 'Sonnet 5',
    tokens: {
      input: 19_555,
      output: 399,
    },
    cost: 0.529,
    output:
      "Here's one:<br>`print(''.join(chr(ord(c)-1) for c in \"Ifmmp-!xpsme\"))`<br>This decodes a Caesar-shifted string to print Hello, world! — technically correct, needlessly convoluted, and exactly the kind of one-liner that gets you side-eyed in code review.<br>Or if you prefer chaos in the numeric variety:<br>`print(*[i for i in range(1,101) if not print(i,end=' ') and False] or [])`<br>(That one's a joke about a \"joke\" — it doesn't even work right, which is the real punchline: someone tried to jam a for-loop print into a one-liner and immediately regretted it.)",
  },
]
