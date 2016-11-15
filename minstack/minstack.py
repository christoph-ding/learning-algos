class MinStack(object):

    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, x):
        self.stack.append(x)
        if len(self.minStack) == 0 or x <= self.getMin():
            self.minStack.append(x)
        else: 
            self.minStack.insert(0, x)
        
    def pop(self):
        if self.top() == self.getMin():
            self.minStack.pop()
        return self.stack.pop()

    def top(self):
        if len(self.stack) > 0:
            return self.stack[-1]

    def getMin(self):
        if len(self.minStack) > 0:
            return self.minStack[-1]
