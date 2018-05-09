# Spring configs

```jsx
import { config } from 'react-spring'
```

```jsx
/*
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
*/
```

# Spring

```jsx
import { Spring } from 'react-spring'
```

```jsx
class Spring extends React.PureComponent {
  static propTypes = {
    // Will skip rendering the component if true and write to the dom directly
    native: PropTypes.bool,
    // Base styles, optional
    from: PropTypes.object,
    // Animates to ...
    to: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    // Callback when the animation comes to a still-stand
    onRest: PropTypes.func,
    // Frame by frame callback, first argument passed is the animated value
    onFrame: PropTypes.func,
    // Takes a function that receives interpolated styles
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.func),
    ]),
    // Same as children, but takes precedence if present
    render: PropTypes.func,
    // Prevents animation if true, you can also pass individual keys
    immediate: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    // Won't start animations, so they can be controlled from outside
    hold: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    // Spring config ({ tension, friction } or a function receiving a name)
    config: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    // When true it literally resets: from -> to
    reset: PropTypes.bool,
  }
  static defaultProps = {
    from: {},
    to: {},
    config: config.default,
    native: false,
    immediate: false,
    hold: false,
  }
}
```

# Transition

```jsx
import { Transition } from 'react-spring'
```

```jsx
class Transition extends React.PureComponent {
  static propTypes = {
    native: PropTypes.bool,
    config: PropTypes.object,
    // Base styles
    from: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    // Animated styles when the component is mounted
    enter: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    // Unmpount styles
    leave: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    //
    update: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    // A collection of unique keys that must match with the childrens order
    // Can be omitted if children/render aren't an array
    // Can be a function, which then acts as a key-accessor which is useful when you use the items prop
    keys: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      ),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ]),
    // Optional. Let items refer to the actual data and from/enter/leaver/update can return per-object styles
    items: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.object,
        ])
      ),
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
      ]),
    ]),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.func),
      PropTypes.func,
    ]),
    render: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.func),
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    from: {},
    enter: {},
    leave: {},
    native: false,
    config: config.default,
  }
}
```

# Trail

```jsx
import { Trail } from 'react-spring'
```

```jsx
class Trail extends React.PureComponent {
  static propTypes = {
    native: PropTypes.bool,
    config: PropTypes.object,
    from: PropTypes.object,
    to: PropTypes.object,
    keys: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.func),
      PropTypes.func,
    ]),
    render: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.func),
      PropTypes.func,
    ]),
  }
  static defaultProps = {
    from: {},
    to: {},
    native: false,
    config: config.default,
  }
}
```

# Parallax

```jsx
import { Parallax, ParallaxLayer } from 'react-spring'
```

```jsx
class Parallax extends React.PureComponent {
  static propTypes = {
    // Total (inner) height/width of the scroll container
    pages: PropTypes.number.isRequired,
    config: PropTypes.object,
    // Has a scrollbar or doesn't ...
    scrolling: PropTypes.bool,
    // Scroll horizontally or vertically
    horizontal: PropTypes.bool,
  }

  static defaultProps = {
    config: config.slow,
    scrolling: true,
    horizontal: false,
  }
}

class ParallaxLayer extends React.PureComponent {
  static propTypes = {
    // Size of a page, by default 1
    factor: PropTypes.number,
    // Where the layer will be projected to (0=start, 1=first page, ...)
    offset: PropTypes.number,
    // Speed (and direction) it scrolls there, can be positive or negative
    speed: PropTypes.number,
  }

  static defaultProps = {
    factor: 1,
    offset: 0,
    speed: 0,
  }
}
```

# Keyframes

```jsx
export default class Keyframes extends React.Component {
  static propTypes = {
    // Callback which receives a function that that takes two arguments:
    //     script={async next => {
    //         next(primitive, props)
    //     }}
    script: PropTypes.func,
  }
}
```
