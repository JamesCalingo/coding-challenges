def mostWordsFound(self, sentences: List[str]) -> int:
    max_length = 0
    for sentence in sentences:
        words = sentence.split(" ")
        if len(words) > max_length:
            max_length = len(words)
    return max_length
  
  # Yes, I know this isn't really "Pythonic", but it works.
  
  # https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
