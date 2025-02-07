# p5.gvm.js

`p5.gvm.js` is a library for p5.js that simplifies the creation of visual rhythms. With this library, you can visually represent animations and movements based on musical tempo (BPM). It allows you to create rhythmic visual expressions even without playing sound.

## Basic Usage

### 1. Creating a GVM Instance

- To use the library, first create an instance of the `GVM` class in the global scope.
- Specify the BPM (tempo) when creating the instance.

```javascript
let gvm = new GVM(120); // Set BPM to 120
```

### 2. Changing BPM

If you want to change the BPM after creating the instance, use the `setBPM()` function.

```javascript
gvm.setBPM(90); // Change BPM to 90
```

## Function Reference

### 1. `getPhase()`

- **Description**:  
  Retrieves the current phase value (progress).  
  This function returns a value calculated based on the specified cycle length (`cycleLength`), easing duration (`easeDuration`), and easing function (`easeFunction`).  
  The phase value consists of an integer part (base phase) and a fractional part (progress with applied easing).  
  By default, one cycle progresses over 8 units, with easing applied during the last 2 units.

- **Arguments**:  
  - `cycleLength`: Length of the cycle (default: `8`).  
  - `easeDuration`: Duration of easing. Must be a positive value smaller than the cycle length (default: `2`).  
  - `easeFunction`: Easing function to use. Defaults to `Easing.easeInOutSine`.

- **Example**:  
  Setting BPM to 120 and calling `getPhase(8, 2)` will return a value that progresses over 8 beats at BPM 120, with easing applied over the last 2 beats.

### 2. `leapNoise()`

- **Description**:  
  Generates Perlin Noise values synchronized with rhythm (BPM).  
  This function interpolates noise values generated for the current and next cycles using easing, resulting in smooth noise patterns.

- **Arguments**:  
  - `cycleLength`: Length of the cycle (default: `8`).  
  - `easeDuration`: Duration of easing. Must be a positive value smaller than the cycle length (default: `2`).  
  - `seed`: Seed value for noise generation. Specify as an array with two elements `[x, y]`.  
  - `easeFunction`: Easing function to use. Defaults to `Easing.easeInOutSine`.

- **Example**:  
  Setting BPM to 120 and calling `leapNoise(8, 2, [0, 0])` will return a value that transitions smoothly between random values within a range of 0–1 over an 8-beat cycle at BPM 120, with easing applied over the last 2 beats. `[0,0]` represents the seed value.

### 3. `tapTempo()`

- **Description**:  
  A function for adjusting BPM using tap tempo. By using this function in conjunction with specific events, you can add tap tempo functionality.  
  The BPM is calculated based on the most recent five taps, and tap data older than five seconds is discarded.

- **Example**:

```javascript
function keyPressed() {
    // Pressing TAPTEMPO_KEY at regular intervals changes the tempo.
    if (keyCode === TAPTEMPO_KEY) {
        gvm.tapTempo();
    }
}
```

## Easing Functions

This library provides a variety of easing functions for smooth transitions. These are all available as static methods and take progress values (0–1) as arguments, returning interpolated results.

### Main Easing Functions

| Function Name              | Description                                                         |
|----------------------------|---------------------------------------------------------------------|
| `Easing.easeInSine(x)`     | Generates motion that accelerates gradually.                        |
| `Easing.easeOutSine(x)`    | Generates motion that decelerates gradually.                        |
| `Easing.easeInOutSine(x)`  | Generates motion with smooth acceleration and deceleration.         |
| `Easing.easeInQuad(x)`     | Generates motion that accelerates quadratically.                    |
| `Easing.easeOutQuad(x)`    | Generates motion that decelerates quadratically.                    |
| `Easing.easeInOutQuad(x)`  | Generates motion with quadratic acceleration and deceleration.      |
| ...                        | Many other easing functions are available (see code for details).   |

## License

MIT License

## Latest Version

v1.3.1

## Last Updated

2025.02.07

## Author

Koya Kimura