# Framer
**Framer** is a web based windowing system which implements *windows, icons, menus and pointers*. Each window can contain a simple DOM elemtne which might be an `iframe`, web component or a React component
![Framer Screenshot-1](https://raw.githubusercontent.com/andrejkn/framer/master/res/img/screen-shot-1.png)

These 'windows', or *frames* as we call them here, are React componets which can be used to wrap any element which can be renered in the DOM three. Each frame can be re-positioned by dragging it along the screen and resized by clicking on the edges and moving the mouse pointer.

Also, each **frame** has three buttons which can be used to change their the state. The state of a frame can be one of the following:

  1. expanded
  2. minimized
  3. maximized

A frame is expanded when ...
If the minimized button is clicked then the frame would be invisible and it can be made visable again by clicking on the minimized box in the pannel. 
