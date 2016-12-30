import math

def calcSeeAndSay(n):
  # the first seeAndSay number is not derived from a previous number
  seeAndSay = 1
  counter = 1

  # we derive the next seeAndSay until we reach our target
  while counter < n:
    # generate the next seeAndSay number
    seeAndSay = deriveNext(seeAndSay)
    counter += 1

  return seeAndSay

def deriveNext(n):
  # we have to build the next number as we 'read' n
  nextNumber = 0
  nextNumberPlace = 0

  # calculate the number of digits
  numberOfDigits = math.floor(math.log10(n)) + 1

  # the digitsPlace is the power of 10 of the digit we are looking at
  # i.e, 0 is 1s place, 1 is 10s place, 2 is 100s place, etc.
  currentRunNumber = None
  currentRunCount = 1
  digitsPlace = 0

  # we 'read' the number from the right until all the digits are read
  while digitsPlace <= numberOfDigits:
    numberAtPlace = getDigit(n, digitsPlace)    

    if currentRunNumber is None:
      currentRunNumber = numberAtPlace
    elif numberAtPlace == currentRunNumber:
      currentRunCount += 1
    elif numberAtPlace != currentRunNumber:
      # we add a two digit number to the 'left' of the current 
      numberToAdd = (currentRunCount * 10 + currentRunNumber) * 10**nextNumberPlace
      nextNumber += numberToAdd
      nextNumberPlace += 2
      currentRunNumber = numberAtPlace
      currentRunCount = 1
    digitsPlace += 1
  return nextNumber

def getDigit(n, place):
    return n // 10**place % 10
