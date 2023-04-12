---
date: 2021-01-28
category: CSS
tag: animation
---

# Animation

## Properties

### animation-name

- A animation identifier.

```html

<div class="item"></div>
```

```css
.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	margin: 100px;
}

.item:hover {
	animation-name: rotate;
	animation-duration: 2s;
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(180deg);
	}
}
```

### animation-duration

- The length of time that an animation takes to complete on cycle.
- The value can be seconds or milliseconds.

### animation-timing-function

- Setting how an animation progresses through the duration of each cycle.
- Values
  - keywords such as `linear`
  - steps

```html

<div class="item">1</div>
```

```css
.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	margin: 100px;
}

.item:hover {
	animation-name: rotate;
	animation-duration: 2s;
	animation-timing-function: steps(5, jump-start);
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(180deg);
	}
}
```

### animation-delay

- Specifying the amount of time to wait from applying the animation to an element before beginning to perform the
  animation.
- A negative value causes the animation to begin immediately, but partway through its cycle. For example, if you specify
  -1s as the animation delay time, the animation will begin immediately but will start 1 second into the animation
  sequence. [Ref1](https://stackoverflow.com/a/41493482/9863318) [Ref2](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay)

```html

<div class="item">1</div>
```

```css
.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	margin: 100px;
}

.item:hover {
	animation-name: rotate;
	animation-duration: 2s;
	animation-timing-function: steps(5, jump-start);
	animation-delay: -1s; /* the animation will start from 1s */
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(180deg);
	}
}
```

### animation-iteration-count

- Setting the number of times an animation sequence should be played before stopping.
- Values:
  - infinite
  - `<number>`

```html

<div class="item">1</div>
```

```css
.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	margin: 100px;
}

.item:hover {
	animation-name: rotate;
	animation-duration: 2s;
	animation-timing-function: linear;
	animation-delay: -1s;
	animation-iteration-count: infinite;
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(180deg);
	}
}
```

### animation-direction

- Setting whether an animation should play forward, backward, or alternate back and forth between playing the sequence
  forward and backward.

```html

<div class="item">1</div>
```

```css
.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	margin: 100px;
}

.item:hover {
	animation-name: rotate;
	animation-duration: 2s;
	animation-timing-function: linear;
	animation-delay: -1s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(180deg);
	}
}
```

### animation-fill-mode

- Setting how a CSS animation applies styles to its target before and after its execution.
- Values:
  - `forwards`: the target will retain the computed values set by the last keyframe encountered during execution.
  - `backwards`: the animation will apply the values defined in the first relevant keyframe as soon as it is applied to
    the target, and retain this during the animation-delay period.
  - `both`: forwards + backwards.

```html

<div class="item">1</div>
```

_forwards_

```css
.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	margin: 100px;
}

.item:hover {
	animation-name: rotate;
	animation-duration: 2s;
	/* keep `rotate(180deg)` state after animation completed */
	animation-fill-mode: forwards;
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(180deg);
	}
}
```

_backwards_

```css
.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	margin: 100px;
}

.item:hover {
	animation-name: rotate;
	animation-duration: 2s;
	animation-timing-function: linear;
	animation-delay: 1s;
	/* has `rotate(15deg)` state in delay period  */
	animation-fill-mode: backwards;
}

@keyframes rotate {
	from {
		transform: rotate(15deg);
	}
	to {
		transform: rotate(180deg);
	}
}
```

```css
.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	margin: 100px;
}

.item:hover {
	animation-name: rotate;
	animation-duration: 2s;
	animation-delay: 1s;
	animation-fill-mode: both;
}

@keyframes rotate {
	from {
		transform: rotate(15deg);
	}
	to {
		transform: rotate(180deg);
	}
}
```

### animation-play-state

- Resuming a paused animation will start the animation from where it left off at the time it was paused, rather than starting over from the beginning of the animation sequence.

```css
.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	margin: 50px;
	animation-name: rotate;
	animation-duration: 2s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
  /* running */
	animation-play-state: running;
}

.item:hover {
  /* paused when hover */
	animation-play-state: paused;
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
```

## Frame Grouping

- Grouping 0% - 50% frame.

```html

<div class="item"></div>
```

```css
@keyframes stretching {
	from, 50% {
		width: 100px;
	}
	to {
		width: 200px;
	}
}

.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	animation-name: stretching;
	animation-duration: 2s;
	animation-iteration-count: infinite;
}
```

## Multiple Keyframes

- Multiple keyframes used in the same element is available.

```html

<div class="item"></div>
```

```css
@keyframes outline {
	to {
		width: 200px;
		height: 200px;
	}
	from {
		width: 100px;
		height: 100px;
	}
}

@keyframes bg-color {
	from {
		background-color: #fff;
	}
	to {
		background-color: darkred;
	}
}

.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	animation-name: outline, bg-color;
	animation-duration: 3s, 3s;
	animation-iteration-count: infinite;
}
```
