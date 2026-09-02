export default defineNuxtPlugin(() => {
  if (import.meta.client && typeof Node !== 'undefined') {
    // Monkey patch Node.prototype.removeChild to prevent Google Translate DOM crashes
    const originalRemoveChild = Node.prototype.removeChild
    Node.prototype.removeChild = function <T extends Node>(child: T): T {
      if (child.parentNode !== this) {
        if (child.parentNode) {
          return child.parentNode.removeChild(child) as T
        }
        return child
      }
      return originalRemoveChild.call(this, child) as T
    }

    // Monkey patch Node.prototype.insertBefore to prevent Google Translate DOM crashes
    const originalInsertBefore = Node.prototype.insertBefore
    Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
      if (referenceNode && referenceNode.parentNode !== this) {
        if (referenceNode.parentNode) {
          return referenceNode.parentNode.insertBefore(newNode, referenceNode) as T
        }
      }
      return originalInsertBefore.call(this, newNode, referenceNode) as T
    }
  }
})
