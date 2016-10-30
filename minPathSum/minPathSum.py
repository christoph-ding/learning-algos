def hasPathSum(self, root, sum):
    if root is None:
        return False
    # at a leaf
    if root.val == sum and root.left is None and root.right is None:
        return True
    # depth first search
    return self.hasPathSum(root.left, sum - root.val) or self.hasPathSum(root.right, sum - root.val)
