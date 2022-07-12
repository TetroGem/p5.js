p5.Gradient = function(pInst, vals) {
  this.mode = pInst._gradientMode;

  // Calculate normalized RGBA values.
  if (this.mode !== constants.HORIZONTAL && this.mode !== constants.VERTICAL) {
    throw new Error(`${this.mode} is an invalid gradientMode.`);
  } else {
    this._array = p5.Gradient._parseInputs.apply(this, vals);
  }
};

p5.Gradient._parseInputs = function(color1, color2) {
  return color1, color2;
};
