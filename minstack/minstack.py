class MinStack(object):

    def __init__(self):
        self.stack = [];
        self.minStack = [];

    def push(self, val):
        # determine if the new value is a new minimum
        if len(self.minStack):
            newMin = min(val, self.getMin())        
        else:
            newMin = val

        # push new value and new min to both staks
        self.stack.append(val)
        self.minStack.append(newMin)

    def pop(self):
        # pop from the min stack to maintain two stack sizes
        self.minStack.pop()
        return self.stack.pop()

    def top(self):
        topValue = self.stack[-1]
        return topValue

    def getMin(self):
        # if there is a current min, return that
        if len(self.minStack):
            return self.minStack[-1]
        else:
            return None

# testing
testOne = MinStack()
print(testOne.getMin())
testOne.push(10)
testOne.push(21)
testOne.push(3)
print(testOne.getMin()) # 3
testOne.push(1)
print(testOne.getMin()) # 1
testOne.pop() 
print(testOne.getMin()) # 3
testOne.pop()
print(testOne.getMin()) # 10
testOne.pop()
print(testOne.getMin()) # 10
testOne.pop()
print(testOne.getMin()) # None


