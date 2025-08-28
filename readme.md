**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
Solution:
  1. getElementById: It selects one element by it's unique ID. 
  2. getElementsByClassName: It selects a live collection of all elements which have a class name. 
  3. querySelector: It selects the first element which matches a specific CSS selector. 
  4. querySelectorAll: It selects a static list of all elements which matches a specific CSS selector.

**2. How do you create and insert a new element into the DOM?**
Solution:
  Here I create an element through using the .createElement() function and then insert it using .appendChild() .

**3. What is Event Bubbling and how does it work?**
Solution: 
  Event bubbling means when we click on a child element or trigger an event, that event also moves up and triggers on its parent elements too.

**4. What is Event Delegation in JavaScript? Why is it useful?**
Solution: 
  Attaching a single event listener to a parent element is known as event delegation, and it is a useful method. This listener controls the events of all its child elements. It uses event bubbling to capture events from the child elements. This method works well for improving performance and controlling events on dynamically introduced content.
  Event delegation means adding one event listener to a parent element instead of putting listeners on every child. For event bubbling, the parent can catch events from its children. It’s useful for performance and also works well when new child elements are added later.

**5. What are the differences between the preventDefault() and stopPropagation() methods?**
Solution:
  1. preventDefault() function stops the browser's default response to an event. For example, it could prevent a form from submitting or a link from functioning. 
  2. StopPropagation() stops the event bubbling process. In this way, the event is kept from rising.