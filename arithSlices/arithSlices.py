class Solution(object):
    def numberOfArithmeticSlices(self, A):
        
        if len(A) < 3:
            return 0
        
        checkDiff = A[1] - A[0]
        currRun = 1
        sliceCount = 0
        
        for ind, elem in enumerate(A):
            if ind > 0:
                currDiff = A[ind] - A[ind - 1]
                if currDiff == checkDiff:
                    currRun = currRun + 1
                    print('same     elem: ' + str(elem) + ' currRun: ' + str(currRun) + ' currDiff: ' + str(currDiff))
                else:
                    if currRun > 2:
                        currentSlices = int(self.arithSum(currRun - 3 + 1))
                        sliceCount = sliceCount + currentSlices
                    currRun = 1
                    checkDiff = currDiff
                    print('diff     elem: ' + str(elem) + ' currRun: ' + str(currRun) + ' currDiff: ' + str(currDiff))
                
        print(' at the end    currRun: ' + str(currRun))
        if currRun > 2:
            currentSlices = int(self.arithSum(currRun - 3 + 1))
            sliceCount = sliceCount + currentSlices
            
        return sliceCount
                        
    def arithSum(self, n):
        return (n / float(2)) * ( n + 1 ) 
