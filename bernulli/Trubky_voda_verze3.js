(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Vrtulka1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AgGAZQgLgDgFgJQgFgKADgJQADgLAJgFQAKgFAJADQAKADAGAJQAFAKgDAJQgDAKgJAGQgGADgHAAIgGgBg");
	this.shape.setTransform(15.9533,10.6637);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("AgLArQgSgFgJgQQgKgQAFgRQAGgSAQgJQAQgJARAFQASAFAJAQQAJAQgFARQgFASgQAJQgKAGgLAAQgGAAgGgCg");
	this.shape_1.setTransform(15.9531,10.6865);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("AgIA0QgcgOgRgSQgYgYAFgZQAFgWASgIQASgIATAJQARAJAIASIAQAlQALAUAUACIAHAAQAEACACAFQACAFgCAEQgDAHgLAGQgNAHgOAAQgUAAgUgMg");
	this.shape_2.setTransform(7.3811,6.3513);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("AhBA0QgFgBgDgEQgFgGABgMQADghAkgXQAagRAXgFQAigIASARQARAOgCAUQgCASgRAMQgRAMgUgDIgngFQgYAAgLARIgEAFQgDADgDAAIgDgBg");
	this.shape_3.setTransform(23.7979,5.5095);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("AgdBMQgQgLgBgWQgBgUALgQIAZgfQALgVgIgSIgDgGQgBgEAEgEQADgEAFgBQAHgBAKAHQAcATACAqQABAfgHAYQgKAhgYAHQgHADgHAAQgMAAgKgHg");
	this.shape_4.setTransform(16.1092,20.3192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Vrtulka1, new cjs.Rectangle(0,0,31.6,28.6), null);


(lib.spojHorni = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D86061").s().p("AoMh/IAFlAIQUAAIAAN/g");
	this.shape.setTransform(-66.95,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D86061").s().p("AoMiJIAFlAIQUAVIAAN+g");
	this.shape_1.setTransform(-66.95,40.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D86061").s().p("AoMiUIAFlAIQUArIAAN+g");
	this.shape_2.setTransform(-66.95,41.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D86061").s().p("AoMifIAFlAIQUBBIAAN+g");
	this.shape_3.setTransform(-66.95,42.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D86061").s().p("AoMiqIAFlAIQUBWIAAN+g");
	this.shape_4.setTransform(-66.95,43.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D86061").s().p("AoMi0IAFlAIQUBrIAAN+g");
	this.shape_5.setTransform(-66.95,44.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D86061").s().p("AoMi/IAFlAIQUCBIAAN+g");
	this.shape_6.setTransform(-66.95,45.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D86061").s().p("AoMjKIAFlAIQUCWIAAN/g");
	this.shape_7.setTransform(-66.95,46.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D86061").s().p("AoMjUIAFlAIQUCrIAAN+g");
	this.shape_8.setTransform(-66.95,47.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D86061").s().p("AoMjfIAFlAIQUDBIAAN+g");
	this.shape_9.setTransform(-66.95,48.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D86061").s().p("AoMjqIAFlAIQUDXIAAN+g");
	this.shape_10.setTransform(-66.95,50.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D86061").s().p("AoMj1IAFlAIQUDtIAAN9g");
	this.shape_11.setTransform(-66.95,51.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D86061").s().p("AoMj/IAFlAIQUEBIAAN+g");
	this.shape_12.setTransform(-66.95,52.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D86061").s().p("AoMkKIAFlAIQUEXIAAN+g");
	this.shape_13.setTransform(-66.95,53.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D86061").s().p("AoMkVIAFlAIQUEtIAAN+g");
	this.shape_14.setTransform(-66.95,54.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D86061").s().p("AoMkgIAFlAIQUFCIAAN/g");
	this.shape_15.setTransform(-66.95,55.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D86061").s().p("AoMkqIAFlAIQUFXIAAN+g");
	this.shape_16.setTransform(-66.95,56.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D86061").s().p("AoMk1IAFlAIQUFtIAAN+g");
	this.shape_17.setTransform(-66.95,57.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D86061").s().p("AoMlAIAFlAIQUGDIAAN+g");
	this.shape_18.setTransform(-66.95,58.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D86061").s().p("AoMlKIAFlAIQUGXIAAN+g");
	this.shape_19.setTransform(-66.95,59.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D86061").s().p("AoMlVIAFlAIQUGtIAAN+g");
	this.shape_20.setTransform(-66.95,60.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D86061").s().p("AoMlgIAFlAIQUHDIAAN+g");
	this.shape_21.setTransform(-66.95,61.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D86061").s().p("AoMlrIAFlAIQUHZIAAN9g");
	this.shape_22.setTransform(-66.95,62.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D86061").s().p("AoMl1IAFlAIQUHtIAAN+g");
	this.shape_23.setTransform(-66.95,63.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D86061").s().p("AoMmAIAFlAIQUIDIAAN+g");
	this.shape_24.setTransform(-66.95,65.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D86061").s().p("AoMmLIAFlAIQUIZIAAN+g");
	this.shape_25.setTransform(-66.95,66.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D86061").s().p("AoMmWIAFlAIQUIuIAAN/g");
	this.shape_26.setTransform(-66.95,67.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D86061").s().p("AoMmgIAFlAIQUJDIAAN+g");
	this.shape_27.setTransform(-66.95,68.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D86061").s().p("AoMmrIAFlAIQUJZIAAN+g");
	this.shape_28.setTransform(-66.95,69.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D86061").s().p("AoMm2IAFlAIQUJvIAAN+g");
	this.shape_29.setTransform(-66.95,70.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D86061").s().p("AoMnBIAFlAIQUKFIAAN9g");
	this.shape_30.setTransform(-66.95,71.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D86061").s().p("AoMnLIAFlAIQUKZIAAN+g");
	this.shape_31.setTransform(-66.95,72.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D86061").s().p("AoMnWIAFlAIQUKvIAAN+g");
	this.shape_32.setTransform(-66.95,73.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D86061").s().p("AoMnhIAFlAIQULEIAAN/g");
	this.shape_33.setTransform(-66.95,74.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D86061").s().p("AoMnrIAFlAIQULZIAAN+g");
	this.shape_34.setTransform(-66.95,75.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D86061").s().p("AoMn2IAFlAIQULvIAAN+g");
	this.shape_35.setTransform(-66.95,76.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D86061").s().p("AoMoBIAFlAIQUMFIAAN+g");
	this.shape_36.setTransform(-66.95,77.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D86061").s().p("AoMoMIAFlAIQUMbIAAN9g");
	this.shape_37.setTransform(-66.95,79);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D86061").s().p("AoMoWIAFlAIQUMvIAAN+g");
	this.shape_38.setTransform(-66.95,80.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D86061").s().p("AoMohIAFlAIQUNFIAAN+g");
	this.shape_39.setTransform(-66.95,81.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D86061").s().p("AoMosIAFlAIQUNbIAAN+g");
	this.shape_40.setTransform(-66.95,82.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D86061").s().p("AoMo3IAFlAIQUNwIAAN/g");
	this.shape_41.setTransform(-66.95,83.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D86061").s().p("AoMpBIAFlAIQUOEIAAN/g");
	this.shape_42.setTransform(-66.95,84.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D86061").s().p("AoMpMIAFlAIQUOaIAAN/g");
	this.shape_43.setTransform(-66.95,85.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D86061").s().p("AoMpXIAFlAIQUOvIAAOAg");
	this.shape_44.setTransform(-66.95,86.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D86061").s().p("AoMphIAFlAIQUPEIAAN/g");
	this.shape_45.setTransform(-66.95,87.575);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D86061").s().p("AoMpsIAFlAIQUPaIAAN/g");
	this.shape_46.setTransform(-66.95,88.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D86061").s().p("AoMp3IAFlAIQUPwIAAN/g");
	this.shape_47.setTransform(-66.95,89.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D86061").s().p("AoMqCIAFlAIQUQGIAAN+g");
	this.shape_48.setTransform(-66.95,90.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},51).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).wait(1));

	// Vrstva_6
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D86061").s().p("AoMHlIQZz/IAAN5IwZK8g");
	this.shape_49.setTransform(-67.5,-54.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D86061").s().p("AoMHYIQZzlIAAN5IwZKig");
	this.shape_50.setTransform(-67.5,-53.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D86061").s().p("AoMHMIQZzNIAAN5IwZKJg");
	this.shape_51.setTransform(-67.5,-51.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D86061").s().p("AoMG/IQZyzIAAN5IwZJvg");
	this.shape_52.setTransform(-67.5,-50.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D86061").s().p("AoMGyIQZyZIAAN5IwZJWg");
	this.shape_53.setTransform(-67.5,-49.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D86061").s().p("AoMGlIQZx/IAAN5IwZI8g");
	this.shape_54.setTransform(-67.5,-48.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D86061").s().p("AoMGYIQZxlIAAN5IwZIig");
	this.shape_55.setTransform(-67.5,-46.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D86061").s().p("AoMGMIQZxMIAAN4IwZIJg");
	this.shape_56.setTransform(-67.5,-45.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D86061").s().p("AoMF/IQZwzIAAN5IwZHvg");
	this.shape_57.setTransform(-67.5,-44.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D86061").s().p("AoMFyIQZwZIAAN5IwZHWg");
	this.shape_58.setTransform(-67.5,-42.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D86061").s().p("AoMFlIQZv/IAAN5IwZG8g");
	this.shape_59.setTransform(-67.5,-41.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D86061").s().p("AoMFYIQZvlIAAN5IwZGig");
	this.shape_60.setTransform(-67.5,-40.375);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D86061").s().p("AoMFMIQZvMIAAN5IwZGIg");
	this.shape_61.setTransform(-67.5,-39.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D86061").s().p("AoME/IQZuyIAAN5IwZFug");
	this.shape_62.setTransform(-67.5,-37.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D86061").s().p("AoMEyIQZuZIAAN5IwZFWg");
	this.shape_63.setTransform(-67.5,-36.525);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D86061").s().p("AoMElIQZt/IAAN5IwZE8g");
	this.shape_64.setTransform(-67.5,-35.25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D86061").s().p("AoMEYIQZtlIAAN5IwZEig");
	this.shape_65.setTransform(-67.5,-33.975);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D86061").s().p("AoMEMIQZtNIAAN6IwZEIg");
	this.shape_66.setTransform(-67.5,-32.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D86061").s().p("AoMD/IQZsyIAAN5IwZDug");
	this.shape_67.setTransform(-67.5,-31.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D86061").s().p("AoMDyIQZsZIAAN5IwZDWg");
	this.shape_68.setTransform(-67.5,-30.125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D86061").s().p("AoMDlIQZr/IAAN5IwZC8g");
	this.shape_69.setTransform(-67.5,-28.85);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D86061").s().p("AoMDYIQZrlIAAN5IwZCig");
	this.shape_70.setTransform(-67.5,-27.575);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D86061").s().p("AoMDMIQZrNIAAN5IwZCJg");
	this.shape_71.setTransform(-67.5,-26.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D86061").s().p("AoMC/IQZqzIAAN5IwZBvg");
	this.shape_72.setTransform(-67.5,-25);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D86061").s().p("AoMCyIQZqZIAAN5IwZBWg");
	this.shape_73.setTransform(-67.5,-23.725);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D86061").s().p("AoMClIQZp/IAAN5IwZA8g");
	this.shape_74.setTransform(-67.5,-22.45);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D86061").s().p("AoMCYIQZplIAAN5IwZAig");
	this.shape_75.setTransform(-67.5,-21.175);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D86061").s().p("AoMCMIQZpNIAAN5IwZAJg");
	this.shape_76.setTransform(-67.5,-19.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D86061").s().p("AoMGsIAAk2IQZoyIAAN5g");
	this.shape_77.setTransform(-67.5,-17.75);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D86061").s().p("AoMGSIAAk1IQZoZIAAN5g");
	this.shape_78.setTransform(-67.5,-15.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D86061").s().p("AoMF5IAAk2IQZn/IAAN5g");
	this.shape_79.setTransform(-67.5,-12.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D86061").s().p("AoMFfIAAk1IQZnmIAAN5g");
	this.shape_80.setTransform(-67.5,-10.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D86061").s().p("AoMFGIAAk2IQZnMIAAN5g");
	this.shape_81.setTransform(-67.5,-7.55);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D86061").s().p("AoMEsIAAk1IQZmzIAAN5g");
	this.shape_82.setTransform(-67.5,-4.95);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D86061").s().p("AoMESIAAk0IQZmaIAAN5g");
	this.shape_83.setTransform(-67.5,-2.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D86061").s().p("AoMD5IAAk1IQZmAIAAN5g");
	this.shape_84.setTransform(-67.5,0.15);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D86061").s().p("AoMDfIAAk0IQZlnIAAN5g");
	this.shape_85.setTransform(-67.5,2.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D86061").s().p("AoMDGIAAk1IQZlNIAAN5g");
	this.shape_86.setTransform(-67.5,5.25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D86061").s().p("AoMCsIAAk1IQZkzIAAN5g");
	this.shape_87.setTransform(-67.5,7.85);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D86061").s().p("AoMCSIAAk0IQZkaIAAN5g");
	this.shape_88.setTransform(-67.5,10.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D86061").s().p("AoMB5IAAk1IQZkAIAAN5g");
	this.shape_89.setTransform(-67.5,12.95);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D86061").s().p("AoMBfIAAk0IQZjnIAAN5g");
	this.shape_90.setTransform(-67.5,15.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D86061").s().p("AoMBGIAAk1IQZjNIAAN5g");
	this.shape_91.setTransform(-67.5,18.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D86061").s().p("AoMAsIAAk1IQZizIAAN5g");
	this.shape_92.setTransform(-67.5,20.65);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D86061").s().p("AoMASIAAk0IQZiaIAAN5g");
	this.shape_93.setTransform(-67.5,23.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D86061").s().p("AoMgGIAAk2IQZiAIAAN5g");
	this.shape_94.setTransform(-67.5,25.75);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D86061").s().p("AoMggIAAk1IQZhnIAAN5g");
	this.shape_95.setTransform(-67.5,28.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D86061").s().p("AoMg5IAAk2IQZhNIAAN5g");
	this.shape_96.setTransform(-67.5,30.85);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D86061").s().p("AoMhTIAAk2IQZgzIAAN5g");
	this.shape_97.setTransform(-67.5,33.45);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D86061").s().p("AoMhtIAAk1IQZgaIAAN5g");
	this.shape_98.setTransform(-67.5,36);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D86061").s().p("AoMiGIAAk2IQZAAIAAN5g");
	this.shape_99.setTransform(-67.5,38.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49}]}).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[]},1).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-133.9,105.6,321);


(lib.PulkruhModry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5CC5FF").s().p("An8D+QAAjSCWiUQCViVDRAAQDTAACVCVQCUCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PulkruhModry, new cjs.Rectangle(0,0,101.7,50.9), null);


(lib.prumer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2F1113","#912829"],[0,1],-6.9,0,6.9,0).s().p("AgwB9QgUgzAAhKQAAhKAUgzQAUg0AcAAQAdAAAUA0QAUA1AABIQAABJgUA0QgUA1gdAAQgcAAgUg1g");
	this.shape.setTransform(-6.925,17.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.prumer, new cjs.Rectangle(-13.8,0,13.8,35.6), null);


(lib.Kruh2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CCFF").s().p("AgwB9QgUgzAAhKQAAhKAUgzQAUg0AcAAQAdAAAUA0QAUA1AABIQAABJgUA0QgUA1gdAAQgcAAgUg1g");
	this.shape.setTransform(6.925,17.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Vrstva_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F9B620").ss(0.6).p("AgkixQAdAAATA0QAUA1AABIQAABJgUA0QgTA1gdAA");
	this.shape_1.setTransform(10.575,17.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Kruh2, new cjs.Rectangle(0,-1,14.8,37.6), null);


(lib.Kruh1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B74C4B").s().p("AggDJQgPgRgMgdQgZhBAAhaQAAhYAZhBQALgeAQgRQAPgRARAAQASAAAPARQAQARALAeQAZA+AABbQAABcgZA/QgLAdgQARQgPARgSAAQgRAAgPgRg");
	this.shape.setTransform(8.5,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Kruh1, new cjs.Rectangle(0,0,17,43.6), null);


(lib.Group_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AgTBFQgIgdAAgoQAAgmAIgeQAJgdAKAAQAMAAAIAdQAIAeAAAmQAAAngIAeQgIAdgMAAQgKAAgJgdg");
	this.shape.setTransform(2.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_30, new cjs.Rectangle(0,0,5.6,19.6), null);


(lib.Group_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AhTIHQgUgygJg3IgGgtIAAwUIgUgxIA8AAIAAREIAFApQAJAxASAsQA4CNCBAsIgNAmQiRgyhAicg");
	this.shape.setTransform(13.875,72.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_33, new cjs.Rectangle(0,0,27.8,145), null);


(lib.Group_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002D48").s().p("AhdISQgUgmgJgpQgGgYAAgNIgBAAIAAxXIBBAAIgZAwIAAQmQAFAyAdA0QA4BmCBArIgOAmQiQgyhBh2g");
	this.shape.setTransform(12.95,69.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_32, new cjs.Rectangle(0,0,25.9,139.6), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#950100").s().p("Ag1BaQgOgIgGgQQAUgEAUgQQAUgRANgYQAPgaADgbQAEgagJgUQAVgEAOAJQAYANACAkQACAkgVAkQgWAmgfARQgRAJgPAAQgMAAgLgGg");
	this.shape.setTransform(7.3837,9.5648);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,14.8,19.2), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E26C50").s().p("AgrBCQgRgHgJgQQgKgQgBgXQAGAbAUALQAZAOAhgRQAigRAWgkQAQgaAEgdQAEAigQAjQgTAmggAUQgUAMgTAAQgLAAgKgEg");
	this.shape.setTransform(8.065,6.9883);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,16.2,14), null);


(lib.VrtulkaTocici1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrtulka1
	this.instance = new lib.Vrtulka1();
	this.instance.setTransform(15.9,10.6,1,1,0,0,0,15.9,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.8,regY:14.3,rotation:3.6735,x:15.55,y:14.3},0).wait(1).to({rotation:7.3469,x:15.25},0).wait(1).to({rotation:11.0204,x:15.05,y:14.25},0).wait(1).to({rotation:14.6939,x:14.85,y:14.2},0).wait(1).to({rotation:18.3673,x:14.65,y:14.1},0).wait(1).to({rotation:22.0408,x:14.4,y:14.05},0).wait(1).to({rotation:25.7143,x:14.2,y:13.95},0).wait(1).to({rotation:29.3878,x:13.95,y:13.8},0).wait(1).to({rotation:33.0612,x:13.8,y:13.65},0).wait(1).to({rotation:36.7347,x:13.55,y:13.5},0).wait(1).to({rotation:40.4082,x:13.45,y:13.4},0).wait(1).to({rotation:44.0816,x:13.25,y:13.2},0).wait(1).to({rotation:47.7551,x:13.05,y:13.05},0).wait(1).to({rotation:51.4286,x:12.9,y:12.85},0).wait(1).to({rotation:55.102,x:12.75,y:12.65},0).wait(1).to({rotation:58.7755,x:12.65,y:12.45},0).wait(1).to({rotation:62.449,x:12.5,y:12.25},0).wait(1).to({rotation:66.1224,x:12.45,y:12.05},0).wait(1).to({rotation:69.7959,x:12.4,y:11.85},0).wait(1).to({rotation:73.4694,x:12.3,y:11.55},0).wait(1).to({rotation:77.1429,x:12.2,y:11.35},0).wait(1).to({rotation:80.8163,y:11.15},0).wait(1).to({rotation:84.4898,x:12.15,y:10.9},0).wait(1).to({rotation:88.1633,y:10.65},0).wait(1).to({rotation:91.8367,x:12.2,y:10.4},0).wait(1).to({rotation:95.5102,y:10.2},0).wait(1).to({rotation:99.1837,x:12.3,y:9.9},0).wait(1).to({rotation:102.8571,y:9.7},0).wait(1).to({rotation:106.5306,x:12.35,y:9.5},0).wait(1).to({rotation:110.2041,x:12.45,y:9.25},0).wait(1).to({rotation:113.8776,x:12.5,y:9},0).wait(1).to({rotation:117.551,x:12.65,y:8.8},0).wait(1).to({rotation:121.2245,x:12.75,y:8.55},0).wait(1).to({rotation:124.898,x:12.85,y:8.35},0).wait(1).to({rotation:128.5714,x:13.05,y:8.2},0).wait(1).to({rotation:132.2449,x:13.2,y:8.05},0).wait(1).to({rotation:135.9184,x:13.35,y:7.9},0).wait(1).to({rotation:139.5918,x:13.55,y:7.7},0).wait(1).to({rotation:143.2653,x:13.75,y:7.55},0).wait(1).to({rotation:146.9388,x:13.95,y:7.4},0).wait(1).to({rotation:150.6122,x:14.2,y:7.3},0).wait(1).to({rotation:154.2857,x:14.35,y:7.2},0).wait(1).to({rotation:157.9592,x:14.6,y:7.15},0).wait(1).to({rotation:161.6327,x:14.8,y:7.05},0).wait(1).to({rotation:165.3061,x:15,y:6.95},0).wait(1).to({rotation:168.9796,x:15.25,y:6.9},0).wait(1).to({rotation:172.6531,x:15.5,y:6.85},0).wait(1).to({rotation:176.3265,x:15.75,y:6.9},0).wait(1).to({rotation:180,x:16},0).wait(1).to({rotation:183.6735,x:16.2},0).wait(1).to({rotation:187.3469,x:16.5},0).wait(1).to({rotation:191.0204,x:16.7,y:6.95},0).wait(1).to({rotation:194.6939,x:16.9,y:7},0).wait(1).to({rotation:198.3673,x:17.1,y:7.1},0).wait(1).to({rotation:202.0408,x:17.35,y:7.15},0).wait(1).to({rotation:205.7143,x:17.55,y:7.25},0).wait(1).to({rotation:209.3878,x:17.8,y:7.4},0).wait(1).to({rotation:213.0612,x:17.95,y:7.55},0).wait(1).to({rotation:216.7347,x:18.2,y:7.7},0).wait(1).to({rotation:220.4082,x:18.3,y:7.8},0).wait(1).to({rotation:224.0816,x:18.5,y:8},0).wait(1).to({rotation:227.7551,x:18.7,y:8.15},0).wait(1).to({rotation:231.4286,x:18.85,y:8.35},0).wait(1).to({rotation:235.102,x:19,y:8.55},0).wait(1).to({rotation:238.7755,x:19.1,y:8.75},0).wait(1).to({rotation:242.449,x:19.25,y:8.95},0).wait(1).to({rotation:246.1224,x:19.3,y:9.15},0).wait(1).to({rotation:249.7959,x:19.35,y:9.35},0).wait(1).to({rotation:253.4694,x:19.45,y:9.65},0).wait(1).to({rotation:257.1429,x:19.55,y:9.85},0).wait(1).to({rotation:260.8163,y:10.05},0).wait(1).to({rotation:264.4898,x:19.6,y:10.3},0).wait(1).to({rotation:268.1633,y:10.55},0).wait(1).to({rotation:271.8367,x:19.55,y:10.8},0).wait(1).to({rotation:275.5102,y:11},0).wait(1).to({rotation:279.1837,x:19.45,y:11.3},0).wait(1).to({rotation:282.8571,y:11.5},0).wait(1).to({rotation:286.5306,x:19.4,y:11.7},0).wait(1).to({rotation:290.2041,x:19.3,y:11.95},0).wait(1).to({rotation:293.8776,y:12.15},0).wait(1).to({rotation:297.551,x:19.15,y:12.35},0).wait(1).to({rotation:301.2245,x:19.05,y:12.6},0).wait(1).to({rotation:304.898,x:18.95,y:12.8},0).wait(1).to({rotation:308.5714,x:18.75,y:12.95},0).wait(1).to({rotation:312.2449,x:18.6,y:13.1},0).wait(1).to({rotation:315.9184,x:18.45,y:13.25},0).wait(1).to({rotation:319.5918,x:18.25,y:13.45},0).wait(1).to({rotation:323.2653,x:18.05,y:13.6},0).wait(1).to({rotation:326.9388,x:17.85,y:13.75},0).wait(1).to({rotation:330.6122,x:17.6,y:13.85},0).wait(1).to({rotation:334.2857,x:17.45,y:13.95},0).wait(1).to({rotation:337.9592,x:17.2,y:14},0).wait(1).to({rotation:341.6327,x:17,y:14.1},0).wait(1).to({rotation:345.3061,x:16.8,y:14.2},0).wait(1).to({rotation:348.9796,x:16.55,y:14.25},0).wait(1).to({rotation:352.6531,x:16.3,y:14.3},0).wait(1).to({rotation:356.3265,x:16.05,y:14.25},0).wait(1).to({rotation:360,x:15.8,y:14.3},0).wait(1).to({regX:15.9,regY:10.7,x:15.9,y:10.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-7.4,36.2,36.1);


(lib.ValecGlomerulus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// valecObrazek
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape.setTransform(17.925,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_1.setTransform(17.925,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_2.setTransform(17.925,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_3.setTransform(17.925,26.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_4.setTransform(17.925,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_5.setTransform(17.925,39.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_6.setTransform(17.925,45.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_7.setTransform(17.925,52.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_8.setTransform(17.925,58.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_9.setTransform(17.925,64.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_10.setTransform(17.925,71.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_11.setTransform(17.925,77.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_12.setTransform(17.925,83.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_13.setTransform(17.925,89.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_14.setTransform(17.925,96.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_15.setTransform(17.925,102.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#EFEFEF").p("AgYAAIAxAA");
	this.shape_16.setTransform(17.925,108.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#EFEFEF").p("AgqAAIBVAA");
	this.shape_17.setTransform(16.175,8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#EFEFEF").p("AgqAAIBVAA");
	this.shape_18.setTransform(16.175,33.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#EFEFEF").p("AgqAAIBVAA");
	this.shape_19.setTransform(16.175,58.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#EFEFEF").p("AgqAAIBVAA");
	this.shape_20.setTransform(16.175,83.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#EFEFEF").p("AgqAAIBVAA");
	this.shape_21.setTransform(16.175,108.9);

	this.instance = new lib.Group_32();
	this.instance.setTransform(31,70.15,1,1,0,0,0,13,69.8);
	this.instance.alpha = 0.1484;

	this.instance_1 = new lib.Group_33();
	this.instance_1.setTransform(18.15,73.7,1,1,0,0,0,13.8,72.5);
	this.instance_1.alpha = 0.4688;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#161616").ss(1.5).p("AAtIKQgvgmgbg4Qgag3AAg+IAAv/IAdg5IkFAAIAgA9IAAP7QAABtAvBhQAvBhBWBEIAGAEQBJAyBRAQQA2ALCPAHIAKjHQh6gGgmgHQgugIgpgcg");
	this.shape_22.setTransform(28.754,77.0429);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.instance_1},{t:this.instance},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(100));

	// ValecTekutinaCervenaPohyb
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#92DFFF").s().p("ABDDOQhQgRhKgxIgFgFQi1iMAAjVIAAgFIDIABIAAAEQAAA9AbAwQAYAuAxAoQApAaAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_23.setTransform(30.55,131.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#92DFFF").s().p("ABDDTQhQgRhKgxIgFgFQi1iMAAjVIAAgPIDIAAIAAAPQAAA9AbAwQAYAuAxAoQApAaAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_24.setTransform(30.55,131.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#92DFFF").s().p("ABDDYQhQgQhKgyIgFgEQi1iOAAjTIAAgaIDIAAIAAAaQAAA8AbAxQAYAtAxAoQApAbAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_25.setTransform(30.55,130.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#92DFFF").s().p("ABDDeQhQgRhKgyIgFgEQi1iNAAjUIAAglIDIABIAAAkQAAA9AbAwQAYAtAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_26.setTransform(30.55,130.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#92DFFF").s().p("ABDDjQhQgRhKgxIgFgFQi1iNAAjUIAAgvIDIABIAAAuQAAA9AbAwQAYAuAxAoQApAaAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_27.setTransform(30.55,129.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#92DFFF").s().p("ABDDoQhQgRhKgxIgFgFQi1iNAAjUIAAg5IDIABIAAA4QAAA9AbAwQAYAuAxAnQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_28.setTransform(30.55,129.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#92DFFF").s().p("ABDDtQhQgQhKgyIgFgEQi1iOAAjTIAAhEIDIAAIAABEQAAA8AbAxQAYAtAxAnQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_29.setTransform(30.55,128.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#92DFFF").s().p("ABDDzQhQgRhKgyIgFgEQi1iNAAjUIAAhOIDIAAIAABOQAAA9AbAwQAYAtAxAnQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_30.setTransform(30.55,128);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#92DFFF").s().p("ABDD4QhQgRhKgxIgFgFQi1iNAAjUIAAhZIDIABIAABYQAAA9AbAwQAYAuAxAnQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_31.setTransform(30.55,127.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#92DFFF").s().p("ABDD9QhQgRhKgxIgFgFQi1iNAAjUIAAhjIDIABIAABiQAAA9AbAwQAYAuAxAnQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_32.setTransform(30.55,126.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#92DFFF").s().p("ABDECQhQgQhKgyIgFgEQi1iOAAjTIAAhuIDIAAIAABuQAAA8AbAxQAYAtAxAnQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_33.setTransform(30.55,126.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#92DFFF").s().p("ABDEIQhQgRhKgyIgFgEQi1iNAAjUIAAh5IDIABIAAB4QAAA9AbAwQAYAtAxAnQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_34.setTransform(30.55,125.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#92DFFF").s().p("ABDENQhQgRhKgxIgFgFQi1iNAAjUIAAiDIDIABIAACCQAAA9AbAwQAYAuAxAnQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_35.setTransform(30.55,125.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#92DFFF").s().p("ABDESQhQgRhKgxIgFgFQi1iNAAjUIAAiNIDIAAIAACNQAAA9AbAwQAYAtAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_36.setTransform(30.55,124.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#92DFFF").s().p("ABDEXQhQgQhKgyIgFgEQi1iOAAjTIAAiYIDIAAIAACYQAAA8AbAxQAYAsAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_37.setTransform(30.55,124.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#92DFFF").s().p("ABDEdQhQgRhKgyIgFgEQi1iNAAjUIAAijIDIABIAACiQAAA9AbAwQAYAsAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_38.setTransform(30.55,123.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#92DFFF").s().p("ABDEiQhQgRhKgxIgFgFQi1iNAAjUIAAitIDIABIAACsQAAA9AbAwQAYAtAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_39.setTransform(30.55,123.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#92DFFF").s().p("ABDEnQhQgRhKgxIgFgFQi1iNAAjUIAAi3IDIABIAAC2QAAA9AbAwQAYAtAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_40.setTransform(30.55,122.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#92DFFF").s().p("ABDEsQhQgQhKgyIgFgEQi1iOAAjTIAAjCIDIAAIAADCQAAA8AbAxQAYAsAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_41.setTransform(30.55,122.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#92DFFF").s().p("ABDEyQhQgRhKgyIgFgEQi1iNAAjUIAAjMIDIAAIAADMQAAA9AbAwQAYAsAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_42.setTransform(30.55,121.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#92DFFF").s().p("ABDE3QhQgRhKgxIgFgFQi1iNAAjUIAAjXIDIABIAADWQAAA9AbAwQAYAtAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_43.setTransform(30.55,121.175);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#92DFFF").s().p("ABDE8QhQgRhKgxIgFgFQi1iNAAjUIAAjhIDIAAIAADhQAAA9AbAvQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_44.setTransform(30.55,120.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#92DFFF").s().p("ABDFBQhQgQhKgyIgFgEQi1iOAAjTIAAjsIDIAAIAADsQAAA8AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_45.setTransform(30.55,120.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#92DFFF").s().p("ABDFHQhQgRhKgyIgFgEQi1iNAAjUIAAj3IDIABIAAD2QAAA9AbAvQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_46.setTransform(30.55,119.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#92DFFF").s().p("ABDFMQhQgRhKgxIgFgFQi1iNAAjUIAAkBIDIABIAAEAQAAA9AbAvQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_47.setTransform(30.55,119.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#92DFFF").s().p("ABDFRQhQgRhKgxIgFgFQi1iNAAjUIAAkLIDIAAIAAELQAAA9AbAvQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_48.setTransform(30.55,118.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#92DFFF").s().p("ABDFWQhQgQhKgyIgFgEQi1iOAAjTIAAkWIDIAAIAAEWQAAA8AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_49.setTransform(30.55,118.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#92DFFF").s().p("ABDFcQhQgRhKgyIgFgEQi1iNAAjUIAAkhIDIABIAAEgQAAA9AbAvQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_50.setTransform(30.55,117.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#92DFFF").s().p("ABDFhQhQgRhKgxIgFgFQi1iNAAjUIAAkrIDIABIAAEqQAAA9AbAvQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_51.setTransform(30.55,116.975);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#92DFFF").s().p("ABDFmQhQgRhKgxIgFgFQi1iNAAjUIAAk1IDIABIAAE0QAAA9AbAvQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_52.setTransform(30.55,116.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#92DFFF").s().p("ABDFrQhQgQhKgyIgFgEQi1iOAAjTIAAlAIDIAAIAAFAQAAA8AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_53.setTransform(30.55,115.925);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#92DFFF").s().p("ABDFxQhQgRhKgyIgFgEQi1iNAAjUIAAlKIDIAAIAAFKQAAA8AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_54.setTransform(30.55,115.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#92DFFF").s().p("ABDF2QhQgRhKgxIgFgFQi1iNAAjUIAAlVIDIABIAAFUQAAA8AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_55.setTransform(30.55,114.875);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#92DFFF").s().p("ABDF7QhQgRhKgxIgFgFQi1iNAAjUIAAlfIDIAAIAAFfQAAA8AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_56.setTransform(30.55,114.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#92DFFF").s().p("ABDGAQhQgQhKgyIgFgEQi1iOAAjTIAAlqIDIAAIAAFqQAAA7AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_57.setTransform(30.55,113.825);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#92DFFF").s().p("ABDGGQhQgRhKgyIgFgEQi1iNAAjUIAAl1IDIABIAAF0QAAA8AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_58.setTransform(30.55,113.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#92DFFF").s().p("ABDGLQhQgRhKgxIgFgFQi1iNAAjUIAAl/IDIABIAAF+QAAA8AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_59.setTransform(30.55,112.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#92DFFF").s().p("ABDGQQhQgRhKgxIgFgFQi1iNAAjUIAAmJIDIAAIAAGJQAAA8AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_60.setTransform(30.55,112.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#92DFFF").s().p("ABDGVQhQgQhKgyIgFgEQi1iOAAjTIAAmUIDIAAIAAGUQAAA7AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_61.setTransform(30.55,111.725);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#92DFFF").s().p("ABDGbQhQgRhKgyIgFgEQi1iNAAjUIAAmfIDIABIAAGeQAAA8AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_62.setTransform(30.55,111.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#92DFFF").s().p("ABDGgQhQgRhKgxIgFgFQi1iNAAjUIAAmpIDIABIAAGoQAAA8AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_63.setTransform(30.55,110.675);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#92DFFF").s().p("ABDGlQhQgRhKgxIgFgFQi1iNAAjUIAAmzIDIABIAAGyQAAA8AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_64.setTransform(30.55,110.15);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#92DFFF").s().p("ABDGqQhQgQhKgyIgFgEQi1iOAAjUIAAm9IDIAAIAAG9QAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_65.setTransform(30.55,109.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#92DFFF").s().p("ABDGwQhQgRhKgyIgFgEQi1iNAAjVIAAnHIDIAAIAAHHQAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_66.setTransform(30.55,109.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#92DFFF").s().p("ABDG1QhQgRhKgxIgFgFQi1iNAAjVIAAnSIDIABIAAHRQAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_67.setTransform(30.55,108.575);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#92DFFF").s().p("ABDG6QhQgRhKgxIgFgFQi1iNAAjVIAAncIDIAAIAAHcQAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_68.setTransform(30.55,108.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#92DFFF").s().p("ABDG/QhQgQhKgyIgFgEQi1iOAAjUIAAnnIDIAAIAAHnQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_69.setTransform(30.55,107.525);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#92DFFF").s().p("ABDHFQhQgRhKgyIgFgEQi1iNAAjVIAAnyIDIABIAAHxQAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_70.setTransform(30.55,107);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#92DFFF").s().p("ABDHKQhQgRhKgxIgFgFQi1iNAAjVIAAn8IDIABIAAH7QAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_71.setTransform(30.55,106.475);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#92DFFF").s().p("ABDHPQhQgRhKgxIgFgFQi1iNAAjVIAAoGIDIAAIAAIGQAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_72.setTransform(30.55,105.95);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#92DFFF").s().p("ABDHUQhQgRhKgxIgFgFQi1iNAAjVIAAoQIDIAAIAAIQQAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_73.setTransform(30.55,105.45);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#92DFFF").s().p("ABDHZQhQgQhKgyIgFgEQi1iOAAjUIAAobIDIAAIAAIbQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_74.setTransform(30.55,104.925);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#92DFFF").s().p("ABDHfQhQgRhKgyIgFgEQi1iNAAjVIAAomIDIABIAAIlQAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_75.setTransform(30.55,104.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#92DFFF").s().p("ABDHkQhQgRhKgxIgFgFQi1iNAAjVIAAowIDIABIAAIvQAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_76.setTransform(30.55,103.875);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#92DFFF").s().p("ABDHpQhQgRhKgxIgFgFQi1iNAAjVIAAo6IDIABIAAI5QAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_77.setTransform(30.55,103.35);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#92DFFF").s().p("ABDHuQhQgQhKgyIgFgEQi1iOAAjUIAApFIDIAAIAAJFQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_78.setTransform(30.55,102.825);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#92DFFF").s().p("ABDH0QhQgRhKgyIgFgEQi1iNAAjVIAApPIDIAAIAAJPQAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_79.setTransform(30.55,102.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#92DFFF").s().p("ABDH5QhQgRhKgxIgFgFQi1iNAAjVIAApaIDIABIAAJZQAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_80.setTransform(30.55,101.775);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#92DFFF").s().p("ABDH+QhQgRhKgxIgFgFQi1iNAAjVIAApkIDIABIAAJjQAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_81.setTransform(30.55,101.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#92DFFF").s().p("ABDIDQhQgQhKgyIgFgEQi1iOAAjUIAApvIDIAAIAAJvQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_82.setTransform(30.55,100.725);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#92DFFF").s().p("ABDIJQhQgRhKgyIgFgEQi1iNAAjVIAAp6IDIABIAAJ5QAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_83.setTransform(30.55,100.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#92DFFF").s().p("ABDIOQhQgRhKgxIgFgFQi1iNAAjVIAAqEIDIABIAAKDQAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_84.setTransform(30.55,99.675);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#92DFFF").s().p("ABDITQhQgRhKgxIgFgFQi1iNAAjVIAAqOIDIAAIAAKOQAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_85.setTransform(30.55,99.15);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#92DFFF").s().p("ABDIYQhQgQhKgyIgFgEQi1iOAAjUIAAqZIDIAAIAAKZQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_86.setTransform(30.55,98.625);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#92DFFF").s().p("ABDIeQhQgRhKgyIgFgEQi1iNAAjVIAAqkIDIABIAAKjQAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_87.setTransform(30.55,98.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#92DFFF").s().p("ABDIjQhQgRhKgxIgFgFQi1iNAAjVIAAquIDIABIAAKtQAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_88.setTransform(30.55,97.575);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#92DFFF").s().p("ABDIoQhQgRhKgxIgFgFQi1iNAAjVIAAq4IDIABIAAK3QAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_89.setTransform(30.55,97.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#92DFFF").s().p("ABDItQhQgQhKgyIgFgEQi1iOAAjUIAArDIDIAAIAALDQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_90.setTransform(30.55,96.525);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#92DFFF").s().p("ABDIzQhQgRhKgyIgFgEQi1iNAAjVIAArNIDIAAIAALNQAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_91.setTransform(30.55,96);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#92DFFF").s().p("ABDI4QhQgRhKgxIgFgFQi1iNAAjVIAArYIDIABIAALXQAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_92.setTransform(30.55,95.475);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#92DFFF").s().p("ABDI9QhQgRhKgxIgFgFQi1iNAAjVIAAriIDIABIAALhQAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_93.setTransform(30.55,94.95);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#92DFFF").s().p("ABDJCQhQgQhKgyIgFgEQi1iOAAjUIAArtIDIAAIAALtQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_94.setTransform(30.55,94.425);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#92DFFF").s().p("ABDJIQhQgRhKgyIgFgEQi1iNAAjVIAAr4IDIABIAAL3QAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_95.setTransform(30.55,93.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#92DFFF").s().p("ABDJNQhQgRhKgxIgFgFQi1iNAAjVIAAsCIDIABIAAMBQAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_96.setTransform(30.55,93.375);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#92DFFF").s().p("ABDJSQhQgRhKgxIgFgFQi1iNAAjVIAAsMIDIAAIAAMMQAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_97.setTransform(30.55,92.85);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#92DFFF").s().p("ABDJXQhQgQhKgyIgFgEQi1iOAAjUIAAsXIDIAAIAAMXQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_98.setTransform(30.55,92.325);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#92DFFF").s().p("ABDJdQhQgRhKgyIgFgEQi1iNAAjVIAAsiIDIABIAAMhQAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_99.setTransform(30.55,91.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#92DFFF").s().p("ABDJiQhQgRhKgxIgFgFQi1iNAAjVIAAssIDIABIAAMrQAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_100.setTransform(30.55,91.275);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#92DFFF").s().p("ABDJnQhQgRhKgxIgFgFQi1iNAAjVIAAs2IDIABIAAM1QAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_101.setTransform(30.55,90.75);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#92DFFF").s().p("ABDJsQhQgQhKgyIgFgEQi1iOAAjUIAAtBIDIAAIAANBQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_102.setTransform(30.55,90.225);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#92DFFF").s().p("ABDJyQhQgRhKgyIgFgEQi1iNAAjVIAAtLIDIAAIAANLQAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_103.setTransform(30.55,89.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#92DFFF").s().p("ABDJ3QhQgRhKgxIgFgFQi1iNAAjVIAAtWIDIABIAANVQAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_104.setTransform(30.55,89.175);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#92DFFF").s().p("ABDJ8QhQgRhKgxIgFgFQi1iNAAjVIAAtgIDIABIAANfQAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_105.setTransform(30.55,88.65);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#92DFFF").s().p("ABDKBQhQgQhKgyIgFgEQi1iOAAjUIAAtrIDIAAIAANrQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_106.setTransform(30.55,88.125);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#92DFFF").s().p("ABDKHQhQgRhKgyIgFgEQi1iNAAjVIAAt2IDIABIAAN1QAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_107.setTransform(30.55,87.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#92DFFF").s().p("ABDKMQhQgRhKgxIgFgFQi1iNAAjVIAAuAIDIABIAAN/QAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_108.setTransform(30.55,87.075);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#92DFFF").s().p("ABDKRQhQgRhKgxIgFgFQi1iNAAjVIAAuKIDIAAIAAOKQAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_109.setTransform(30.55,86.55);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#92DFFF").s().p("ABDKWQhQgQhKgyIgFgEQi1iOAAjUIAAuVIDIAAIAAOVQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_110.setTransform(30.55,86.025);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#92DFFF").s().p("ABDKcQhQgRhKgyIgFgEQi1iNAAjVIAAugIDIABIAAOfQAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_111.setTransform(30.55,85.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#92DFFF").s().p("ABDKhQhQgRhKgxIgFgFQi1iNAAjVIAAuqIDIABIAAOpQAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_112.setTransform(30.55,84.975);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#92DFFF").s().p("ABDKmQhQgRhKgxIgFgFQi1iNAAjVIAAu0IDIABIAAOzQAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_113.setTransform(30.55,84.45);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#92DFFF").s().p("ABDKrQhQgQhKgyIgFgEQi1iOAAjUIAAu/IDIAAIAAO/QAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_114.setTransform(30.55,83.925);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#92DFFF").s().p("ABDKxQhQgRhKgyIgFgEQi1iNAAjVIAAvJIDIAAIAAPJQAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_115.setTransform(30.55,83.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#92DFFF").s().p("ABDK2QhQgRhKgxIgFgFQi1iNAAjVIAAvUIDIABIAAPTQAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_116.setTransform(30.55,82.875);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#92DFFF").s().p("ABDK7QhQgRhKgxIgFgFQi1iNAAjVIAAveIDIABIAAPdQAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_117.setTransform(30.55,82.35);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#92DFFF").s().p("ABDLAQhQgQhKgyIgFgEQi1iOAAjUIAAvpIDIAAIAAPpQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_118.setTransform(30.55,81.825);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#92DFFF").s().p("ABDLGQhQgRhKgyIgFgEQi1iNAAjVIAAvzIDIAAIAAPzQAAA9AbAwQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDIQiOgIg3gKg");
	this.shape_119.setTransform(30.55,81.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#92DFFF").s().p("ABDLLQhQgRhKgxIgFgFQi1iNAAjVIAAv+IDIABIAAP9QAAA9AbAwQAYAuAxAoQApAbAvAIQAlAHB6AGIgKDIQiOgHg3gLg");
	this.shape_120.setTransform(30.55,80.775);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#92DFFF").s().p("ABDLQQhQgRhKgxIgFgFQi1iNAAjVIAAwIIDIAAIAAQIQAAA9AbAwQAYAuAxAoQApAbAvAJQAlAHB6AFIgKDIQiOgHg3gLg");
	this.shape_121.setTransform(30.55,80.25);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#92DFFF").s().p("ABDLVQhQgQhKgyIgFgEQi1iOAAjUIAAwTIDIAAIAAQTQAAA8AbAxQAYAtAxAoQApAcAvAIQAlAHB6AGIgKDHQiOgHg3gLg");
	this.shape_122.setTransform(30.55,79.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23}]}).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-1,60.2,156.1);


(lib.Merak = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	mask.setTransform(50.85,25.425);

	// Vrstva_3
	this.instance = new lib.PulkruhModry();
	this.instance.setTransform(50.8,50.8,1,1,180,0,0,50.9,50.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:270,x:50.9},49).to({rotation:360,y:50.9},50).wait(1));

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D8D8").s().p("AFOD+QAAiKhihiQhhhhiLAAQiKAAhiBhQhiBiAACKIiuAAQAAjSCWiUQCViVDRAAQDTAACVCVQCUCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.7,50.9);


(lib.trubkaVetsi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// vrtulky
	this.Vrtulka_left_anim = new lib.VrtulkaTocici1();
	this.Vrtulka_left_anim.name = "Vrtulka_left_anim";
	this.Vrtulka_left_anim.setTransform(67.85,-79.45,1.3885,1.3885,0,0,0,15.9,14.5);

	this.Vrtulka_right_anim = new lib.VrtulkaTocici1();
	this.Vrtulka_right_anim.name = "Vrtulka_right_anim";
	this.Vrtulka_right_anim.setTransform(244.35,-79.45,1.3885,1.3885,0,0,0,15.9,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Vrtulka_right_anim},{t:this.Vrtulka_left_anim}]}).wait(100));

	// Vrstva_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C65353").s().p("AAbGGQgegfgXg7Qgxh9AAivQAAitAxh+QAXg8AegfQAWgZAbgGIAABOQgXAEgSAYQgQAVgTAxQgmBjAACRQAACQAmBjQAUAzAPAVQASAbAXADIAABOQgagFgXgbg");
	this.shape.setTransform(-0.4,-83.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C65353").s().p("AAoGXQgHgFgGgJQgagZgTgtIgIgVQgxh+AAivIAAgBQAAivAxh/IAIgTQATguAagaIALgNQAKgJALgFQAIgEAJgCIAAAuIgBAhQgJACgIAEQgNAIgKAOQgMATgPAiIgIASQglBigBCOIAAAGQAACSAmBkIADAIQASAtAOAUQAHALAIAHQAMAKANACIABAfIAAAvIAAABQgTgDgRgQg");
	this.shape_1.setTransform(-0.4,-83.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C65353").s().p("AAnGcIgNgOQgYgagUguIgIgVQgxh/AAixIAAgBQAAiwAxiAIAIgUQATgvAZgaIAMgNQAKgIALgGQAIgEAJgCIAAAvIgBAhQgJABgJAFQgMAIgKAPQgNASgOAjIgIASQglBjgBCPIAAAHQAACTAmBkIADAIQASAuAOAUQAHALAIAIQALAKAOACIABAfIAAAvIAAACQgTgEgSgPg");
	this.shape_2.setTransform(-0.4,-83.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C65353").s().p("AAnGgIgNgPQgZgagTgvIgIgUQgxiBAAiyIAAgBQAAiyAxiBIAIgUQATgvAZgbIALgMQALgKALgFQAIgEAJgCIAAAvIgBAgQgKADgIAEQgMAIgKAQQgNASgOAkIgIASQglBjgBCRIAAAHQAACUAmBlIADAIQASAuAOAVQAGAMAJAHQALAKAOADIABAfIAAAvIAAACQgTgEgSgPg");
	this.shape_3.setTransform(-0.4,-83.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C65353").s().p("AAnGjQgGgGgHgIQgZgbgTgvIgJgVQgwiBAAi0IAAgBQAAi0AwiCIAJgUQATgwAZgbIALgNQAKgJALgFQAJgEAJgCIAAAvIgCAhQgIACgJAFQgMAIgKAPQgNATgPAkIgHATQglBkgBCSIAAAHQAACVAmBnIADAHQASAvAOAVQAGAMAJAHQALALAOADIABAfIAAAvIAAADQgTgFgSgQg");
	this.shape_4.setTransform(-0.4,-83.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C65353").s().p("AAnGnIgNgPQgZgbgTgvIgJgVQgwiDAAi2IAAAAQAAi1AwiEIAJgUQATgwAZgcIALgNQAKgJALgGQAJgEAJgCIAAAwIgCAhQgJACgIAGQgMAHgKARQgNASgPAlIgHASQglBmgBCTIAAAHQAACWAmBoIADAIQASAuAOAWQAGAMAIAHQAMAMANADIACAfIAAAwIAAACQgTgFgSgQg");
	this.shape_5.setTransform(-0.4,-83.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C65353").s().p("AAnGrIgNgOQgZgcgTgwIgJgVQgwiEAAi3IAAgBQAAi3AwiEIAJgVQASgwAagcIALgOQAKgJALgFQAJgEAJgDIAAAwIgCAiQgJACgJAGQgMAHgKARQgMATgPAlIgHATQglBlgBCVIAAAHQAACYAmBoIADAIQASAuAOAYQAGALAIAIQAMALANADIACAgIAAAwIAAACQgTgEgSgRg");
	this.shape_6.setTransform(-0.4,-83.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C65353").s().p("AAnGvQgHgHgGgIQgZgcgTgwIgJgWQgwiFAAi5IAAAAQAAi4AwiGIAJgVQASgxAagcIALgOQAKgJALgGQAJgEAJgCIAAAwIgCAiQgJACgJAGQgMAIgKARQgMATgPAlIgHATQglBngBCWIAAAHQAACZAmBqIADAIQARAuAPAYQAGALAIAIQAMAMANADIACAgIAAAxIAAABQgTgEgSgRg");
	this.shape_7.setTransform(-0.4,-83.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C65353").s().p("AAnGzIgNgPQgZgdgTgwIgJgWQgwiGAAi7IAAAAQAAi6AwiHIAJgUQASgyAagdIALgOQAKgJALgGQAJgEAJgDIAAAyIgDAhQgIADgJAGQgMAHgKASQgMATgPAlIgHAUQglBogBCXIAAAHQAACbAmBqIADAIQARAuAPAZQAGAMAIAIQAMAMANADIACAgIAAAxIAAACQgTgFgSgRg");
	this.shape_8.setTransform(-0.4,-83.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C65353").s().p("AAnG2IgNgPQgagdgSgwIgJgXQgwiHAAi8IAAAAQAAi8AwiIIAJgUQASgzAagdIALgNQAKgLALgFQAJgFAJgCIAAAyIgDAhQgJADgIAGQgMAIgKARQgNAUgOAmIgHAUQglBogBCYIAAAIQAACcAmBrIACAIQATAvANAYQAHAMAHAJQAMAMANAEIADAgIAAAxIgBACQgTgFgRgSg");
	this.shape_9.setTransform(-0.4,-83.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C65353").s().p("AAmG6QgGgGgHgJQgYgdgTgyIgJgVQgwiJAAi+IAAAAQAAi9AwiJIAIgVQATgzAZgeIAMgNQAKgLAKgFQAJgFAKgCIAAAyIgDAiQgJADgJAGQgLAIgKASQgMAUgPAmIgHAUQglBpgBCaIAAAHQAACeAmBsIACAIQATAuANAaQAHAMAHAJQAMAMANAEIADAgIAAAyIgBABQgTgEgSgTg");
	this.shape_10.setTransform(-0.4,-83.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C65353").s().p("AAmG+IgNgQQgYgcgTgzIgJgWQgwiKAAi/IAAAAQAAi/AwiKIAIgWQATgzAZgeIALgNQALgLAKgFQAJgFAKgDIAAAzIgEAiQgJADgIAHQgLAHgKASQgMAVgPAmIgHAUQglBrgBCaIAAAIQAACfAmBtIACAJQASAtAOAbQAHAMAHAJQAMANANADIADAhIAAAyIgBABQgTgEgSgTg");
	this.shape_11.setTransform(-0.4,-83.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C65353").s().p("AAmHCIgNgPQgZgegSgzIgJgWQgwiMAAjAIAAAAQAAjBAwiLIAIgVQATg1AZgdIALgPQALgKAKgGQAJgEAKgDIAAAzIgEAiQgJADgIAHQgLAIgKASQgMAVgPAnIgHAUQglBsgBCbIAAAIQAACgAmBuIACAIQASAvAOAbQAGANAIAJQAMAMAMAFIAEAfIAAA0IgBABQgTgFgSgTg");
	this.shape_12.setTransform(-0.4,-83.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C65353").s().p("AAmHGQgHgHgGgJQgZgegSgzIgJgXQgwiMAAjCIAAAAQAAjCAwiNIAIgVQATg1AZgeIALgPQALgKAKgGQAJgFAKgCIAAAzIgEAjQgJADgIAGQgLAJgKATQgMAUgPAnIgHAVQglBsgBCeIAAAHQAAChAmBwIACAIQASAuAOAcQAGAMAIAKQAMAMAMAFIAEAgIAAA0IgBABQgTgFgSgTg");
	this.shape_13.setTransform(-0.4,-83.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C65353").s().p("AAmHKIgNgQQgZgegSg0IgJgWQgwiPAAjDIAAAAQAAjEAwiNIAIgWQATg1AZgfIALgPQALgKAKgGQAJgEAKgDIAAAzIgEAjQgKAEgIAGQgLAJgKATQgMAVgOAnIgHAUQglBvgBCeIAAAHQAACjAmBwIACAJQASAuAOAcQAGANAIAJQALAOANAEIAEAgIAAA0IgBACQgTgFgSgUg");
	this.shape_14.setTransform(-0.4,-83.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C65353").s().p("AAmHOIgNgRQgZgegTg0IgIgXQgwiPAAjFIAAAAQAAjFAwiPIAIgWQATg2AZgfQAFgIAGgGQALgLAKgHQAJgEAKgDIAAA0IgFAkQgIADgJAHQgLAIgKAUQgMAVgOAoIgHAUQglBvgBCgIAAAIQAACjAmBxIACAJQASAuAOAeQAGAMAHAJQAMAOANAFIAEAgIAAA0IgBACQgTgGgSgTg");
	this.shape_15.setTransform(-0.4,-83.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C65353").s().p("AAmHRQgHgHgGgJQgZgfgTg0IgIgYQgwiPAAjHIAAAAQAAjHAwiQIAIgWQATg2AZggIALgOQAKgLALgHQAJgEAKgDIAAA0IgFAkQgJAEgIAGQgLAJgKAUQgMAVgOAoIgHAVQglBwgBChIAAAIQAAClAmByIACAIQASAvAOAeQAGAMAHAKQAMANANAGIAEAgIAAA1IgBABQgTgFgSgVg");
	this.shape_16.setTransform(-0.4,-83.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C65353").s().p("AAlHVIgNgRQgYgegTg2IgIgXQgwiRAAjIIAAAAQAAjIAwiSIAIgWQATg3AZggQAFgIAGgGQAKgMALgGQAJgFAKgCIAAA1QgDAOgCAVQgJAEgIAHQgLAIgKAUQgMAWgPApIgGAUQglBxgBCjIAAAIQAACmAmBzIACAIQASAuAOAgQAGANAHAJQALAOAOAFIAEAhIAAA1IgBACQgTgHgTgUg");
	this.shape_17.setTransform(-0.4,-83.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C65353").s().p("AAlHZQgGgHgHgKQgYgfgTg2IgIgXQgwiSAAjKIAAAAQAAjKAwiTIAIgWQATg3AYggIAMgPQAKgMALgGQAJgFAKgDIAAA2QgDAOgCAWQgKAEgHAHQgLAIgKAVQgMAWgPAoIgGAWQglBxgBCkIAAAIQAACoAmBzIACAJQASAuAOAgQAGANAHAKQAMAOAMAFIAFAhIAAA2IgBABQgTgGgTgVg");
	this.shape_18.setTransform(-0.4,-83.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C65353").s().p("AAlHdQgGgHgHgKQgYgggTg2IgIgXQgwiUAAjLIAAAAQAAjLAwiUIAIgXQATg4AYggQAGgJAGgGQAKgMALgGQAJgFAKgDIAAA2IgGAkQgIAEgJAHQgKAJgKAUQgMAXgPApIgGAVQglBzgBClIAAAIQAACpAmB1IACAJQASAtAOAhQAGANAHAKQALAOANAGIAFAhIAAA2IgBABQgTgFgTgWg");
	this.shape_19.setTransform(-0.4,-83.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C65353").s().p("AAlHhIgNgSQgYgggTg2IgIgYQgwiUAAjNIAAAAQAAjNAwiVIAIgXQATg4AYghIALgQQALgLALgHQAJgEAKgEIAAA3QgDAOgDAWQgJAFgIAHQgKAIgKAVQgNAXgOApIgGAWQglBzgBCnIAAAIQAACqAmB2IACAJQARAuAPAhQAFANAIAKQALAPANAGQACAUADANIAAA2IgBABQgUgGgSgVg");
	this.shape_20.setTransform(-0.4,-83.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C65353").s().p("AAlHlIgNgSQgYgggTg3IgIgYQgwiWAAjOIAAgBQAAjOAwiWIAIgXQATg5AYghIALgPQALgMALgHQAJgFAKgDIAAA3QgDAOgDAWQgJAFgIAHQgKAJgLAWQgMAWgOAqIgGAWQglB0gBCoIAAAIQAACrAmB3IACAJQARAuAOAiQAHANAHALQALAOANAGQACAVADANIAAA2IgBACQgUgGgSgWg");
	this.shape_21.setTransform(-0.4,-83.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C65353").s().p("AAlHoQgHgHgGgKQgYghgTg3IgIgYQgwiYAAjPIAAAAQAAjRAwiWIAHgYQAUg5AYgiIALgPQALgMAKgHQAJgFALgDIAAA4QgEANgDAXQgIAEgIAIQgKAJgLAWQgMAXgOAqIgGAVQglB2gBCpIAAAIQAACtAmB3IACAJQARAvAOAiQAHAOAGAKQALAQANAFIAGAiIAAA3IgBABQgUgGgSgXg");
	this.shape_22.setTransform(-0.4,-83.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C65353").s().p("AAlHsIgNgRQgYgigTg3IgIgZQgwiYAAjRIAAgBQAAjRAwiZIAHgXQAUg6AYghQAFgJAGgHQALgMAKgHQAJgFALgDIAAA3QgEAOgDAXQgJAFgHAIQgLAIgKAXQgMAXgOAqIgGAWQglB3gBCqIAAAIQAACuAmB5IACAJIAfBSIANAYQAMAPAMAGQADAVADANIAAA3IgBABQgUgGgSgXg");
	this.shape_23.setTransform(-0.4,-83.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C65353").s().p("AAkHwQgGgIgHgKQgXghgTg5IgIgYQgwiaAAjSIAAgBQAAjTAwiZIAHgYQAUg6AYgiIALgQQALgNAKgGQAJgFALgEIAAA4QgEAOgDAXQgJAFgHAIQgLAJgKAXQgMAXgOArIgGAWQglB3gBCsIAAAIQAACwAmB5IACAJQARAvAOAkQAGANAHALQALAPANAHQADAVADANIAAA4IgBABQgUgHgTgXg");
	this.shape_24.setTransform(-0.4,-83.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C65353").s().p("AAkH0QgGgIgHgKQgXgigTg5IgJgZQgviaAAjUIAAgBQAAjVAvibIAIgXQAUg7AYgiIALgQQAKgNALgHQAJgFALgDIAAA5QgEANgEAYQgJAEgHAJQgKAJgKAXQgMAXgOArIgGAXQgmB4AACsIAAAJQABCxAlB6IACAKQAQAuAPAlQAGANAHALQALAQAMAGQADAXAEAMIAAA3IgBACQgVgHgSgXg");
	this.shape_25.setTransform(-0.4,-83.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C65353").s().p("AAkH4IgNgSQgYgigSg6IgJgZQgvibAAjWIAAAAQAAjXAvicIAIgYQAUg7AXgjIAMgQQAKgNALgHQAJgFALgDIAAA5QgEANgEAYQgIAFgIAJQgKAIgKAYQgMAYgOArIgGAXQgmB5AACuIAAAIQABCzAlB7IACAJIAfBUQAGAOAHALQAKAQANAHQADAWAEAMIAAA4IgBABQgVgGgSgYg");
	this.shape_26.setTransform(-0.4,-83.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C65353").s().p("AAkH8IgNgSQgXgjgUg6IgIgZQgvidAAjXIAAgBQAAjYAvicIAIgZQAUg8AXgiQAGgJAGgIQAKgNALgHQAJgFALgDIAAA5QgEANgEAYQgJAFgHAJQgKAIgKAYQgMAZgOAsIgHAWQgkB6gBCvIAAAJQABCzAlB9IACAJIAfBVQAGAOAHALQAKAQANAHQADAXAEAMIAAA4IgBABQgVgGgSgYg");
	this.shape_27.setTransform(-0.4,-83.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C65353").s().p("AAkH/QgHgIgGgKQgXgjgUg6IgIgaQgvieAAjYIAAgBQAAjZAvifIAIgXQATg9AYgkIAMgQQAKgNALgHQAJgGALgDIAAA6QgEANgFAZQgIAFgHAJQgLAIgJAZQgMAYgOAsIgHAXQgkB7gBCwIAAAJQABC1AlB9IACAJIAfBWQAFAOAIAMQAKAQANAHQADAWAEAMIAAA6IgBABQgVgGgSgag");
	this.shape_28.setTransform(-0.4,-83.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C65353").s().p("AAkIDQgHgIgGgLQgXgjgUg6IgIgaQgvifAAjaIAAgBQAAjbAvifIAIgZQATg8AYgkQAGgKAGgHQAKgNALgIQAJgFALgDIAAA6QgFANgEAZQgJAFgGAJQgKAJgLAZQgLAYgOAtIgHAXQgkB8gBCyIAAAIQABC2AlB+IACAKIAfBWQAGAOAGAMQALAQAMAIQAEAWAEAMIAAA6IgBABQgVgHgSgZg");
	this.shape_29.setTransform(-0.4,-83.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C65353").s().p("AAkIHQgHgIgGgLQgXgjgUg8IgIgZQgvihAAjbIAAgBQAAjcAvihIAIgZQATg9AYgkIAMgRQAKgNALgIQAIgFAMgEIAAA7QgFANgFAaQgHAFgIAJQgJAJgLAZQgLAZgPAsIgGAYQgkB9gBCzIAAAIQABC4AlB/IACAJIAfBYQAGAOAGAMQALAQAMAIQAEAXAEALIAAA7IgBABQgVgHgSgag");
	this.shape_30.setTransform(-0.4,-83.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C65353").s().p("AAkILQgHgIgGgLQgYgkgTg8IgIgaQgvihAAjdIAAgBQAAjeAviiIAIgZQATg9AYglQAFgJAHgIQAKgOALgHQAIgFAMgEIAAA7QgFANgFAaQgIAFgHAKQgJAIgLAaQgMAZgOAtIgGAXQgkB+gBC1IAAAIQABC5AlCAIACAKIAfBYQAGAOAGAMQALARAMAIQAEAXAEALIAAA7IgBABQgVgHgSgag");
	this.shape_31.setTransform(-0.4,-83.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C65353").s().p("AAjIPIgNgTQgXgkgTg9IgIgaQgvijAAjeIAAgBQAAjfAvikIAIgZQATg+AYglQAFgJAHgIQAKgOALgHQAIgFAMgEIAAA7QgFANgFAaQgIAGgHAJQgKAJgKAaQgMAZgOAuIgGAXQgkB/gBC2IAAAIQABC7AlCBIACAJIAfBZIAMAaQAKARANAJQAEAXAEALIAAA7IgBABQgVgHgTgag");
	this.shape_32.setTransform(-0.4,-83.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C65353").s().p("AAjITQgHgJgGgLQgXgkgTg9IgIgbQgvikAAjfIAAgBQAAjhAvilIAIgYQAShAAZgkIALgSQAKgOAMgIQAIgFAMgEIAAA8QgFANgGAaQgHAGgHAKQgKAJgLAaQgKAZgPAuIgGAYQgkB/gBC4IAAAIQABC8AlCBIACAKIAeBZQAGAPAHAMQAKARAMAJQAFAYAEALIAAA8IgBABQgVgIgTgag");
	this.shape_33.setTransform(-0.4,-83.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C65353").s().p("AAjIXQgHgJgGgLQgXglgTg9IgIgaQgvimAAjhIAAgBQAAjiAvimIAIgZQASg/AYgmIAMgSQAKgOAMgHQAIgGAMgEIAAA9QgFAMgGAbQgIAGgHAKQgJAIgLAbQgKAagPAuIgGAYQgkCBgBC4IAAAIQABC+AlCCIACAKIAeBaQAGAPAHAMQAKASALAIQAFAYAFALIAAA8IgBABQgVgHgTgbg");
	this.shape_34.setTransform(-0.4,-83.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C65353").s().p("AAjIbQgHgKgHgKQgWglgTg+IgIgbQgvimAAjjIAAgBQAAjkAvinIAHgaQAUg/AXgmIAMgSQAKgOALgIQAKgFALgEIAAA8QgGANgFAbQgIAGgHAKQgKAJgKAaQgKAbgPAuIgGAZQglCBAAC6IAAAIQABC+AlCFIACAJIAeBbIAMAbQALASALAJQAFAYAFALIAAA9IgBAAQgVgHgTgbg");
	this.shape_35.setTransform(-0.4,-83.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C65353").s().p("AAjIeQgHgIgHgMQgWglgTg+IgIgbQgvinAAjlIAAgBQAAjmAvinIAHgaQAUhBAXgmQAFgJAHgJQAKgOALgIQAKgFALgEIAAA9QgGAMgGAbQgHAGgHALQgKAIgKAcQgLAagOAvIgGAZQglCCAAC7IAAAIQABDAAlCFIACAJIAeBcIAMAbQALATALAJQAFAYAFALIAAA8IgBABQgWgHgSgcg");
	this.shape_36.setTransform(-0.4,-83.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C65353").s().p("AAjIiQgHgJgHgLQgWgmgTg/IgIgbQgvioAAjnIAAAAQAAjoAvipIAHgaQAUhAAXgnIAMgSQAKgPALgHQAJgGAMgEIAAA+QgGAMgGAbQgIAHgGAKQgJAJgLAbQgLAbgOAvIgGAZQglCDAAC8IAAAJQABDBAlCGIACAKIAeBcQAGAPAGANQALASALAJQAFAZAFALIAAA9IgBABQgWgIgSgcg");
	this.shape_37.setTransform(-0.4,-83.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C65353").s().p("AAjImIgOgUQgWgngUg+IgHgbQgvirAAjnIAAgBQAAjpAviqIAHgaQAThBAXgnIANgTQAKgPALgHQAJgGAMgEIAAA+QgGAMgGAcQgIAHgHAKQgJAJgKAcQgLAbgOAvIgGAZQglCEAAC+IAAAIQABDDAlCHIACAKIAeBcIAMAcQALATAKAJQAGAZAFALIAAA9IgBABQgWgIgSgcg");
	this.shape_38.setTransform(-0.4,-83.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C65353").s().p("AAjIqQgIgJgGgMQgWgmgUhAIgIgbQguirAAjqIAAAAQAAjrAuirIAIgaQAThCAXgnIANgTQAKgPALgIQAJgFAMgEIAAA+QgGAMgHAcQgHAHgHAKQgJAKgKAcQgLAbgOAwIgGAZQglCFAAC/IAAAIQABDEAlCIIACAKIAeBeIAMAcQAKASALAKQAGAZAFALIAAA+IgBAAQgWgHgSgdg");
	this.shape_39.setTransform(-0.4,-83.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C65353").s().p("AAjIuQgIgJgGgMQgWgngUhAIgIgbQguitAAjrIAAAAQAAjsAuitIAIgaQAThCAXgoQAGgKAHgJQAKgPALgIQAJgFAMgFIAAA/QgGAMgHAdQgHAHgIAKQgIAJgLAdQgKAbgOAwIgGAZQglCHAADAIAAAIQABDGAlCIIACAKIAeBfIAMAcQAKATALAKQAGAZAFALIAAA+IgBABQgWgIgSgdg");
	this.shape_40.setTransform(-0.4,-83.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C65353").s().p("AAjIyQgIgKgGgLQgXgogThAIgIgcQguitAAjtIAAgBQAAjtAuitIAIgbQAThDAXgoIAMgTQALgPALgIQAJgGAMgEIAAA/QgHALgGAdQgHAIgIAKQgIAKgLAdQgKAbgOAwIgGAaQglCHAADBIAAAJQABDHAlCJIACAKIAeBgQAFAPAHAOQAJASAMAKQAFAaAGAKIAAA/IgBABQgWgIgSgdg");
	this.shape_41.setTransform(-0.4,-83.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C65353").s().p("AAjI2QgIgKgGgLQgXgogThBIgIgcQguivAAjuIAAAAQAAjvAuivIAIgbQAThDAXgoIAMgUQALgPALgIQAJgGAMgEIAAA/QgHAMgHAdQgHAIgHAKQgIAKgLAdQgKAbgOAyIgHAZQgjCIgBDDIAAAIQAADIAmCLIABAKIAfBgIAMAdQAKATAKALQAGAZAGALIAAA/IgCAAQgVgIgSgdg");
	this.shape_42.setTransform(-0.4,-83.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C65353").s().p("AAiI6QgHgKgHgMQgWgogThBIgIgcQguiwAAjwIAAgBQAAjwAuiwIAIgbQAShEAYgoIAMgUQAKgPAMgJQAIgFANgFIAABAQgHAMgHAeQgHAHgHALQgJAJgKAdQgKAcgPAyIgGAZQgjCKgBDDIAAAJQAADKAmCLIABAKIAfBhQAFAQAHAOQAKATAKALQAGAZAGALIAAA/IgCAAQgVgIgTgdg");
	this.shape_43.setTransform(-0.4,-83.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C65353").s().p("AAiI9IgOgVQgWgogThDIgIgcQguixAAjxIAAgBQAAjyAuixIAIgbQAShFAYgoQAFgLAHgJQAKgQAMgHQAIgHANgEIAABBQgIALgGAeQgIAIgGAKQgIAKgLAeQgLAcgOAxIgGAaQgjCKgBDFIAAAKQAADKAmCMIABALIAeBhIANAeQAJAUALAKQAGAbAGAJIAABAIgCABQgVgJgTgeg");
	this.shape_44.setTransform(-0.4,-83.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C65353").s().p("AAiJBIgOgWQgWgogThDIgIgcQguiyAAjzIAAgBQAAjzAuizIAIgbQAShFAYgpQAFgLAHgJQAKgQAMgIQAIgGANgEIAABAQgIAMgGAeQgIAIgHALQgHAJgLAeQgLAdgOAyIgGAaQgjCLgBDGIAAAJQAADMAmCNIABALIAeBiIAMAeQAKAUAKALQAHAaAGAKIAABBIgCAAQgVgIgTgfg");
	this.shape_45.setTransform(-0.4,-83.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C65353").s().p("ABKJsQgVgIgTgfQgIgKgGgMQgXgogShDIgIgeQguizAAj0IAAgBQAAj1Aui0IAIgbQAThFAWgpIANgVQAKgPAMgJQAIgGANgEIAABBQgIALgGAeQgIAIgHAMQgIAJgKAfQgLAdgOAyIgGAaQgjCMgBDIIAAAJQAADNAmCOIABAKIAeBjIAMAfQAJAUALALQAHAaAGAKIAABBIgCAAg");
	this.shape_46.setTransform(-0.4,-83.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C65353").s().p("AAiJJIgOgWQgXgpgShEIgIgdQgui0AAj2IAAgBQAAj2Aui1IAHgcQAUhGAWgqIANgUQAKgQALgIQAKgGAMgFIAABCQgIALgHAfQgHAIgHALQgIAKgKAfQgLAcgOAzIgGAbQgjCNgBDJIAAAIQAADPAmCPIABALIAeBkIAMAeQAKAUAKAMQAHAaAGAKIAABBIgCABQgVgJgTgfg");
	this.shape_47.setTransform(-0.4,-83.675);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C65353").s().p("AAiJNQgIgKgGgNQgXgpgShEIgIgdQgui2AAj3IAAgBQAAj4Aui2IAHgcQAThGAXgqQAGgLAHgKQAJgQAMgJQAKgFAMgFIAABCQgIALgHAfQgIAIgGAMQgIAJgLAgQgKAdgOAzIgGAbQgjCNgBDLIAAAJQAADQAmCPIABALIAeBlIAMAeQAKAVAKALQAGAcAHAJIAABCIgCAAQgVgIgTggg");
	this.shape_48.setTransform(-0.4,-83.675);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C65353").s().p("AAiJRQgIgLgGgMQgXgqgShEIgIgdQgui4AAj4IAAgBQAAj5Aui4IAHgcQAThHAXgqQAGgLAHgKQAJgQAMgJQAKgGAMgEIAABCQgIAKgHAhQgIAHgHAMQgHAKgLAgQgKAdgOA0IgGAaQgjCPgBDLIAAAJQAADSAmCQIABAMIAeBlIAMAeQAJAWAKALQAHAbAHAKIAABCIgCAAQgVgIgTggg");
	this.shape_49.setTransform(-0.4,-83.65);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C65353").s().p("ABKJ+QgVgJgUggIgOgXQgWgqgThFIgHgeQgui4AAj6IAAgBQAAj7Aui4IAHgdQAThHAXgrIAMgUQAKgRAMgJQAJgGANgFIAABDQgJALgHAgQgHAIgHAMQgHAKgLAgQgKAdgPA0IgFAbQgkCQAADNIAAAJQAADSAmCSIABALIAdBmIANAfQAJAVAKAMQAHAcAHAJIAABDIgCAAg");
	this.shape_50.setTransform(-0.4,-83.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C65353").s().p("ABKKCQgVgJgUggIgOgYQgWgqgThFIgHgeQgui5AAj8IAAgBQAAj9Aui6IAHgcQAThHAXgsIAMgUQAKgRAMgJQAJgGANgFIAABDQgJALgHAgQgHAJgHAMQgIAJgKAhQgKAdgPA0IgFAbQgkCSAADNIAAAJQAADVAmCSIABALIAdBnIANAfQAIAWALAMQAHAcAHAJIAABDIgCAAg");
	this.shape_51.setTransform(-0.4,-83.65);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C65353").s().p("ABKKHQgVgJgUgiQgHgKgHgNQgWgrgThGIgHgdQgui7AAj9IAAgBQAAj/Aui6IAHgcQAShJAYgrQAGgMAGgKQAKgQAMgKQAJgFANgGIAABFQgJAKgHAhQgIAIgGANQgIAJgKAhQgKAegPA1IgFAbQgkCRAADPIAAAKQAADVAmCTIABALIAdBoIAMAgQAKAWAKALQAGAdAIAJIAABEIgCAAg");
	this.shape_52.setTransform(-0.4,-83.65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C65353").s().p("AAhJgIgOgXQgWgsgThGIgHgeQgui8AAj/IAAAAQAAkAAui8IAGgdQAUhJAXgsQAGgLAGgKQAKgRAMgJQAJgGANgFIAABEQgJALgIAhQgHAIgHANQgHAJgKAhQgLAfgOA1IgFAbQgkCTAADQIAAAKQAADWAmCVIABALIAdBoIAMAgQAJAWALAMQAGAdAIAJIAABDIgCABQgWgKgTghg");
	this.shape_53.setTransform(-0.4,-83.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C65353").s().p("ABKKPQgWgJgTgiQgIgLgGgNQgWgrgThHIgIgeQgti9AAkBIAAAAQAAkCAti9IAHgdQAThJAXgsIANgWQAKgRAMgJQAJgGANgFIAABFQgJAKgIAhQgHAJgHANQgHAJgKAiQgLAegOA1IgFAcQgkCTAADTIAAAJQAADYAmCVIABALIAdBpQAGARAGAQQAJAWALAMQAGAdAIAJIAABEIgBAAIgBAAg");
	this.shape_54.setTransform(-0.4,-83.6375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C65353").s().p("ABKKTQgWgJgTgiQgIgLgGgNQgXgsgShHIgIgeQgti+AAkDIAAAAQAAkDAti+IAHgeQAThJAXgtIANgWQAKgRAMgJQAJgGANgFIAABFQgJAKgIAhQgIAJgGANQgHAKgKAiQgLAegOA2IgFAcQgkCUAADUIAAAJQAADZAmCXIABALIAdBqIAMAgQAJAWAKANQAHAdAIAJIAABEIgCAAg");
	this.shape_55.setTransform(-0.4,-83.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C65353").s().p("ABKKYQgWgKgTgiIgOgYQgWgsgUhIIgHgfQgti/AAkEIAAAAQAAkFAti/IAHgeQAThKAXgtQAGgMAHgJQAKgSAMgJQAJgGANgGIAABGQgJAKgJAiQgHAJgGANQgHAKgLAiQgKAfgOA2IgFAcQgkCVAADVIAAAJQAADbAmCXIABALIAdBrIAMAgQAIAXALANQAHAdAIAJIAABFIgCAAg");
	this.shape_56.setTransform(-0.4,-83.625);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C65353").s().p("ABKKcQgWgKgUgiQgHgLgHgOQgWgsgThJIgHgeQgtjAAAkGIAAgBQAAkGAtjAIAHgeQAThKAXguQAGgMAHgJQAJgTANgIQAIgHAOgFIAABGQgJAJgJAjQgHAJgGAOQgHAJgLAiQgKAggOA2IgFAcQgkCXAADWIAAAJQAADcAmCYIABALIAdBrIAMAiQAIAXALANQAHAdAIAIIAABGIgCAAg");
	this.shape_57.setTransform(-0.4,-83.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C65353").s().p("ABKKgQgWgJgUgjQgHgLgHgOQgWgtgThIIgHgfQgtjCAAkHIAAAAQAAkIAtjCIAHgdQAThMAXgtIANgWQAJgSANgKQAIgGAOgFIAABGQgKAKgJAjQgHAJgGANQgHAKgKAjQgKAfgOA3IgGAcQgiCYgBDXIAAAJQABDdAkCaIACALQAOAwAPA8IALAhQAKAXAJAOQAIAdAIAJIAABFIgBAAIgBAAg");
	this.shape_58.setTransform(-0.4,-83.6125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C65353").s().p("ABKKlQgWgKgUgkQgHgLgHgOQgWgtgThIIgHggQgtjDAAkIIAAgBQAAkIAtjEIAHgdQAThMAXgvIAMgVQALgTALgJQAKgGANgGIAABHQgKAKgJAiQgHAKgGAOQgHAKgKAjQgKAfgOA3IgGAdQgiCYgBDZIAAAJQABDfAkCaIACALIAdBtIALAiQAJAWAKAPQAHAdAJAIIAABHIgCAAg");
	this.shape_59.setTransform(-0.4,-83.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C65353").s().p("ABKKpQgWgKgUgkQgHgLgHgOQgWgtgThKIgHgfQgtjEAAkKIAAgBQAAkKAtjEIAHgfQAThLAXgvQAGgNAGgKQALgSALgJQAKgHANgFIAAABIAABHQgKAJgJAjQgHAJgGAOQgHAKgKAjQgKAhgOA3IgGAcQgiCagBDaIAAAKQABDfAkCbIACALIAdBuIALAiQAJAXAKAOQAHAeAJAIIAABHIgCAAg");
	this.shape_60.setTransform(-0.4,-83.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C65353").s().p("ABKKtQgXgKgTgkQgIgLgGgOQgWgugThKIgHggQgtjFAAkLIAAgBQAAkMAtjFIAHgfQAThMAXgvQAGgMAGgLQAKgSAMgJQAKgHANgFIAABHQgKAKgKAjQgGAKgGAOQgHAKgKAjQgKAhgOA3IgGAdQgiCagBDbIAAAKQABDhAkCcIACAMIAdBuIALAiQAJAYAKAOQAHAeAJAIIAABHIgCAAg");
	this.shape_61.setTransform(-0.4,-83.575);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C65353").s().p("ABKKxQgXgKgTgkIgOgZQgWgvgThKIgHggQgtjGAAkNIAAgBQAAkNAtjHIAHgeQAShOAXgvQAHgMAGgKQAKgTAMgKQAKgGANgGIAAABIAABHQgLAKgJAkQgHAKgFANQgHAKgKAlQgKAggOA4IgGAdQgiCbgBDdIAAAJQABDjAkCdIACALQAOAxAOA+IAMAjQAIAXAKAPQAIAeAJAIIAABIIgCgBg");
	this.shape_62.setTransform(-0.4,-83.575);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C65353").s().p("ABKK1QgXgKgTglQgIgLgGgOQgWgvgThKIgHghQgtjHAAkOIAAgBQAAkPAtjIIAHgfQAShOAXgvIAMgWQALgTAMgKQAJgHAOgFIAABIQgLAJgJAkQgHALgFAOQgHAKgKAkIgZBaIgFAcQgiCdgBDdIAAAKQABDkAkCdIACAMIAcBxIAMAiQAIAYAKAOQAIAfAJAIIAABIIgCgBg");
	this.shape_63.setTransform(-0.4,-83.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C65353").s().p("ABKK6QgXgKgTglQgIgMgGgOQgXgvgShLIgHggQgtjJAAkQIAAgBQAAkRAtjIIAHgfQAShPAXgvQAGgNAGgKQALgTAMgKQAJgHAOgFIAAABIAABIQgLAJgKAkQgGALgGAOQgGAKgKAlQgLAhgOA4IgFAeQgiCdgBDfIAAAKQABDlAkCeIACAMIAcBxIAMAjQAIAYAKAOQAIAfAJAIIAABIIgCAAg");
	this.shape_64.setTransform(-0.4,-83.575);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C65353").s().p("ABKK+QgXgKgUgmQgHgMgGgOQgXgugShNIgHggQgtjKAAkRIAAgBQAAkSAtjKIAGggQAUhPAWgwQAGgMAGgKQALgUAMgKQAJgGAOgGIAABJQgLAKgKAkQgGALgGAOQgGALgKAkQgLAigOA5IgFAeQgjCdAADgIAAAKQABDmAkChIACALIAcByIALAiQAJAZAKAPQAIAfAJAIIAABIIgCAAg");
	this.shape_65.setTransform(-0.4,-83.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C65353").s().p("ABKLDQgXgKgUgnQgHgMgGgOQgXgvgShMIgHghQgtjLAAkTIAAgBQAAkUAtjLIAGggQAUhOAWgxQAGgNAGgLQALgSAMgLQAJgGAOgGIAAABIAABJQgLAJgKAlQgHAKgFAPQgHAKgJAlQgLAigOA5IgFAeQgjCfAADhIAAAKQABDoAkChIACALQANAyAPBBIALAjQAJAZAJAPQAJAgAJAHIAABJIgCAAg");
	this.shape_66.setTransform(-0.4,-83.55);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C65353").s().p("ABKLHQgXgLgUgmQgHgMgGgOQgWgwgUhNIgGghQgtjMAAkVIAAAAQAAkWAtjMIAGgfQAThQAXgxIAMgXQALgUAMgKQAJgHAOgFIAABKQgLAJgLAlQgGALgFAOQgHAKgKAmIgYBcIgFAeQgjCgAADiIAAAKQABDpAkCiIACAMIAcBzIALAjQAJAZAIAPQAJAgAKAIIAABJIgCAAg");
	this.shape_67.setTransform(-0.4,-83.525);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C65353").s().p("ABKLLQgXgKgVgnIgNgaQgVgxgUhNIgHghQgsjNAAkXIAAAAQAAkXAsjOIAHgfQAThRAXgxIAMgXQALgUAMgKQAJgHAOgGIAAABIAABKQgLAJgLAlQgGALgGAPQgGAKgKAmQgJAigPA7IgFAeQgjCgAADkIAAAKQABDrAkCiIACAMIAcB0IAKAkQAKAZAIAPQAJAgAKAIIAABKIgCgBg");
	this.shape_68.setTransform(-0.4,-83.525);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C65353").s().p("ABKLQQgXgLgVgnQgGgMgHgPQgWgwgThOIgHghQgsjPAAkYIAAAAQAAkZAsjOIAHggQAThRAXgxQAFgOAHgKQALgUAMgKQAJgHAOgGIAABLQgMAJgKAmQgGALgGAPQgGAKgKAmQgKAjgOA6IgFAeQgjCiAADlIAAALQABDrAkCkIACAMIAcB0IAKAkQAJAaAJAPQAJAgAKAIIAABKIgCAAg");
	this.shape_69.setTransform(-0.4,-83.525);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C65353").s().p("ABKLUQgXgLgVgnQgGgMgHgPQgWgxgThOIgHghQgsjQAAkaIAAAAQAAkaAsjQIAHggQAThSAXgxIAMgYQAKgUANgKQAJgHAOgGIAAABIAABKQgLAJgMAmQgFALgGAPQgGALgKAmQgKAjgOA7IgFAeQgjCjAADmIAAALQABDtAkCkIACAMQANAxAPBEIAKAlQAJAZAJAQQAJAhAKAHIAABKIgCAAg");
	this.shape_70.setTransform(-0.4,-83.525);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C65353").s().p("ABKLYQgXgLgVgoIgNgbQgWgxgThOIgHgiQgsjRAAkbIAAgBQAAkbAsjRIAHggQAThSAXgyQAFgOAHgKQAKgVANgKQAJgHAOgFIAABLQgMAJgLAmQgGALgFAPQgGALgKAoQgKAigOA7IgFAfQgjCjAADpIAAAKQABDuAkClIACAMQANAyAPBEIAKAlQAJAaAIAQQAKAgAKAHIAABMIgCgBg");
	this.shape_71.setTransform(-0.4,-83.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C65353").s().p("ABKLcQgYgLgUgoQgHgMgGgPQgWgygThPIgHgiQgsjRAAkdIAAgBQAAkdAsjSIAHggQAShSAYgzIALgZQALgTANgLQAJgHAOgGIAAABIAABMQgMAHgLAnQgGAMgFAPQgHALgJAoQgKAigOA8IgFAeQgjClAADqIAAAKQABDwAkClIACANIAcB3IAKAlQAJAaAIAPQAKAhAKAIIAABLIgCgBg");
	this.shape_72.setTransform(-0.4,-83.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C65353").s().p("ABKLhQgYgLgUgpQgHgMgGgPQgWgygThQIgHgiQgsjTAAkeIAAgBQAAkeAsjUIAHggQAShTAYgzQAFgNAGgLQALgVANgKQAJgHAOgGIAABMQgMAJgLAnQgGALgGAQQgFAKgKAoQgKAjgOA8IgGAfQghCmgBDqIAAALQABDwAkCoIACAMIAbB3IALAmQAJAaAIAQQAJAhALAHIAABMIgCAAg");
	this.shape_73.setTransform(-0.4,-83.475);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C65353").s().p("ABKLlQgYgLgUgpQgHgNgGgPQgXgygShQIgHgiQgsjVAAkfIAAgBQAAkgAsjUIAHghQAThUAWgzQAGgNAGgLQALgVANgKQAJgHAOgHIAAABIAABMQgMAJgLAnQgGAMgGAPQgFALgKAoIgYBgIgGAfQghCmgBDsIAAALQABDyAkCoIACAMIAbB5IALAlQAIAaAJARQAJAhALAHIAABNIgCgBg");
	this.shape_74.setTransform(-0.4,-83.475);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C65353").s().p("ABJLpQgXgLgUgpQgHgNgGgPQgXgygShRIgIgiQgrjWAAkhQAAkiArjWIAIghQAThUAWgzQAGgOAGgLQALgVANgLQAJgHAOgGIAABOQgNAIgLAoQgGALgFAQQgGALgKAoQgJAkgOA9IgGAfQgiCnAADtIAAALQABDzAkCpIABANQANAxAPBIIAKAlQAJAbAIARQAKAiALAGIAABNIgDgBg");
	this.shape_75.setTransform(-0.4,-83.475);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C65353").s().p("ABJLuQgXgMgVgpQgGgNgHgPQgVgzgThRIgIgjQgrjWAAkjQAAkkArjXIAIghQAThUAWg0IAMgZQALgVANgLQAIgHAPgGIAAABIAABNQgNAIgLAoQgGAMgFAQQgGAKgKApQgJAkgPA9IgFAgQgiCoAADuIAAALQABD1AkCqIABAMIAcB6IAKAmQAJAbAIARQAKAiALAGIAABNIgDAAg");
	this.shape_76.setTransform(-0.4,-83.475);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C65353").s().p("ABJLyQgXgMgVgqIgNgcQgVgzgThSIgIgiQgrjYAAkkQAAklArjZIAIghQAShVAXg0QAFgOAHgMQALgUANgLQAIgHAPgHIAABOQgNAJgLAoQgHAMgFAQQgFALgKApIgYBhIgFAhQgiCoAADwIAAALQABD2AkCrIABAMIAcB7IAKAmQAJAbAIARQAKAjALAGIAABNIgDAAg");
	this.shape_77.setTransform(-0.4,-83.45);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C65353").s().p("ABJL2QgXgMgVgqQgGgNgHgPQgWgzgShSIgIgjQgrjZAAkmQAAkoArjYIAHgiQAThWAXg0QAFgOAHgMQALgVAMgLQAJgGAPgHIAAABIAABOQgNAIgMAoQgGANgFAQQgFAKgKAqQgJAkgPA+IgFAgQgiCrAADwIAAALQABD3AkCsIABANIAcB7IAKAmQAIAcAIARQALAjALAGIAABOIgDgBg");
	this.shape_78.setTransform(-0.4,-83.45);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C65353").s().p("ABJL6QgXgLgVgrQgHgNgGgPQgWg0gThTIgHgjQgrjaAAkoQAAkoArjbIAHghQAThWAXg1QAFgOAHgLQAKgWANgLQAJgHAPgGIAAABIAABOQgNAHgMAqQgGAMgGAQQgEALgKAqIgYBjIgFAgQgiCrAADyIAAALQABD5AkCsIABANQANAyAPBKIAKAnQAIAbAIASQALAjALAGIAABOIgDgBg");
	this.shape_79.setTransform(-0.4,-83.425);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C65353").s().p("ABJL/QgYgMgUgrQgHgNgGgQQgWg0gThTIgHgjQgrjbAAkpQAAkqArjcIAHgiQAThWAXg2IALgZQALgWANgKQAJgIAPgHIAAABIAABPQgNAIgMApQgHANgFAQQgEALgKAqQgKAlgOA+IgGAhQghCsAADzIAAALQABD6AkCuIABAMIAcB+IAKAmQAIAcAIASQAKAjAMAGIAABPIgDgBg");
	this.shape_80.setTransform(-0.4,-83.45);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C65353").s().p("ABJMDQgYgMgUgrQgHgNgGgQQgWg0gThUIgHgjQgrjdAAkrQAAkrArjdIAHgiQAThXAXg1QAFgPAGgLQALgWANgLQAJgHAPgHIAAABIAABPQgOAIgMApQgGANgFARQgEAKgKArQgKAlgOA/IgGAgQghCtAAD1IAAALQABD7AkCvIABANIAcB9IAJAoQAJAcAIASQAKAjAMAGIAABPIgDgBg");
	this.shape_81.setTransform(-0.4,-83.425);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C65353").s().p("ABJMHQgYgLgUgsQgHgNgGgQQgWg1gThUIgHgkQgrjeAAksQAAktArjeIAHgiQAThXAWg2IAMgaQALgWANgLQAJgHAPgHIAAABIAABPQgOAIgMAqQgGAMgFARQgEALgLArIgXBlIgGAgQghCuAAD2IAAALQABD9AkCvIABANIAcB/IAJAnQAIAcAIASQAMAkALAGIAABPIgDgBg");
	this.shape_82.setTransform(-0.4,-83.425);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C65353").s().p("ABJMLQgYgLgVgtIgNgdQgVg1gThUIgHgkQgrjfAAkuQAAkvArjeIAHgjQAThYAWg2QAGgOAGgNQALgWANgKQAJgIAPgHIAAABIAABQQgOAIgMAqQgGAMgGASQgEAKgKAsIgXBlIgGAhQghCvAAD3IAAALQABD+AkCxIABAMQAMAyAQBNIAJApQAIAcAIASQAMAjALAHIAABQIgDgCg");
	this.shape_83.setTransform(-0.4,-83.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C65353").s().p("ABJMQQgYgMgVgtQgGgNgHgQQgVg2gThVIgHgkQgrjgAAkvQAAkwArjgIAHgjQAThYAWg3IAMgaQAKgXAOgLQAIgHAQgHIAAABIAABRQgOAHgMAqQgGANgGASQgEAKgKAsIgXBmIgGAhQghCwAAD4IAAALQABD/AkCyIABANIAcCAIAJAoQAIAdAIASQALAkAMAFIAABRIgDgBg");
	this.shape_84.setTransform(-0.4,-83.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C65353").s().p("ABJMUQgYgMgVgtQgGgNgHgRQgVg1gThWIgHgkQgrjhAAkxQAAkyArjhIAHgjQAThZAWg3QAGgPAGgLQAKgXAOgLQAIgIAQgGIAAABIAABQQgOAHgNArQgFANgGASQgEALgKAsIgXBmIgGAhQghCxAAD6IAAALQABEBAkCyIABANIAbCBIAKAoQAIAdAIATQALAkAMAFIAABRIgDgBg");
	this.shape_85.setTransform(-0.4,-83.375);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C65353").s().p("ABJMZQgYgNgVgtIgNgeQgVg2gThVIgHglQgrjiAAkzQAAkzArjjIAHgjQAShZAXg4QAFgOAHgMQAKgWAOgMQAIgIAQgGIAAABIAABRQgPAHgNArQgFANgFASQgEAKgKAtIgXBnIgGAhQghCyAAD7IAAALQABECAkC0IABANIAbCBIAKAoQAHAeAJASQALAlAMAFIAABRIgDAAg");
	this.shape_86.setTransform(-0.4,-83.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C65353").s().p("ABJMdQgYgNgVgtQgHgOgGgQQgWg3gShWIgHglQgrjjAAk0QAAk1ArjkIAHgjQAShaAXg3QAFgPAHgMQAKgXAOgLQAIgIAQgHIAAABIAABSQgPAGgNAsQgFAOgFARQgFALgJAtIgXBnIgGAiQghCyAAD9IAAALQABEEAkC0IABANIAbCCIAKApQAHAdAJATQALAlAMAFIAABSIgDgBg");
	this.shape_87.setTransform(-0.4,-83.375);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C65353").s().p("ABJMhQgYgMgVguQgHgOgGgQQgWg3gShXIgHglQgrjlAAk1QAAk2ArjlIAHgkQAShaAXg4QAFgPAHgMQAKgXAOgMQAIgHAQgHIAAABIAABSQgOAHgOAsQgGANgFASQgEALgJAtIgXBoIgGAiQghCzAAD+IAAALQABEFAkC1IABANIAbCDIAJApQAIAeAIATQALAlANAFIAABSIgDgBg");
	this.shape_88.setTransform(-0.4,-83.375);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C65353").s().p("ABJMmQgYgNgVgvIgNgeQgWg3gShXIgIgmQgqjlAAk3QAAk4AqjmIAIgkQAShbAXg4QAFgPAGgNQALgWAOgMQAIgIAQgGIAAABIAABSQgPAGgOAtQgFAOgFARQgEAMgJAtIgXBoIgGAiQghC1AAD/IAAAMQABEFAkC2IABANIAbCEIAJAqQAIAdAIAUQAMAlAMAFIAABSIgDAAg");
	this.shape_89.setTransform(-0.4,-83.35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C65353").s().p("ABJMpQgYgMgWgvQgGgOgHgQQgVg3gShZIgIglQgqjnAAk4QAAk5AqjoIAHgkQAThbAWg5IAMgbQALgYANgLQAJgIAQgHIAAABIAABTQgPAGgOAtQgFAOgFASQgEALgKAuIgXBpIgFAiQghC2AAEAIAAAMQABEHAkC2IABAOIAbCEIAJAqQAIAeAIAUQAMAlAMAFIAABTIgDgCg");
	this.shape_90.setTransform(-0.4,-83.35);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C65353").s().p("ABJMuQgYgNgWgvQgGgNgHgRQgVg4gThYIgHgmQgqjpAAk5QAAk7AqjpIAHgkQAThcAWg5QAGgPAGgMQALgYANgMQAJgHAQgHIAAABIAABTQgPAHgOAtQgGAOgEARQgEAMgKAuIgXBqIgFAiQghC2AAECIAAAMQABEIAjC4IACANQALAzAQBTIAJApQAIAfAHATQAMAmANAFIAABTIgDgBg");
	this.shape_91.setTransform(-0.4,-83.35);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C65353").s().p("ABJMyQgYgMgWgwIgNgfQgWg4gShZIgHglQgqjqAAk7QAAk9AqjpIAHgkQAShdAXg6IAMgbQALgXANgNQAJgHAQgIIAAABIAABVQgQAGgOAtIgKAgQgDAMgKAuIgXBqIgFAiQghC4AAEDIAAAMQABEJAjC6IACANQALAyAQBTIAJArQAIAfAHATQAMAmANAFIAABTIgDgBg");
	this.shape_92.setTransform(-0.4,-83.35);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C65353").s().p("ABJM3QgYgNgWgwQgGgOgHgRQgWg5gShZIgHgmQgqjrAAk9QAAk+AqjqIAHglQAShdAXg5QAGgQAGgMQAKgYAOgMQAJgIAQgHIAAABIAABUQgQAGgOAuQgFAOgFATQgDALgKAvIgXBrIgFAiQghC5AAEEIAAAMQABELAjC6IACANIAbCHIAJAqQAHAfAIAUQAMAmANAFIAABUIgDgBg");
	this.shape_93.setTransform(-0.4,-83.325);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C65353").s().p("ABJM7QgZgNgVgwQgHgOgGgRQgWg5gShaIgHgmQgqjsAAk/QAAk/AqjsIAHglQAShdAXg6QAFgQAHgMQAKgYAOgMQAJgIAQgHIAAABIAABUQgPAGgPAuIgKAhQgEAMgJAvIgXBrIgFAjQghC5AAEGIAAAMQABEMAjC7IACAOIAbCHIAJArQAHAeAIAVQAMAmANAFIAABUIgDgBg");
	this.shape_94.setTransform(-0.4,-83.325);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C65353").s().p("ABJM/QgZgNgVgxIgNgfQgWg5gShaIgHgnQgqjsAAlBQAAlBAqjtIAHglQASheAXg6IAMgdQAKgXAOgNQAJgHAQgIIAAACIAABUQgQAGgOAvQgGAOgEATQgEALgJAwIgXBsIgFAjQghC6AAEHIAAALQABEPAjC7IACAOIAbCIIAIAqQAIAgAHAUQAMAnAOAEIAABVIgDgBg");
	this.shape_95.setTransform(-0.4,-83.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C65353").s().p("ABJNEQgZgOgVgxQgHgOgGgRQgWg5gShbIgHgmQgqjvAAlCQAAlCAqjvIAHglQASheAXg7IAMgcQAKgYAOgMQAIgJARgHIAAABIAABWQgQAFgPAvIgKAhIgMA8IgXBtIgGAjQggC7AAEIIAAALQABEPAjC9IACAOIAbCJIAIArQAIAgAHAVQAMAmAOAEIAABWIgDgBg");
	this.shape_96.setTransform(-0.4,-83.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C65353").s().p("ABJNIQgZgOgVgxQgHgOgGgRQgWg7gShbIgHgmQgqjvAAlEQAAlEAqjvIAHglQAShfAXg8QAFgPAHgNQAKgZAOgMQAIgHARgIIAAABIAABVQgQAHgPAuQgFAPgFATIgMA8IgXBtIgGAjQggC9AAEJIAAAMQABEQAjC+IACANIAbCKIAIArQAIAgAHAVQANAoANAEIAABVIgDgBg");
	this.shape_97.setTransform(-0.4,-83.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#C65353").s().p("ABJNMQgZgNgVgyIgOggQgVg6gShbIgHgnQgqjxAAlFQAAlFAqjyIAHglQAShfAWg8IANgcQAKgYAOgNQAIgIARgIIAAABIAABXQgQAGgPAvIgKAiIgNA8IgWBuIgGAjQggC9AAELIAAAMQABERAjC/IACAOIAbCLIAIArQAHAgAIAVQAMAoAOADIAABXIgDgCg");
	this.shape_98.setTransform(-0.4,-83.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C65353").s().p("AAbMRQgeg/gXh4Qgxj+AAlhQAAlhAxj+QAXh5Aeg/QAKgZAOgMQAIgIARgIIAABYQgWAHgTBQQgGAVgdCWQgmDIAAEmQAAEkAmDIIAjC3QATBbAWAGIAABXQgagMgXg1g");
	this.shape_99.setTransform(-0.4,-83.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(1));

	// prekryv
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#802424").s().p("AgbGoQgiAAgeghQgfgggWg7Qgwh5AAizQAAixAwh5QAVg7AgghQAeghAiAAIDNAAQg8BAgiBJQgoBUgHBhQgFA7AJBOQAVDSCECxIAAAFg");
	this.shape_100.setTransform(-10.9,-83.825);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#802424").s().p("AAHGsIgiAAQgIAAgIgCIgEgCQgXgGgVgYQgSgTgOgbQgLgUgJgaQgxh6AAizIAAgBQAAiyAxh6QAJgaALgVQAOgbASgTQAWgZAYgGQAJgDAJAAIAmAAIABAAIB6AAIAsABQgsAvgeA0QgLATgJAUQglBPgJBZIgBAOQgFA7AJBPIABALQAYDOB/CtIAAAFIgyABIgGAAg");
	this.shape_101.setTransform(-10.925,-83.825);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#802424").s().p("AAHGwIgjAAQgIgBgHgCIgEgBQgYgHgUgYQgSgTgOgcQgLgUgKgZQgwh8AAi0IAAgBQAAizAwh8QAJgaALgUQAPgcASgTQAVgZAZgHQAIgCAJgBIAmAAIABAAIB7AAIAsABQgsAwgeA1QgLASgKAUQgkBQgJBaIgBAPQgFA7AJBQIABALQAYDPB/CuIAAAGIgxABg");
	this.shape_102.setTransform(-10.925,-83.825);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#802424").s().p("AAHG1IgjgBQgIgBgHgCIgFgBQgWgIgVgYQgSgTgOgcQgLgVgJgZQgxh9AAi1IAAgBQAAi0Axh9QAIgaALgVQAOgcATgTQAVgZAZgIQAIgCAJAAQAUgCASAAIABAAIB8AAIArADQgsAvgeA2QgLATgKAUQgkBQgJBbIgBAPQgEA8AIBQIACALQAXDQB/CxIAAAFIgwACIgHABg");
	this.shape_103.setTransform(-10.95,-83.825);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#802424").s().p("AAGG5IgigCQgIAAgIgCIgEgCQgXgIgVgYQgRgUgPgbQgKgWgJgZQgxh9AAi3IAAgBQAAi2Axh+QAIgZALgWQAPgcARgTQAWgaAYgHQAJgDAJAAQATgCATAAIABAAIB9AAIApADQgrAwgfA2IgUAnQgkBRgJBdIgBANQgEA9AIBQIACAMQAXDSB+CyIABAFIgwADIgGABg");
	this.shape_104.setTransform(-10.95,-83.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#802424").s().p("AAGG9IgjgBQgIgBgHgCIgEgCQgXgIgVgZQgRgTgOgdQgLgVgKgaQgwh+AAi4IAAgBQAAi3Axh+QAIgbALgVQAOgcASgUQAWgaAYgIQAIgDAJAAQAUgCATAAIABAAIB9AAIApADQgrAxgeA3QgLATgKAVQgjBRgJBdIgBAOQgFA9AJBRIABALQAXDUB/C0IAAAFIgvAEIgGAAg");
	this.shape_105.setTransform(-10.975,-83.825);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#802424").s().p("AAGHCQgRAAgSgCQgIgBgHgDIgEgBQgYgIgUgaQgRgUgOgcQgLgVgKgaQgwiAAAi5IAAgBQAAi4Awh/QAJgbALgWQAOgcASgUQAVgaAYgJQAJgDAJAAQATgCATgBIABAAIB+AAIApAFQgrAxgeA3QgLAUgKAVQgkBSgIBdIgBAOQgFA9AJBSIABAMQAXDVB+C1IABAFIgvAFIgFABg");
	this.shape_106.setTransform(-10.975,-83.825);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#802424").s().p("AAGHGQgRAAgSgCIgQgEIgDgCQgXgJgVgZQgSgUgOgcQgKgWgKgbQgviAAAi6IAAgBQAAi6AviAQAKgaAKgXQAOgcASgUQAVgbAYgIQAIgEAKgBQATgCATAAIABAAIB/AAIAoAFQgsAygdA3QgMAVgIAUQgkBTgJBdIgBAPQgFA+AJBSIABALQAXDYB/C2IAAAFIguAGIgGABg");
	this.shape_107.setTransform(-11,-83.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#802424").s().p("AAFHKQgRAAgSgCQgHgBgIgDIgEgCQgXgJgUgZQgRgVgOgdQgLgVgJgbQgwiBAAi8IAAgBQAAi6AwiCQAIgbALgWQAOgdASgUQAVgbAYgJQAIgDAJgBQAUgDATAAIABAAICAAAIAnAGQgrAygeA4QgLAUgKAVQgjBTgJBfIgBAPQgFA+AJBSIABAMQAYDZB9C4IAAAFIgsAHIgGAAg");
	this.shape_108.setTransform(-11.025,-83.825);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#802424").s().p("AAFHPQgRAAgSgDQgIgBgHgDIgEgCQgXgJgVgaQgRgVgOgdQgKgWgKgbQgviCAAi9IAAgBQAAi8AviCQAJgbALgWQAOgeARgUQAWgbAYgKQAIgDAJgBQATgDATgBIACAAICAAAIAmAHQgrAzgeA5IgUApQgjBUgJBfIgBAPQgFA+AJBUIABALQAYDbB9C5IAAAFIgsAIIgFABg");
	this.shape_109.setTransform(-11.025,-83.825);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#802424").s().p("AAFHTQgRAAgSgDQgIgCgHgDIgFgCQgXgJgUgbQgQgUgOgeQgMgWgIgbQgwiDAAi+IAAgBQAAi9AwiDQAJgcAKgXQAOgdARgUQAWgcAXgKQAJgDAIgBQAVgEATAAIABAAICBAAIAlAHQgrA0geA5QgLAUgJAVQgjBVgJBfIgBAQQgEA/AIBTIACAMQAXDcB9C7IAAAFIgrAIIgFACg");
	this.shape_110.setTransform(-11.05,-83.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#802424").s().p("AAEHXQgQAAgTgDQgHgCgIgDIgEgCQgXgJgUgbQgRgVgOgeQgKgWgJgbQgwiFAAi/IAAgBQAAi+AwiEQAIgcALgXQANgdASgVQAVgcAYgKQAIgDAJgCQAUgEATAAIABAAICCAAIAlAIQgrA0geA6QgKAUgKAVQgjBWgJBgIgBAPQgEA/AIBVIACAMQAXDeB8C8IABAFIgrAJIgEABg");
	this.shape_111.setTransform(-11.05,-83.825);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#802424").s().p("AAFHbQgSAAgSgDQgIgCgHgEIgEgCQgXgKgUgaQgRgWgOgeQgKgWgKgbQgviGAAjAIAAgBQAAi/AviGQAJgcALgWQAOgfARgUQAVgcAYgLQAIgDAJgCQAUgFATABIABAAICDAAIAkAIQgrA1geA6IgUAqQgjBWgIBhIgBAPQgFBAAJBUIABAMQAXDgB8C+IABAFIgqAKIgFABg");
	this.shape_112.setTransform(-11.075,-83.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#802424").s().p("AAEHgQgRAAgSgFQgIgBgIgDIgEgDQgWgKgUgbQgRgWgOgeQgLgXgJgbQgviHAAjBIAAgBQAAjBAviGQAJgcALgXQANgeARgVQAVgdAYgLQAIgEAJgBQAUgEATgBIABAAICFAAIAjAJQgrA1geA8QgLAUgJAWQgjBWgIBiIgBAPQgFBAAJBWIABAMQAXDhB8C/IABAFIgpAMIgFABg");
	this.shape_113.setTransform(-11.075,-83.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#802424").s().p("AAEHkQgRAAgSgFQgIgBgIgEIgEgCQgXgKgTgcQgRgWgOgeQgKgXgKgcQguiHAAjDIAAgBQAAjCAuiHQAJgcAKgXQAOgfASgVQAUgdAYgLQAIgEAJgBQAUgGATAAIABAAICGAAIAiAKQgrA1geA8QgLAVgJAWQgiBXgJBiIgBAQQgFBAAJBWIABAMQAXDjB8DBIAAAFIgoAMIgFABg");
	this.shape_114.setTransform(-11.1,-83.825);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#802424").s().p("AAEHpQgSAAgSgGQgIgCgHgDIgEgDQgXgKgTgcQgSgWgNgfQgLgXgJgcQgviIABjEIAAgBQAAjDAuiJQAJgcAKgXQAOgfARgVQAVgeAYgLQAIgEAIgBQAUgHAUAAIABAAICGAAIAiALQgsA2gdA8QgKAVgKAXQgjBXgIBjIgBAPQgFBBAJBXIABANQAXDkB8DCIAAAFIgnANIgFACg");
	this.shape_115.setTransform(-11.1,-83.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#802424").s().p("AAEHtQgSAAgSgGQgIgCgHgDIgEgCQgXgMgUgcQgQgWgOgfQgLgYgJgbQguiKAAjFIAAgBQAAjFAuiJQAJgcALgYQANgfARgVQAVgeAXgMQAIgEAJgCQAUgFAUgBIABAAICHAAIAgAMQgqA2geA9QgLAVgJAWQgiBZgJBjIgBAQQgFBCAJBWIABANQAXDmB8DEIAAAFIgmANIgFACg");
	this.shape_116.setTransform(-11.125,-83.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#802424").s().p("AADHxQgRAAgSgGQgJgBgHgFIgDgCQgXgLgUgcQgRgXgNgfQgLgYgIgcQgviKAAjHIAAgBQAAjFAviLQAIgdALgYQANgfARgWQAVgeAXgLQAJgEAIgCQAUgHATAAIABAAICIAAIAgAMQgrA3gdA9QgKAVgJAXQgkBZgIBkIgBAQQgEBCAIBXIACANQAWDoB8DEIAAAHIglANIgFACg");
	this.shape_117.setTransform(-11.15,-83.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#802424").s().p("AADH1QgRAAgTgGQgIgCgHgEIgEgCQgWgMgUgdQgRgWgNggQgLgXgIgdQgviMAAjHIAAgBQAAjHAviLQAIgdALgYQANgfAQgXQAVgeAYgMQAIgEAJgDQATgGAUAAIABAAICJAAIAfAMQgrA4gdA9QgLAWgJAXQgiBZgJBlIgBAQQgEBDAIBXIACANQAWDpB8DHIAAAFIgkAQIgGABg");
	this.shape_118.setTransform(-11.15,-83.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#802424").s().p("AADH6QgSAAgSgHQgIgCgHgEIgEgCQgXgMgTgdQgRgXgNggQgLgYgJgdQguiMAAjJIAAgBQAAjIAuiMQAJgdAKgYQAOggARgXQAUgeAXgMQAJgFAIgCQAUgHAUgBIABAAICJAAIAfAOQgrA4gdA+QgLAWgJAXQgiBagIBmIgBAQQgFBCAJBZIABAMQAXDsB6DIIABAFIgkAQIgFACg");
	this.shape_119.setTransform(-11.175,-83.825);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#802424").s().p("AADH+QgSAAgTgHQgHgCgIgEIgEgDQgWgMgUgdQgQgYgNggQgLgYgJgcQguiOAAjKIAAgBQAAjJAuiOQAJgcAKgZQAOggAQgXQAVgfAXgMQAIgFAJgCQAUgIATAAIACAAICKAAIAdAOQgqA4gdBAQgLAVgJAYQgiBagIBmIgBARQgFBDAJBZIABANQAXDsB6DKIABAFIgjARIgFACg");
	this.shape_120.setTransform(-11.175,-83.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#802424").s().p("AACIDQgRAAgTgIQgHgCgIgFIgEgCQgWgNgUgeQgQgXgOggQgKgYgJgdQgtiPAAjLIAAgBQAAjKAtiPQAJgdAKgZQAOgfAQgYQAVgfAWgNQAJgEAIgDQAVgIATgBIACAAICKAAIAdAQQgqA5geA/QgKAWgJAXQgiBcgIBnIgBAQQgFBEAJBZIABANQAWDuB7DLIAAAGIgiARIgEADg");
	this.shape_121.setTransform(-11.2,-83.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#802424").s().p("AACIHQgSAAgTgIQgHgCgIgFIgEgCQgWgNgTgeQgQgYgOggQgKgZgJgdQgtiPAAjNIAAgBQAAjLAtiQQAJgdAKgZQAOggAQgYQAUgfAXgNQAIgFAJgDQAUgIAUgBIABAAICMAAIAcAQQgqA6geBAQgKAWgJAXQgiBcgIBoIgBAQQgFBEAJBaIABANQAWDwB6DNIABAGIghASIgFACg");
	this.shape_122.setTransform(-11.2,-83.825);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#802424").s().p("AACILQgSAAgTgIQgHgCgIgFIgEgDQgWgNgTgeQgQgYgOghQgKgZgJgdQgtiQAAjOIAAgBQAAjNAtiQQAJgdAKgaQANghARgXQAUggAXgNQAIgFAJgDQAUgJAUAAIABAAICNAAIAbAQQgqA6geBBIgTAuQgiBcgIBpIgBAQQgFBFAJBaIABANQAXDyB6DOIAAAFIggATIgFADg");
	this.shape_123.setTransform(-11.225,-83.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#802424").s().p("AACIPQgSAAgTgIQgIgDgHgFIgEgCQgWgOgTgeQgQgYgNghQgKgZgKgdQgtiSAAjPIAAgBQAAjOAtiSQAJgdAKgaQAOggAQgYQAUggAXgOQAIgFAIgDQAUgJAUAAIACAAICOAAIAaARQgqA7gdBAQgLAXgJAYQghBcgJBqIgBAQQgEBFAIBbIACAOQAWDzB6DPIAAAGIggAUIgEACg");
	this.shape_124.setTransform(-11.25,-83.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#802424").s().p("AACITQgTABgTgJQgHgCgHgFIgEgEQgWgOgTgeQgQgZgNghQgLgZgJgdQgtiTAAjQIAAgBQAAjPAtiTQAIgdALgaQANghARgYQATggAYgPQAHgFAJgDQAUgJAUgBIABAAICPAAIAaASQgqA7gdBBQgLAYgJAXQgiBegIBqIgBAQQgEBGAIBbIABAOQAXD1B5DQIABAHIgfAUIgEACg");
	this.shape_125.setTransform(-11.25,-83.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#802424").s().p("AACIYQgTAAgTgJQgHgDgHgFIgEgDQgWgOgTgeQgQgagOghQgKgZgJgeQgtiTAAjSIAAgBQAAjQAtiUQAJgeAKgZQANgiAQgYQAUggAXgPQAIgGAJgDQAUgKAUAAIABAAICQAAIAZATQgqA7geBCIgTAvQghBfgJBqIgBAQQgEBGAIBcIABAOQAXD3B5DSIABAGIgeAWIgFACg");
	this.shape_126.setTransform(-11.275,-83.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#802424").s().p("AABIcQgSABgTgKQgIgDgHgFIgEgDQgWgPgTgfQgQgZgNghQgKgagJgeQgtiUAAjTIAAgBQAAjRAtiVQAJgeAKgaQANgiAQgYQAUghAXgPQAIgFAIgDQAUgLAUgBIACAAICQAAIAYAVQgqA7gdBDQgKAXgJAYQghBfgJBrIgBARQgEBGAIBdIABANQAXD5B5DTIABAHIgeAVIgEADg");
	this.shape_127.setTransform(-11.275,-83.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#802424").s().p("AABIhQgTAAgSgKQgIgDgHgFIgEgDQgVgPgUggQgPgYgOgjQgKgagIgeQgtiVAAjUIAAgBQAAjTAtiVQAHgeALgbQANgiAQgZQATghAYgPQAHgFAJgEQAUgKAUAAIABAAICSAAIAXATQgpA9geBDIgTAwQgiBfgHBsIgCARQgEBHAJBdIAAANQAYD7B4DUIABAGIgdAYIgFADg");
	this.shape_128.setTransform(-11.3,-83.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#802424").s().p("AAAIlQgSAAgTgKQgHgDgIgGIgDgDQgWgPgTgfQgQgagNgjQgKgZgJgeQgsiXAAjVIAAgBQAAjUAtiXQAHgeALgaQANgiAPgaQAVghAWgPQAIgGAJgDQATgLAVgBIABAAICSAAIAXAVQgqA9gdBDQgLAYgIAYQgiBggHBtIgCARQgEBHAJBeIAAAOQAXD8B5DWIABAGIgcAYIgFADg");
	this.shape_129.setTransform(-11.3,-83.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#802424").s().p("AABIpQgTAAgTgKQgIgEgHgFIgEgDQgVgQgTggQgQgZgNgjQgKgagJgfQgsiXAAjWIAAgBQAAjWAsiXQAJgfAKgaQANgiAPgaQAUghAXgQQAIgGAIgEQAVgLAUAAIABAAICTAAIAWAVQgqA+gdBEQgKAXgJAZQghBhgIBtIgBARQgEBIAIBeIABANQAWD+B4DYIABAGIgbAZIgEADg");
	this.shape_130.setTransform(-11.325,-83.775);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#802424").s().p("AAAItQgSAAgTgKQgHgEgIgFIgEgDQgWgQgSggQgQgagNgjQgKgbgJgeQgsiYAAjYIAAgBQAAjXAsiYQAJgeAJgcQANgiARgaQATghAWgQQAJgGAIgEQAUgMAVgBIABAAICTAAIAWAXQgqA9gdBFIgTAxQghBigIBtIgBASQgEBHAIBfIABAOQAWD/B4DaIABAGIgaAZIgEADg");
	this.shape_131.setTransform(-11.35,-83.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#802424").s().p("AAAIyQgSAAgUgLQgHgDgIgGIgEgEQgVgPgSghQgQgagNgkQgKgagJgfQgsiZAAjZIAAgBQAAjYAsiZQAJgfAJgbQANgiAQgbQATgiAXgQQAIgGAIgEQAVgMAUgBIACAAICUAAIAVAYQgqA9gdBFQgLAYgIAaQghBigIBvIgBARQgEBIAIBfIABAOQAXEBB3DbIABAHIgZAZIgFAEg");
	this.shape_132.setTransform(-11.35,-83.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#802424").s().p("AAAI2QgTAAgTgLQgHgEgIgGIgEgDQgVgQgTghQgPgbgNgjQgKgbgJgfQgsiaAAjaIAAgBQAAjZAsiaQAJggAKgbQAMgjAQgaQATgiAXgRQAIgGAIgEQAVgNAUAAIABAAICWAAIATAYQgpA+gdBGQgKAYgJAZQghBjgIBvIgBASQgEBIAIBgIABAOQAXEDB3DcIABAGIgZAcIgEADg");
	this.shape_133.setTransform(-11.375,-83.775);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#802424").s().p("AAAI7QgTAAgTgMIgPgKIgEgEQgVgQgTghQgPgagNgkQgKgbgJggQgsiaAAjcIAAgBQAAjaAsibQAIggAKgbQANgkAQgaQATgiAWgRQAIgHAJgEQAUgNAUgBIACAAICWAAIATAaQgqA+gcBHIgTAxQghBjgIBxIgBARQgEBJAIBhIABANQAXEFB3DeIABAGIgYAcIgEAEg");
	this.shape_134.setTransform(-11.375,-83.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#802424").s().p("AAAI/QgUAAgTgMQgHgEgHgGIgEgEQgWgQgSgiQgQgagMgkQgKgcgJgfQgridAAjcIAAgBQAAjcAsibQAHghALgbQAMgjAQgbQATgjAWgRQAIgHAIgEQAVgNAUgBIACAAICXAAIASAZQgqBBgcBGQgLAZgIAaQghBjgHBwIgCASQgEBKAJBhIAAAOQAXEGB3DfIABAHIgYAdIgDADg");
	this.shape_135.setTransform(-11.4,-83.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#802424").s().p("AAAJDQgUAAgTgMQgIgEgGgGIgFgEQgVgRgSgiQgPgbgNgkQgKgcgJgfQgridAAjeIAAgBQAAjdAridQAJggAJgbQAMgkAQgbQAUgjAVgSQAIgHAJgEQAUgOAVAAIABAAICYAAIASAaQgqBAgdBHQgKAZgIAaQghBkgHBxIgCASQgEBKAJBiIAAAOQAXEHB2DhIACAHIgXAdIgEAEg");
	this.shape_136.setTransform(-11.4,-83.775);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#802424").s().p("AAAJHQgUAAgTgMQgIgEgHgGIgEgFQgVgRgSghQgQgcgMglQgKgbgJggQgrieAAjfIAAgBQAAjeArieQAIggAKgcQANgkAPgbQATgjAWgTQAIgGAJgFQAUgNAVgBIABAAICZAAIARAbQgqBAgcBIIgTAzQggBlgIBxIgBASQgEBLAIBiIABAOQAWEJB2DjIABAGIgVAfIgEADg");
	this.shape_137.setTransform(-11.425,-83.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#802424").s().p("AAAJMQgUAAgUgOQgHgEgHgGIgEgEQgVgRgTgjQgPgbgNglQgJgcgJggQgrifAAjgIAAgBQAAjfArifQAIghAKgcQAMgkAQgbQATgkAWgSQAIgHAIgFQAVgOAUgBIACAAICaAAIAPAcQgpBBgdBIQgKAZgIAaQggBmgIByIgBASQgEBLAIBjIABAOQAWELB2DkIABAGIgVAgIgDAEg");
	this.shape_138.setTransform(-11.425,-83.775);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#802424").s().p("AgBJQQgTAAgUgOQgHgEgIgGIgDgEQgVgSgTgjQgPgbgNglQgKgcgIghQgrigAAjhIAAgBQAAjhArigQAJggAJgcQANglAOgbQAUglAWgSQAHgHAJgFQAVgOAUgBIABAAICbAAIAPAcQgpBCgcBJQgKAZgJAaQggBmgIB0IgBASQgEBLAIBjIABAOQAWENB2DlIABAHIgUAgIgDAEg");
	this.shape_139.setTransform(-11.45,-83.775);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#802424").s().p("AAAJVQgVAAgTgPQgIgDgHgHIgEgEQgVgSgSgjQgPgdgNglQgJgbgJghQgrihAAjjIAAgBQAAjhAriiQAIggAKgcQAMglAQgcQATgkAVgUQAIgGAJgFQAUgPAVgCIACAAICbAAIAOAeQgpBCgdBKQgKAZgIAaQggBngIB0IgBASQgEBMAIBkIABAOQAWEPB2DmIABAHIgTAgIgEAFg");
	this.shape_140.setTransform(-11.475,-83.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#802424").s().p("AgBJZQgUAAgUgPQgHgEgHgHIgEgEQgVgSgSgjQgPgdgNglQgJgcgJghQgriiAAjkIAAgBQAAjjAriiQAIghAKgcQAMglAPgcQATglAWgTQAIgIAIgFQAVgPAVgBIABAAICcAAIAOAeQgpBDgdBJQgKAagIAbQggBngIB1IgBASQgEBMAIBlIABAOQAWEQB1DoIACAHIgTAhIgDAFg");
	this.shape_141.setTransform(-11.475,-83.775);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#802424").s().p("AgBJdQgVAAgTgPQgHgEgIgHIgEgEQgUgTgSgjQgPgdgMgmQgKgcgJghQgqijAAjlIAAgBQgBjkAsijQAHghAKgdQAMglAPgcQATgmAWgTQAHgIAJgEQAVgQAVgBIABAAICdAAIANAeQgqBDgcBLQgKAagIAbQggBogHB1IgCASQgEBNAJBlIAAAOQAXESB0DqIACAGIgSAjIgEAEg");
	this.shape_142.setTransform(-11.5,-83.775);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#802424").s().p("AgBJhQgVAAgUgPQgHgEgHgHIgEgEQgUgUgSgjQgPgdgNgmQgKgdgIghQgqikAAjmIAAgBQAAjlAqikQAIgiAKgdQAMglAPgcQASgmAWgUQAIgHAJgFQAUgRAWAAIABAAICdAAIANAfQgpBDgdBLQgKAagIAbQggBpgHB2IgCASQgEBOAJBlIAAAOQAXEUB0DrIACAGIgRAkIgEAEg");
	this.shape_143.setTransform(-11.5,-83.775);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#802424").s().p("AgBJmQgVAAgUgQQgHgEgHgHIgEgFQgVgTgSgkQgOgdgNgmQgKgdgIghQgqimAAjnIAAgBQAAjnAqilQAIghAKgdQAMgmAPgcQASgmAWgUQAIgIAIgFQAVgRAWgBIAAAAICfAAIALAgQgpBEgcBMQgKAagIAbQggBpgHB3IgBATQgEBNAIBmIABAPQAWEVB0DsIABAHIgQAkIgDAFg");
	this.shape_144.setTransform(-11.525,-83.775);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#802424").s().p("AgCJqQgUAAgUgQQgHgEgHgIIgEgEQgVgUgSgkQgPgdgMgnQgKgdgIghQgqimAAjpIAAgBQAAjoAqimQAIghAKgeQAMgmAOgcQATgnAWgUQAHgIAJgFQAUgRAWgBIABAAICgAAIAKAhQgpBEgcBMIgSA2QggBqgHB3IgBATQgEBOAIBmIABAPQAWEWB0DvIABAGIgPAlIgDAFg");
	this.shape_145.setTransform(-11.525,-83.775);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#802424").s().p("AgCJuQgUAAgVgQQgHgFgGgHIgFgEQgUgUgSglQgPgdgMgnQgKgdgIgiQgqinAAjqIAAgBQAAjpAqinQAIgiAJgdQANgmAOgdQATgnAVgVQAIgIAIgFQAVgRAWgBIABAAIChAAIAJAhQgpBFgcBNQgKAagIAcQgfBqgIB4IgBATQgEBOAIBnIABAPQAWEYB0DwIABAHIgPAlIgCAFg");
	this.shape_146.setTransform(-11.55,-83.775);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#802424").s().p("AgCJzQgVAAgUgRQgHgFgHgHIgEgFQgUgUgSglQgPgdgMgoQgKgdgIgiQgqioAAjrIAAgBQAAjqAqioQAIgiAKgeQAMgmAOgdQATgnAVgVQAIgJAIgFQAVgSAWgBIABAAIChAAIAJAiQgpBGgcBNQgKAbgIAcQgfBrgIB4IgBATQgEBPAIBnIABAPQAWEaB0DxIABAHIgOAnIgDAFg");
	this.shape_147.setTransform(-11.575,-83.775);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#802424").s().p("AgCJ3QgVAAgUgRQgHgFgHgHIgEgFQgVgVgRglQgPgegMgnQgKgegIgiQgqipAAjsIAAgBQAAjrAqipQAIgiAKgeQALgnAPgdQASgoAWgVQAHgIAJgGQAUgSAXgBIABAAICiAAIAIAjQgpBGgcBOIgSA2QgfBsgIB5IgBATQgEBQAIBoIABAOQAWEcBzDzIACAGIgNAoIgDAFg");
	this.shape_148.setTransform(-11.575,-83.775);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#802424").s().p("AgDJ7QgUAAgUgRQgHgFgIgIIgDgEQgVgVgSgmQgOgegMgnQgJgegJgiQgpiqAAjuIAAgBQgBjtAriqQAHgiAJgeQAMgnAPgdQASgoAWgWQAHgIAJgGQAUgSAWgBIACAAICjAAIAGAjQgoBHgcBOQgKAbgIAcQgfBsgHB6IgCATQgEBQAJBpIAAAPQAWEdBzD0IABAHIgMAoIgCAFg");
	this.shape_149.setTransform(-11.6,-83.775);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#802424").s().p("AgDKAQgUAAgUgSQgIgFgHgIIgEgFQgUgVgSglQgOgfgNgoQgJgegIgiQgpirAAjvIAAgBQAAjuApirQAIgiAJgfQAMgnAOgeQATgnAVgWIAPgPQAWgTAWgBIACAAICjAAIAGAlQgpBHgbBOIgSA4QggBtgGB6IgCAUQgEBQAJBpIAAAPQAWEfBzD1IABAHIgLApIgCAGg");
	this.shape_150.setTransform(-11.6,-83.775);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#802424").s().p("AgDKEQgVAAgUgSQgHgFgHgIIgEgFQgUgVgSgmQgOgfgMgoQgKgegIgjQgpisAAjwIAAgBQAAjvApisQAIgjAJgeQAMgnAPgfQASgoAVgWQAIgJAHgGQAWgTAWgBIACAAICjAAIAGAlQgoBIgcBPQgKAbgIAdQgfBtgHB7IgBAUQgEBQAIBqIABAPQAVEhBzD3IABAHIgKAqIgDAFg");
	this.shape_151.setTransform(-11.625,-83.775);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#802424").s().p("AgDKIQgVAAgUgSQgIgFgHgIIgEgFQgUgWgRgmQgOgfgNgoQgJgfgIgjQgpitAAjxIAAgBQAAjwApitQAIgjAJgfQAMgnAOgfQASgoAVgXIAQgPQAVgTAWgBIACAAIClAAIAFAmQgpBIgcBPQgJAcgIAcQgfBugHB8IgBAUQgEBRAIBqIABAPQAVEjByD4IACAHIgJArIgDAFg");
	this.shape_152.setTransform(-11.625,-83.775);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#802424").s().p("AgDKNQgVAAgVgTQgHgFgHgJIgEgFQgUgWgRgmQgOgfgMgpQgKgfgIgiQgpiuAAjzIAAgBQAAjxApiuQAIgjAKgfQALgoAOgfQASgoAVgXQAIgJAIgGQAVgVAXgBIABAAIClAAIAFAnQgpBIgcBRIgSA4QgeBvgHB8IgBAUQgEBSAIBqIABAQQAWEkByD6IABAGIgIAsIgEAGg");
	this.shape_153.setTransform(-11.65,-83.775);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#802424").s().p("AgDKRQgWAAgUgTQgHgGgHgIIgEgFQgUgWgRgnQgOgfgMgpQgKgfgIgjQgpivAAj0IAAgBQAAjzApivQAIgjAJgfQAMgoAOgfQASgpAVgXQAIgJAHgGQAWgVAWgBIACAAICmAAIAEAnQgpBJgbBRQgKAcgIAdQgfBvgHB+IgBATQgEBSAIBrIABAQQAVEmByD7IACAHIgIAsIgDAGg");
	this.shape_154.setTransform(-11.675,-83.775);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#802424").s().p("AgEKVQgVAAgUgTQgIgGgGgIIgEgFQgUgXgRgnQgPgfgMgqQgJgfgIgjQgpiwAAj1IAAgBQAAj0ApiwQAIgjAJgfQAMgpAOgfQASgpAUgYIAQgPQAVgVAXgBIACAAICnAAIADAoQgpBJgcBSQgJAcgIAdQgfBwgHB+IgBATQgEBTAIBsIABAPQAVEnByD9IACAHIgHAtIgDAGg");
	this.shape_155.setTransform(-11.675,-83.775);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#802424").s().p("AgEKaQgVAAgVgUQgHgGgGgIIgFgGQgUgWgRgoQgOgggMgpQgJgfgIgkQgoixAAj2IAAgBQgBj1ApixQAIgjAJggQAMgpANgfQASgqAVgXQAIgKAHgGQAWgVAWgCIACAAICoAAIACApQgoBKgbBSIgSA6QgfBwgGB/IgCAUQgEBSAJBtIAAAPQAWEpBxD/IABAHIgGAuIgDAGg");
	this.shape_156.setTransform(-11.7,-83.775);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#802424").s().p("AgEKeQgWAAgUgUQgHgGgHgJIgEgFQgUgXgRgoQgOgggMgpQgJgggIgkQgoiyAAj3IAAgBQAAj2AoiyQAHgkAKggQAMgoANggQASgqAUgYIAQgQQAWgWAWgBIACAAICpAAIABAqQgoBKgcBTQgKAcgHAdQgfBxgGCAIgCAUQgEBTAJBtIAAAPQAWErBxEAIABAHIgFAvIgDAGg");
	this.shape_157.setTransform(-11.7,-83.775);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#802424").s().p("AgEKiQgWAAgUgUIgOgPIgEgFQgUgYgRgoQgOgggMgqQgJgggIgjQgoizAAj5IAAgBQAAj4AoiyQAIgkAJggQALgpAOggQASgqAVgZQAHgJAIgHQAVgWAXgBIACAAICqAAIAAAqQgoBLgcBTQgJAcgIAeQgeBygHCAIgBAUQgEBUAIBtIABAQQAVEsBxEBIABAHQgDAYgBAYIgDAGg");
	this.shape_158.setTransform(-11.725,-83.775);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#802424").s().p("AgFKmQgVAAgVgUQgHgHgHgJIgEgFQgTgYgRgnQgOghgMgrQgJgggIgjQgoi1AAj6IAAAAQAAj5Aoi0QAIgkAJggQALgqAOgfQARgrAVgZQAIgKAHgGQAWgWAXgBIABAAICrAAQgBAUABAWQgoBLgcBUQgJAdgIAeQgeBygHCAIgBAVQgEBUAIBuIABAPQAVEuBwEDIACAHIgEAxIgCAGg");
	this.shape_159.setTransform(-11.725,-83.75);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#802424").s().p("AgFKrQgVAAgVgVQgHgGgHgJIgEgGQgTgYgRgoQgOghgMgrQgJgggIgkQgoi1AAj7IAAgBQAAj6Aoi1QAIgkAJggQALgqAOggQASgrAUgZQAHgKAIgHQAVgXAXgBIADAAICrAAQgBAVAAAXQgoBMgcBUQgJAdgJAeQgdBzgHCBIgBAUQgEBVAIBuIABAQQAVEwBwEEIACAHIgDAyIgCAGg");
	this.shape_160.setTransform(-11.75,-83.775);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#802424").s().p("AgFKvQgWAAgUgVQgHgGgHgKIgEgFQgUgZgQgoQgOghgMgrQgJgggIglQgoi2AAj8IAAgBQAAj7Aoi2QAIgkAJghQALgqAOggQARgrAVgaQAHgKAIgHQAVgXAXgBIACAAICsAAQgBAWAAAWQgoBNgcBUQgJAdgIAfQgeBzgHCCIgBAVQgEBVAIBuIABAQQAVEyBwEFIACAIIgCAyIgDAGg");
	this.shape_161.setTransform(-11.775,-83.775);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#802424").s().p("AgFK0QgWAAgVgXQgHgGgHgJIgEgGQgTgYgRgpQgNgigMgrQgJgggIgkQgoi3AAj/IAAAAQAAj8Aoi4QAIgkAJggQALgqANgiQASgrAUgZQAIgKAHgIQAWgXAXgCIACAAICtAAIgDAtQgoBOgbBUQgKAdgHAfQgeB0gHCDIgBAUQgEBWAIBvIABAQQAVEzBwEIIACAGIgCA0IgCAHg");
	this.shape_162.setTransform(-11.775,-83.75);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#802424").s().p("AgFK4QgWAAgVgWQgHgHgHgJIgEgGQgTgZgRgpQgNgigMgrQgJgggIglQgni4AAj/IAAgBQgBj+Aoi3QAIglAJghQALgqAOghQAQgsAVgaQAIgKAHgIQAWgXAXgCIACAAICtAAIgDAuQgoBOgbBVQgKAegHAeQgeB1gGCDIgCAVQgEBWAJBwIAAAQQAVE1BwEIIACAHQgCAaABAaIgCAHg");
	this.shape_163.setTransform(-11.8,-83.775);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#802424").s().p("AgFK8QgXAAgUgXQgIgGgHgKIgDgFQgUgagQgpQgOgigMgrQgJgigHglQgni4AAkBIAAAAQAAj/Ani5QAHgkAJgiQALgqAOghQARgsAUgbQAIgKAIgIQAVgYAXgBIACAAICvAAIgEAuQgoBOgcBXIgQA7QgeB2gGCEIgCAVQgEBWAJBwIAAAQQAVE3BwEKIACAHIAAA1IgCAHg");
	this.shape_164.setTransform(-11.8,-83.75);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#802424").s().p("AgGLAQgWAAgVgWQgHgHgHgKIgEgGQgTgZgRgqQgNgigMgsQgJghgIglQgni6AAkCIAAAAQAAkBAoi5QAHglAJghQALgrANgiQARgsAVgaQAHgLAIgHQAVgZAYgBIABAAICwAAIgFAvQgnBOgcBXQgJAegIAeQgdB3gHCEIgBAVQgEBWAIBxIABARQAVE4BvEMIACAHIABA1IgCAHg");
	this.shape_165.setTransform(-11.775,-83.75);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#802424").s().p("AgHLFQgWAAgVgXQgHgHgGgKIgFgGQgTgagQgqQgNgigMgsQgJghgIgmQgni6AAkDIAAgBQAAkBAoi7QAGglAKgiQAKgrAOghQARgtAUgbQAHgLAIgHQAVgZAYgCIACAAICxAAQgEAYgCAYQgoBPgbBYQgJAdgJAgQgdB2gGCFIgBAVQgEBYAIBxIABAQQAVE6BuENIACAIQAAAbACAbIgCAHg");
	this.shape_166.setTransform(-11.75,-83.775);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#802424").s().p("AgHLJQgXAAgVgXQgHgIgGgJIgEgHQgTgagRgqQgNgjgMgrQgJgigHglQgni9AAkEIAAAAQAAkDAni8QAHglAJgiQALgrANghQARguAUgbQAIgLAHgHQAWgaAXgBIACAAICyAAQgEAXgDAZQgoBQgbBYIgRA9QgdB3gGCGIgBAVQgEBYAIByIABAQQAUE8BvEOIACAHQAAAcACAcIgCAHg");
	this.shape_167.setTransform(-11.725,-83.75);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#802424").s().p("AgILOQgXAAgUgZQgIgHgGgKIgEgGQgTgagQgrQgOgigLgtQgJghgIgnQgmi8AAkGIAAAAQgBkEAni9QAIgmAJghQAKgsAOgiQAQgtAVgcQAHgKAHgJQAWgZAXgCIADAAICyAAQgEAYgDAaQgoBQgbBYQgJAegIAgQgdB4gGCHIgCAVQgEBXAJBzIAAAQQAVE+BuEQIADAHQAAAcACAcIgBAIg");
	this.shape_168.setTransform(-11.7,-83.75);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#802424").s().p("AgJLSQgWAAgVgYIgOgRIgEgHQgTgagQgrQgNgjgMgtIgQhIQgni+AAkGIAAgBQAAkFAni+QAHglAJgiQALgsANgiQARguAUgcQAHgLAIgIQAVgaAYgCIACAAICzAAQgFAZgDAaQgoBQgbBZIgRA+QgcB4gHCIIgBAVQgEBYAIB0IABAQQAVE/BuERIACAIIAEA5IgCAHg");
	this.shape_169.setTransform(-11.675,-83.775);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#802424").s().p("AgJLWQgWAAgWgYQgGgIgHgKIgFgHQgTgagQgsQgNgigLgtQgJgjgHgmQgni+AAkJIAAAAQAAkGAni/QAHgmAJgjQALgsAMghQARgvAUgcQAHgLAIgIQAWgaAXgCIACAAIC0AAQgFAYgEAbQgnBRgbBZIgRA/QgdB5gGCHIgBAWQgEBZAIB0IABAQQAVFABtEUIACAHIAFA6IgBAHg");
	this.shape_170.setTransform(-11.65,-83.75);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#802424").s().p("AgKLaQgWAAgVgZQgHgHgHgKIgEgGQgTgcgQgrQgNgkgLgtQgJgigIgmQgmjAAAkKIAAAAQAAkIAmjAQAIgmAIgiQALgsANgjQARguATgdQAIgLAHgIQAWgbAXgBIADAAIC1AAQgGAZgEAbQgoBRgaBaQgKAegHAhQgdB5gGCIIgBAWQgEBaAIB0IABAQQAUFDBuEUIACAIIAFA6IgBAHg");
	this.shape_171.setTransform(-11.625,-83.75);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#802424").s().p("AgLLfQgWAAgVgZQgHgIgHgKIgEgHQgSgcgQgsQgNgjgMguIgRhJQgmjAABkLIAAAAQAAkJAmjBQAHgmAJgiQALgtANgjQAQgvAUgcQAHgLAHgJQAXgbAXgCIACAAIC2AAIgKA0QgoBSgbBbIgRA/QgcB6gGCJIgCAWQgEBaAJB1IAAAQQAUFEBuEWIACAHQACAeAEAeIgBAIg");
	this.shape_172.setTransform(-11.6,-83.75);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#802424").s().p("AgLLjQgXAAgVgaQgHgHgHgLIgEgGQgSgcgQgtQgNgjgLguQgJgjgIgnQgmjBAAkMIAAAAQAAkKAnjBQAHgnAJgjQAKgsANgkQAQgvAUgdQAHgMAIgIQAWgcAXgBIACAAIC3AAIgLA1QgoBSgaBbQgKAfgHAhQgdB7gGCJIgBAWQgEBaAIB2IABAQQAUFHBtEXIADAHQACAeAFAeIgCAIg");
	this.shape_173.setTransform(-11.575,-83.75);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#802424").s().p("AgLLoQgYAAgUgaQgIgJgHgKIgDgGQgTgcgQgtQgMgkgMguQgIgjgIgnQgmjDAAkNIAAAAQAAkLAmjDQAIgmAIgkQALgsAMgkQARgvATgdIAPgVQAWgcAYgCIACAAIC3AAQgHAbgFAbQgnBTgbBcQgJAfgHAhQgdB7gGCLIgBAVQgEBbAIB2IABARQAUFHBtEZIACAIIAIA9IgBAIg");
	this.shape_174.setTransform(-11.55,-83.75);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#802424").s().p("AgMLrQgXAAgVgaQgHgHgHgLIgEgHQgTgcgPgtQgNglgLguQgJgjgIgnQgljDAAkPQAAkNAmjDQAHgnAJgjQAKguANgjQAQgwAUgdQAHgMAHgJQAWgcAYgBIACAAIC4AAQgHAagFAcQgoBTgaBcQgJAggIAhQgcB8gHCLIgBAWQgDBbAHB2IABARQAVFJBsEaIADAIQADAfAFAeIgBAIg");
	this.shape_175.setTransform(-11.525,-83.75);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#802424").s().p("AgNLwQgXAAgVgaQgHgJgGgLIgFgGQgSgdgQgtQgMglgLguQgKgkgHgnQgljFAAkPQgBkNAmjGQAIgmAIgkQAKgtANgkQAQgwAUgeQAHgMAHgIQAXgdAXgCIACAAIC5AAQgHAbgGAdQgnBTgbBdQgJAggIAgQgcB9gGCMIgBAWQgDBbAHB3IABASQAVFKBrEcIADAIQAEAfAGAfIgCAIg");
	this.shape_176.setTransform(-11.5,-83.75);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#802424").s().p("AgNL0QgXAAgWgbQgHgIgGgLIgEgHQgTgdgPgtQgNglgLgvQgJgjgHgoQgmjFAAkRQAAkPAmjGQAHgnAJgkQAKgtAMgkQARgwATgfQAHgMAIgJQAWgdAXgBIADAAIC6AAQgIAbgGAdQgoBUgaBdQgJAggIAhQgcB9gGCNIgBAWQgDBcAHB3IABARQAUFNBsEdIACAHQAFAgAGAgIgBAIg");
	this.shape_177.setTransform(-11.475,-83.725);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#802424").s().p("AgOL4QgXAAgVgbQgIgIgGgLIgEgHQgSgdgQguQgMglgMgvQgIgjgIgoQgljHAAkSQAAkQAmjHQAGgnAJgkQALguAMgkQAQgxAUgeQAGgMAIgJQAWgeAYgCIACAAIC7AAQgJAcgGAdQgnBVgaBeQgJAggIAhQgcB+gHCNIAAAWQgDBdAGB4IABARQAVFNBsEgIACAHIALBBIgBAHg");
	this.shape_178.setTransform(-11.45,-83.75);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#802424").s().p("AgPL9QgXAAgVgbQgHgJgHgLIgEgHQgSgegPgtQgNgmgLgvQgJgkgHgoQgljIAAkTQAAkRAljIQAHgnAJgkQAKgvAMgkQAQgxAUgfQAHgMAHgKQAWgdAYgCIACAAIC8AAQgIAcgHAdQgoBWgaBeQgJAggIAiQgbB+gHCOIgBAXQgDBdAHB4IABARQAUFQBsEgIACAIIAMBAIgBAJg");
	this.shape_179.setTransform(-11.425,-83.75);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#802424").s().p("AgQMBQgXAAgVgcQgHgIgGgMIgFgHQgRgegQguQgMglgLgwQgJgkgIgoQgljJABkUQAAkTAljIQAHgoAJgkQAKgvALgkQAQgyAUgfQAHgMAIgJQAVgfAZgBIABAAIC9AAQgIAcgIAeQgnBVgbBfQgJAhgHAhQgcB/gGCPIgBAWQgDBeAHB5IABARQAUFRBrEiIADAIIANBCIgBAIg");
	this.shape_180.setTransform(-11.4,-83.725);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#802424").s().p("AgQMGQgXAAgWgcIgNgUIgEgIQgSgegQgvQgMglgLgwQgJgkgHgpQgljJAAkWQAAkUAljJQAHgoAJglQAKgvAMgkQAQgyATgfQAHgMAIgKQAWgfAYgCIACAAIC+AAQgKAdgIAfQgnBVgaBgIgQBCQgcCAgGCPIgBAXQgDBdAHB6IABASQAUFSBrEkIACAIQAGAhAIAhIgBAJg");
	this.shape_181.setTransform(-11.375,-83.75);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#802424").s().p("AgRMKQgXAAgWgdIgNgUIgEgHQgSgfgPguQgNgmgLgxQgIgkgIgpQgkjKAAkXQAAkVAljKQAHgpAIgkQALgvAMglQAPgyAUggQAGgNAIgJQAWgfAYgCIADAAIC+AAQgKAdgIAfQgnBWgaBgQgJAhgIAiQgbCAgHCQIAAAXQgDBeAGB6IABASQAVFUBrElIACAIQAGAhAIAiIgBAJg");
	this.shape_182.setTransform(-11.35,-83.75);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#802424").s().p("AgRMOQgXAAgWgcIgOgVIgEgHQgSgfgPgvQgMgmgLgxQgIglgIgoQgkjLAAkZQgBkWAljMQAHgoAJglQAJgvANgmQAQgxASghIAPgWQAWgfAYgCIACAAIC/AAQgJAdgJAgQgnBXgaBgQgJAhgIAiQgbCBgGCQIgBAXQgDBeAHB7IABASQAUFWBqEmIADAIQAHAiAJAjIgBAIg");
	this.shape_183.setTransform(-11.3,-83.75);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#802424").s().p("AgSMSQgXAAgWgdIgOgUIgEgIQgRgfgQgvQgMgmgLgxQgIglgHgpQgljMAAkaQAAkYAljMQAHgoAIgmQAKguAMgnQAQgxATghIAOgXQAWggAZgBIACAAIDAAAQgLAegJAeQgmBZgbBhQgJAggHAiQgbCCgGCSIgBAWQgDBfAHB8IABARQAUFYBqEoIACAIQAIAiAJAiIgBAJg");
	this.shape_184.setTransform(-11.275,-83.75);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#802424").s().p("AgTMXQgXAAgWgeQgHgJgGgMIgEgHQgSgggPgvQgNgngKgxQgJglgHgpQgkjOAAkaQAAkZAkjNQAIgpAIglQAJgwANgmQAPgyATghIAOgXQAXggAYgCIACAAIDBAAQgLAegJAgQgnBYgaBiQgJAhgHAiQgcCCgGCSIAAAXQgDBgAGB7IABASQAVFaBpEpIADAIQAHAjAKAjIgBAJg");
	this.shape_185.setTransform(-11.25,-83.725);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#802424").s().p("AgTMbQgYAAgWgeIgNgVIgEgHQgSgggPgwQgMgngLgxIgPhPQgkjOAAkcQAAkaAkjOQAHgpAIglQAKgxAMgmQAQgyASgiIAPgXQAWghAYgBIADAAIDBAAQgLAegKAhQgmBYgbBiIgQBEQgbCDgGCTIgBAWQgDBhAHB8IABASQAUFbBqErIACAHQAIAkAKAjIgBAJg");
	this.shape_186.setTransform(-11.225,-83.75);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#802424").s().p("AgUMgQgYgBgVgeQgHgJgHgMIgDgIQgTgggOgwQgMgngLgyQgJglgGgpQgljQABkdQAAkbAkjQQAGgpAJglQAKgwALgnQAQgzATghIAOgYQAWggAZgDIACAAIDDAAQgMAfgKAhQgnBZgaBiQgJAigHAjQgbCDgGCUIgBAXQgDBgAHB9IABASQAUFdBqEsIACAIQAIAjAKAlIgBAJg");
	this.shape_187.setTransform(-11.2,-83.75);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#802424").s().p("AgUMkQgYAAgWgfQgHgJgGgNIgEgHQgSghgPgwQgMgngKgyQgJgmgHgpQgkjRAAkeQAAkcAkjRQAHgpAIgmQAKgwAMgnQAPgzATgiQAHgOAHgKQAWghAZgCIACAAIDEAAQgMAfgLAhQgmBagaBjQgJAhgIAkQgaCDgGCUIgBAYQgDBhAHB9IABASQATFeBqEuIACAIQAJAkALAkIgBAKg");
	this.shape_188.setTransform(-11.175,-83.725);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#802424").s().p("AgVMoQgYAAgWgfQgGgJgHgMIgEgJQgSgggOgxQgNgngKgyIgQhQQgjjRAAkgQAAkdAkjSQAGgpAJgmQAKgxALgnQAQg0ASghIAPgZQAWghAYgCIACAAIDFAAQgNAfgKAiQgnBagaBjIgQBFQgbCFgGCVIAAAXQgDBiAGB9IABATQAUFfBpEwIADAIQAJAlALAkIgBAJg");
	this.shape_189.setTransform(-11.15,-83.75);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#802424").s().p("AgWMsQgXAAgWgfQgHgKgHgMIgEgIQgRghgPgxQgMgogKgyQgJgmgHgqQgjjSAAkhQAAkfAkjSQAGgqAJgmQAJgxAMgnQAPg0ASgiIAPgZQAWgiAZgBIACAAIDFAAQgNAfgLAiQgmBbgaBkQgJAigHAjQgbCFgGCWIgBAXQgDBiAHB+IABASQAUFiBpEwIACAJQAKAlALAlIAAAJg");
	this.shape_190.setTransform(-11.125,-83.725);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#802424").s().p("AgWMxQgYAAgWggQgHgKgHgMIgDgIQgSghgPgyQgLgogLgyIgPhRQgkjTABkiQAAkgAjjUQAHgpAIgnQAJgxAMgnQAPg0ATgjQAHgOAHgKQAWgjAZgCIACAAIDHAAQgOAggMAiQgmBbgaBlQgIAigIAkQgaCGgGCWIgBAXQgDBiAHB/IABASQATFkBpEyIADAIQAKAmALAlIAAAKg");
	this.shape_191.setTransform(-11.1,-83.725);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#802424").s().p("AgXM1QgYAAgWggQgHgKgGgNIgEgIQgSghgOgxQgMgogKgzQgJgngHgqQgjjUAAkkQAAkhAkjVQAGgpAJgnQAJgyAMgnQAPg1ASgiQAHgOAHgLQAXgjAYgCIADAAIDHAAQgOAhgMAiQgmBbgaBmIgQBGQgaCGgGCXIgBAYQgDBiAHCAIABASQATFlBoE0IADAIQALAmAMAlIgBAKg");
	this.shape_192.setTransform(-11.075,-83.75);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#802424").s().p("AgYM5QgXAAgWggIgOgXIgEgIQgRgigPgxQgLgpgLgzQgIgngHgqQgjjWAAkkQAAkiAjjWQAHgqAIgnQAJgxAMgoQAPg1ASgjIAPgZQAWgkAZgBIACAAIDIAAQgPAggMAjQgmBcgaBmQgJAjgGAjQgbCHgGCYIAAAYQgDBjAGB/IABATQAUFnBoE1IACAIQAMAmAMAmIgBAKg");
	this.shape_193.setTransform(-11.05,-83.725);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#802424").s().p("AgYM+QgYAAgWghIgOgXIgEgIQgRgigOgyQgMgpgKgzQgIgngHgrQgjjWAAkmQAAkkAjjWQAHgqAIgnQAJgyALgoQAPg1ATgkQAHgOAHgLQAWgkAZgCIACAAIDJAAQgPAigMAjQgmBcgaBnQgJAigHAkQgaCIgGCYIgBAYQgDBjAHCBIABASQAUFpBnE2IADAIQALAnANAnIAAAKg");
	this.shape_194.setTransform(-11.025,-83.725);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#802424").s().p("AgZNCQgYAAgWghIgNgXIgEgIQgRgjgOgyQgNgpgKgzQgIgngHgrQgijYAAknQgBklAkjXQAGgqAIgoQAJgxAMgpQAPg1ASglQAHgOAHgLQAXgkAYgCIACAAIDKAAQgPAigMAjQgnBegZBmQgJAjgIAlQgaCIgFCYIgBAYQgDBkAHCBIABASQATFrBoE4IADAIQALAnAOAnIgBAKg");
	this.shape_195.setTransform(-11,-83.75);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#802424").s().p("AgZNGQgYAAgXghQgGgKgHgOIgEgIQgRgigOgzQgMgpgKg0QgIgngHgrQgjjZAAkoQAAkmAjjZQAHgqAIgoQAJgyALgoQAPg2ASgkIAOgaQAXgkAZgCIACAAIDKAAQgPAigNAjQgmBegaBnQgJAjgHAlQgaCJgFCZIgBAYQgDBkAHCCIABATQATFsBnE5IADAIQAMAoAOAnIAAAKg");
	this.shape_196.setTransform(-10.975,-83.725);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#802424").s().p("AgaNLQgYAAgWgiQgHgKgHgOIgDgIQgRgjgPgzQgLgpgKg0QgJgogHgrQgijaAAkpQAAknAjjaQAGgqAJgoQAJgzAKgoQAPg3ATgkQAGgPAHgLQAXglAZgCIADAAIDLAAQgQAjgOAkQgmBegaBoQgIAjgHAlQgaCJgGCaIAAAYQgDBlAGCCIABATQATFtBoE7IACAIQANApAOAnIAAALg");
	this.shape_197.setTransform(-10.95,-83.725);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#802424").s().p("AgaNPQgZAAgWgiIgNgYIgEgIQgRgkgOgzQgMgqgKg0QgIgogHgrQgijaAAkrQAAkpAijaQAHgrAIgoQAJgyALgpQAPg3ASglIAOgaQAWglAZgCIADAAIDMAAQgQAjgOAkQgmBfgaBoQgJAkgHAkQgZCKgGCbIgBAZQgDBlAHCCIABATQATFvBnE8IADAJQANAoAOApIAAAKg");
	this.shape_198.setTransform(-10.925,-83.725);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#802424").s().p("AgbNTQggAAgcg6IgEgJQgfhAgWh1Qgwj0AAlnQAAlkAwj0QAVh4AghAQAdhAAggCIADAAIDNAAQg8B+giCSQgoCqgHDEQgFB1AJCfQAVGmCEFjIAAAKg");
	this.shape_199.setTransform(-10.9,-83.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100}]}).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).wait(1));

	// voda
	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(120,203,239,0.6)").s().p("ALXFLMglMAAAIAAqVMAk/AAAINNAAIAOALQATATAOAdQAwBfAACyQAACzgwBdQgXAvgYAKg");
	this.shape_200.setTransform(159.75,-83.725);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(120,203,239,0.6)").s().p("A51FPIAAqdMAyMAAAIAOALQATATAOAeQAwBgAAC0QAAC1gwBfQgXAvgYAKg");
	this.shape_201.setTransform(159.75,-83.725);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(120,203,239,0.6)").s().p("A51FUIAAqnMAyMAAAIAOAMQATATAOAeQAwBiAAC2QAAC3gwBgQgXAwgYALg");
	this.shape_202.setTransform(159.75,-83.725);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(120,203,239,0.6)").s().p("A51FYIAAqvMAyMAAAIAOAMQATATAOAfQAwBjAAC4QAAC6gwBhQgXAwgYALg");
	this.shape_203.setTransform(159.75,-83.725);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(120,203,239,0.6)").s().p("A51FcIAAq3MAyMAAAIAOAMQATATAOAfQAwBkAAC7QAAC8gwBiQgXAxgYALg");
	this.shape_204.setTransform(159.75,-83.725);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(120,203,239,0.6)").s().p("A51FgIAAq/MAyMAAAIAOAMQATAUAOAfQAwBlAAC9QAAC+gwBkQgXAxgYALg");
	this.shape_205.setTransform(159.75,-83.725);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(120,203,239,0.6)").s().p("A51FkIAArHMAyMAAAIAOALQATAVAOAfQAwBnAAC/QAADAgwBlQgXAygYALg");
	this.shape_206.setTransform(159.75,-83.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(120,203,239,0.6)").s().p("A51FpIAArRMAyMAAAIAOANQATAUAOAgQAwBoAADBQAADDgwBmQgXAygYAMg");
	this.shape_207.setTransform(159.75,-83.725);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(120,203,239,0.6)").s().p("A51FtIAArZMAyMAAAIAOAMQATAVAOAgQAwBpAADFQAADEgwBnQgXAzgYAMg");
	this.shape_208.setTransform(159.75,-83.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(120,203,239,0.6)").s().p("A51FxIAArhMAyMAAAIAOANQATAUAOAhQAwBqAADHQAADHgwBoQgXA0gYALg");
	this.shape_209.setTransform(159.75,-83.725);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(120,203,239,0.6)").s().p("A51F1IAArpMAyMAAAIAOANQATAVAOAhQAwBrAADJQAADJgwBpQgXA1gYALg");
	this.shape_210.setTransform(159.75,-83.725);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(120,203,239,0.6)").s().p("A51F5IAArxMAyMAAAIAOAMQATAWAOAhQAwBtAADLQAADLgwBqQgXA2gYALg");
	this.shape_211.setTransform(159.75,-83.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(120,203,239,0.6)").s().p("A51F+IAAr7MAyMAAAIAOAOQATAVAOAiQAwBtAADOQAADNgwBsQgXA2gYAMg");
	this.shape_212.setTransform(159.75,-83.725);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(120,203,239,0.6)").s().p("A51GCIAAsDMAyMAAAIAOANQATAWAOAiQAwBvAADQQAADPgwBtQgXA2gYANg");
	this.shape_213.setTransform(159.75,-83.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(120,203,239,0.6)").s().p("A51GGIAAsLMAyMAAAIAOAOQATAVAOAjQAwBwAADSQAADSgwBuQgXA3gYAMg");
	this.shape_214.setTransform(159.75,-83.725);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(120,203,239,0.6)").s().p("A51GKIAAsTMAyMAAAIAOANQATAWAOAkQAwBwAADVQAADUgwBwQgXA3gYAMg");
	this.shape_215.setTransform(159.75,-83.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(120,203,239,0.6)").s().p("A51GPIAAsdMAyMAAAIAOAOQATAXAOAjQAwByAADXQAADWgwBxQgXA4gYANg");
	this.shape_216.setTransform(159.75,-83.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(120,203,239,0.6)").s().p("A51GTIAAslMAyMAAAIAOAOQATAWAOAlQAwBzAADZQAADYgwBzQgXA4gYANg");
	this.shape_217.setTransform(159.75,-83.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(120,203,239,0.6)").s().p("A51GXIAAstMAyMAAAIAOAOQATAXAOAkQAwB0AADcQAADbgwBzQgXA5gYANg");
	this.shape_218.setTransform(159.75,-83.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(120,203,239,0.6)").s().p("A51GbIAAs1MAyMAAAIAOAOQATAXAOAlQAwB2AADdQAADegwB0QgXA5gYANg");
	this.shape_219.setTransform(159.75,-83.725);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(120,203,239,0.6)").s().p("A51GgIAAs/MAyMAAAIAOAPQATAXAOAlQAwB3AADgQAADggwB1QgXA6gYAOg");
	this.shape_220.setTransform(159.75,-83.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(120,203,239,0.6)").s().p("A51GjIAAtFMAyMAAAIAOAOQATAXAOAlQAwB5AADiQAADigwB2QgXA7gYANg");
	this.shape_221.setTransform(159.75,-83.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(120,203,239,0.6)").s().p("A51GoIAAtPMAyMAAAIAOAPQATAYAOAlQAwB6AADkQAADkgwB4QgXA7gYAOg");
	this.shape_222.setTransform(159.75,-83.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(120,203,239,0.6)").s().p("A51GsIAAtXMAyMAAAIAOAPQATAYAOAlQAwB8AADmQAADmgwB6QgXA7gYAOg");
	this.shape_223.setTransform(159.75,-83.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(120,203,239,0.6)").s().p("A51GxIAAthMAyMAAAIAOAQQATAYAOAmQAwB9AADoQAADpgwB6QgXA8gYAPg");
	this.shape_224.setTransform(159.75,-83.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(120,203,239,0.6)").s().p("A51G0IAAtoMAyMAAAIAOAQQATAYAOAnQAwB9AADrQAADrgwB8QgXA8gYAOg");
	this.shape_225.setTransform(159.75,-83.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(120,203,239,0.6)").s().p("A51G5IAAtxMAyMAAAIAOAPQATAZAOAnQAwB/AADtQAADtgwB9QgXA9gYAPg");
	this.shape_226.setTransform(159.75,-83.675);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(120,203,239,0.6)").s().p("A51G9IAAt5MAyMAAAIAOAQQATAZAOAnQAwCAAADvQAADwgwB9QgXA/gYAOg");
	this.shape_227.setTransform(159.75,-83.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(120,203,239,0.6)").s().p("A51HBIAAuBMAyMAAAIAOAPQATAaAOAoQAwCAAADyQAADygwB/QgXA/gYAOg");
	this.shape_228.setTransform(159.75,-83.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(120,203,239,0.6)").s().p("A51HGIAAuLMAyMAAAIAOARQATAZAOAoQAwCCAAD0QAAD0gwCAQgXBAgYAPg");
	this.shape_229.setTransform(159.75,-83.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(120,203,239,0.6)").s().p("A51HJIAAuRMAyMAAAIAOAPQATAaAOApQAwCDAAD2QAAD3gwCBQgXBAgYAOg");
	this.shape_230.setTransform(159.75,-83.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(120,203,239,0.6)").s().p("A51HOIAAubMAyMAAAIAOAQQATAaAOApQAwCFAAD4QAAD5gwCCQgXBBgYAPg");
	this.shape_231.setTransform(159.75,-83.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(120,203,239,0.6)").s().p("A51HSIAAujMAyMAAAIAOARQATAZAOApQAwCHAAD6QAAD7gwCEQgXBBgYAPg");
	this.shape_232.setTransform(159.75,-83.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(120,203,239,0.6)").s().p("A51HWIAAurMAyMAAAIAOAQQATAaAOAqQAwCHAAD9QAAD9gwCFQgXBCgYAPg");
	this.shape_233.setTransform(159.75,-83.675);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(120,203,239,0.6)").s().p("A51HaIAAuzMAyMAAAIAOARQATAaAOApQAwCJAAD/QAAEAgwCGQgXBDgYAOg");
	this.shape_234.setTransform(159.75,-83.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(120,203,239,0.6)").s().p("A51HfIAAu9MAyMAAAIAOARQATAbAOAqQAwCJAAECQAAECgwCHQgXBDgYAQg");
	this.shape_235.setTransform(159.75,-83.675);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(120,203,239,0.6)").s().p("A51HjIAAvFMAyMAAAIAOARQATAbAOArQAwCLAAEEQAAEDgwCJQgXBEgYAPg");
	this.shape_236.setTransform(159.75,-83.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(120,203,239,0.6)").s().p("A51HnIAAvNMAyMAAAIAOARQATAbAOArQAwCMAAEHQAAEGgwCJQgXBEgYAQg");
	this.shape_237.setTransform(159.75,-83.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(120,203,239,0.6)").s().p("A51HrIAAvVMAyMAAAIAOARQATAbAOAsQAwCNAAEIQAAEJgwCLQgXBFgYAPg");
	this.shape_238.setTransform(159.75,-83.675);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(120,203,239,0.6)").s().p("A51HwIAAvfMAyMAAAIAOASQATAcAOArQAwCPAAELQAAELgwCLQgXBGgYAQg");
	this.shape_239.setTransform(159.75,-83.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(120,203,239,0.6)").s().p("A51H0IAAvnMAyMAAAIAOASQATAcAOAsQAwCPAAENQAAEOgwCNQgXBGgYAQg");
	this.shape_240.setTransform(159.75,-83.675);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(120,203,239,0.6)").s().p("A51H4IAAvvMAyMAAAIAOASQATAcAOAtQAwCQAAEQQAAEPgwCPQgXBGgYAQg");
	this.shape_241.setTransform(159.75,-83.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(120,203,239,0.6)").s().p("A51H8IAAv3MAyMAAAIAOASQATAcAOAtQAwCSAAERQAAESgwCQQgXBHgYAQg");
	this.shape_242.setTransform(159.75,-83.675);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(120,203,239,0.6)").s().p("A51IAIAAv/MAyMAAAIAOASQATAcAOAtQAwCUAAETQAAEUgwCRQgXBIgYAQg");
	this.shape_243.setTransform(159.75,-83.675);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(120,203,239,0.6)").s().p("A51IFIAAwJMAyMAAAIAOATQATAcAOAuQAwCUAAEWQAAEXgwCSQgXBIgYARg");
	this.shape_244.setTransform(159.75,-83.675);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(120,203,239,0.6)").s().p("A51IJIAAwRMAyMAAAIAOASQATAdAOAvQAwCVAAEYQAAEZgwCTQgXBJgYARg");
	this.shape_245.setTransform(159.75,-83.675);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(120,203,239,0.6)").s().p("A51INIAAwZMAyMAAAIAOASQATAeAOAvQAwCWAAEbQAAEagwCVQgXBKgYAQg");
	this.shape_246.setTransform(159.75,-83.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(120,203,239,0.6)").s().p("A51IRIAAwhMAyMAAAIAOASQATAeAOAvQAwCYAAEcQAAEegwCVQgXBKgYARg");
	this.shape_247.setTransform(159.75,-83.675);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(120,203,239,0.6)").s().p("A51IVIAAwpMAyMAAAIAOASQATAeAOAvQAwCZAAEfQAAEggwCXQgXBKgYARg");
	this.shape_248.setTransform(159.75,-83.675);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(120,203,239,0.6)").s().p("A51IaIAAwzMAyMAAAIAOATQATAeAOAwQAwCaAAEhQAAEigwCYQgXBLgYASg");
	this.shape_249.setTransform(159.75,-83.675);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(120,203,239,0.6)").s().p("A51IeIAAw7MAyMAAAIAOATQATAeAOAwQAwCcAAEkQAAEkgwCYQgXBNgYARg");
	this.shape_250.setTransform(159.75,-83.675);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(120,203,239,0.6)").s().p("A51IiIAAxDMAyMAAAIAOATQATAfAOAwQAwCdAAEmQAAEmgwCaQgXBNgYARg");
	this.shape_251.setTransform(159.75,-83.675);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(120,203,239,0.6)").s().p("A51ImIAAxLMAyMAAAIAOATQATAfAOAwQAwCeAAEpQAAEogwCbQgXBOgYARg");
	this.shape_252.setTransform(159.75,-83.675);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(120,203,239,0.6)").s().p("A51IrIAAxVMAyMAAAIAOAUQATAeAOAxQAwCgAAEqQAAEsgwCbQgXBOgYATg");
	this.shape_253.setTransform(159.75,-83.65);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(120,203,239,0.6)").s().p("A51IvIAAxdMAyMAAAIAOAUQATAfAOAxQAwChAAEtQAAEtgwCdQgXBPgYASg");
	this.shape_254.setTransform(159.75,-83.675);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(120,203,239,0.6)").s().p("A51IzIAAxlMAyMAAAIAOAUQATAfAOAyQAwCiAAEvQAAEvgwCfQgXBPgYASg");
	this.shape_255.setTransform(159.75,-83.675);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(120,203,239,0.6)").s().p("A51I3IAAxtMAyMAAAIAOAUQATAfAOAzQAwCiAAEyQAAEygwCfQgXBQgYASg");
	this.shape_256.setTransform(159.75,-83.675);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(120,203,239,0.6)").s().p("A51I7IAAx1MAyMAAAIAOAUQATAgAOAyQAwCkAAE0QAAE0gwChQgXBQgYASg");
	this.shape_257.setTransform(159.75,-83.675);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(120,203,239,0.6)").s().p("A51I/IAAx+MAyMAAAIAOAUQATAhAOAzQAwCkAAE2QAAE3gwCiQgXBRgYASg");
	this.shape_258.setTransform(159.75,-83.65);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(120,203,239,0.6)").s().p("A51JEIAAyHMAyMAAAIAOAVQATAgAOAzQAwCnAAE4QAAE4gwCkQgXBRgYATg");
	this.shape_259.setTransform(159.75,-83.675);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(120,203,239,0.6)").s().p("A51JIIAAyPMAyMAAAIAOAUQATAhAOA0QAwCnAAE6QAAE8gwCkQgXBSgYATg");
	this.shape_260.setTransform(159.75,-83.65);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(120,203,239,0.6)").s().p("A51JMIAAyXMAyMAAAIAOAVQATAgAOA0QAwCpAAE9QAAE9gwCmQgXBSgYATg");
	this.shape_261.setTransform(159.75,-83.675);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(120,203,239,0.6)").s().p("A51JRIAAyhMAyMAAAIAOAWQATAgAOA0QAwCrAAE+QAAFAgwCnQgXBTgYAUg");
	this.shape_262.setTransform(159.75,-83.65);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(120,203,239,0.6)").s().p("A51JUIAAynMAyMAAAIAOAUQATAiAOA0QAwCsAAFAQAAFCgwCpQgXBUgYASg");
	this.shape_263.setTransform(159.75,-83.65);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(120,203,239,0.6)").s().p("A51JZIAAyxMAyMAAAIAOAWQATAhAOA1QAwCtAAFDQAAFEgwCpQgXBVgYATg");
	this.shape_264.setTransform(159.75,-83.675);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(120,203,239,0.6)").s().p("A51JdIAAy5MAyMAAAIAOAVQATAiAOA2QAwCtAAFGQAAFGgwCrQgXBUgYAUg");
	this.shape_265.setTransform(159.75,-83.65);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(120,203,239,0.6)").s().p("A51JhIAAzBMAyMAAAIAOAVQATAiAOA2QAwCvAAFIQAAFJgwCrQgXBWgYATg");
	this.shape_266.setTransform(159.75,-83.675);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(120,203,239,0.6)").s().p("A51JlIAAzJMAyMAAAIAOAVQATAiAOA2QAwCwAAFLQAAFLgwCsQgXBXgYATg");
	this.shape_267.setTransform(159.75,-83.65);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(120,203,239,0.6)").s().p("A51JqIAAzTMAyMAAAIAOAWQATAjAOA2QAwCxAAFNQAAFNgwCuQgXBXgYAUg");
	this.shape_268.setTransform(159.75,-83.65);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(120,203,239,0.6)").s().p("A51JuIAAzbMAyMAAAIAOAWQATAiAOA3QAwCzAAFPQAAFPgwCvQgXBYgYAUg");
	this.shape_269.setTransform(159.75,-83.65);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(120,203,239,0.6)").s().p("A51JyIAAzjMAyMAAAIAOAWQATAiAOA4QAwC0AAFRQAAFRgwCxQgXBYgYAUg");
	this.shape_270.setTransform(159.75,-83.65);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(120,203,239,0.6)").s().p("A51J2IAAzsMAyMAAAIAOAXQATAjAOA4QAwC1AAFTQAAFUgwCxQgXBZgYAUg");
	this.shape_271.setTransform(159.75,-83.65);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(120,203,239,0.6)").s().p("A51J7IAAz0MAyMAAAIAOAWQATAjAOA4QAwC3AAFVQAAFWgwCzQgXBZgYAVg");
	this.shape_272.setTransform(159.75,-83.65);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(120,203,239,0.6)").s().p("A51J/IAAz9MAyMAAAIAOAXQATAkAOA4QAwC3AAFYQAAFZgwC0QgXBagYAUg");
	this.shape_273.setTransform(159.75,-83.675);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(120,203,239,0.6)").s().p("A51KDIAA0FMAyMAAAIAOAXQATAjAOA5QAwC5AAFaQAAFbgwC1QgXBagYAVg");
	this.shape_274.setTransform(159.75,-83.65);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(120,203,239,0.6)").s().p("A51KHIAA0NMAyMAAAIAOAXQATAjAOA6QAwC5AAFdQAAFdgwC3QgXBagYAVg");
	this.shape_275.setTransform(159.75,-83.65);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(120,203,239,0.6)").s().p("A51KLIAA0VMAyMAAAIAOAWQATAlAOA6QAwC7AAFeQAAFggwC3QgXBcgYAUg");
	this.shape_276.setTransform(159.75,-83.65);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(120,203,239,0.6)").s().p("A51KQIAA0fMAyMAAAIAOAYQATAkAOA6QAwC8AAFhQAAFigwC4QgXBcgYAWg");
	this.shape_277.setTransform(159.75,-83.65);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(120,203,239,0.6)").s().p("A51KUIAA0nMAyMAAAIAOAXQATAlAOA7QAwC9AAFkQAAFjgwC6QgXBcgYAWg");
	this.shape_278.setTransform(159.75,-83.65);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(120,203,239,0.6)").s().p("A51KYIAA0vMAyMAAAIAOAYQATAlAOA6QAwC+AAFnQAAFlgwC7QgXBegYAVg");
	this.shape_279.setTransform(159.75,-83.65);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(120,203,239,0.6)").s().p("A51KcIAA03MAyMAAAIAOAXQATAlAOA7QAwDAAAFoQAAFogwC9QgXBegYAVg");
	this.shape_280.setTransform(159.75,-83.625);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(120,203,239,0.6)").s().p("A51KhIAA1BMAyMAAAIAOAYQATAmAOA7QAwDCAAFqQAAFqgwC+QgXBegYAWg");
	this.shape_281.setTransform(159.75,-83.65);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(120,203,239,0.6)").s().p("A51KkIAA1HMAyMAAAIAOAYQATAlAOA7QAwDDAAFtQAAFtgwC+QgXBfgYAVg");
	this.shape_282.setTransform(159.75,-83.65);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(120,203,239,0.6)").s().p("A51KpIAA1RMAyMAAAIAOAYQATAmAOA8QAwDEAAFvQAAFugwDBQgXBfgYAWg");
	this.shape_283.setTransform(159.75,-83.65);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(120,203,239,0.6)").s().p("A51KtIAA1ZMAyMAAAIAOAZQATAlAOA9QAwDEAAFyQAAFxgwDBQgXBggYAWg");
	this.shape_284.setTransform(159.75,-83.65);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(120,203,239,0.6)").s().p("A51KxIAA1hMAyMAAAIAOAYQATAmAOA9QAwDGAAFzQAAF0gwDCQgXBhgYAWg");
	this.shape_285.setTransform(159.75,-83.625);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(120,203,239,0.6)").s().p("A51K1IAA1qMAyMAAAIAOAZQATAnAOA9QAwDHAAF2QAAF1gwDEQgXBigYAVg");
	this.shape_286.setTransform(159.75,-83.65);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(120,203,239,0.6)").s().p("A51K6IAA1zMAyMAAAIAOAZQATAnAOA9QAwDJAAF3QAAF5gwDEQgXBigYAXg");
	this.shape_287.setTransform(159.75,-83.625);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(120,203,239,0.6)").s().p("A51K+IAA17MAyMAAAIAOAZQATAnAOA+QAwDJAAF7QAAF6gwDGQgXBigYAXg");
	this.shape_288.setTransform(159.75,-83.65);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(120,203,239,0.6)").s().p("A51LCIAA2DMAyMAAAIAOAZQATAnAOA+QAwDLAAF8QAAF9gwDHQgXBjgYAXg");
	this.shape_289.setTransform(159.75,-83.625);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("rgba(120,203,239,0.6)").s().p("A51LGIAA2LMAyMAAAIAOAZQATAnAOA/QAwDMAAF+QAAF/gwDJQgXBjgYAXg");
	this.shape_290.setTransform(159.75,-83.625);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("rgba(120,203,239,0.6)").s().p("A51LKIAA2TMAyMAAAIAOAZQATAnAOBAQAwDNAAGBQAAGBgwDKQgXBkgYAWg");
	this.shape_291.setTransform(159.75,-83.65);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("rgba(120,203,239,0.6)").s().p("A51LPIAA2dMAyMAAAIAOAaQATAnAOBAQAwDOAAGEQAAGDgwDLQgXBlgYAXg");
	this.shape_292.setTransform(159.75,-83.625);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("rgba(120,203,239,0.6)").s().p("A51LTIAA2lMAyMAAAIAOAaQATAoAOA/QAwDRAAGFQAAGFgwDNQgXBlgYAXg");
	this.shape_293.setTransform(159.75,-83.65);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("rgba(120,203,239,0.6)").s().p("A51LXIAA2tMAyMAAAIAOAaQATAoAOBAQAwDRAAGIQAAGIgwDNQgXBmgYAXg");
	this.shape_294.setTransform(159.75,-83.625);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("rgba(120,203,239,0.6)").s().p("A51LbIAA21MAyMAAAIAOAZQATApAOBBQAwDSAAGKQAAGKgwDOQgXBngYAXg");
	this.shape_295.setTransform(159.75,-83.625);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("rgba(120,203,239,0.6)").s().p("A51LgIAA2/MAyMAAAIAOAaQATApAOBBQAwDTAAGNQAAGMgwDQQgXBngYAYg");
	this.shape_296.setTransform(159.75,-83.625);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("rgba(120,203,239,0.6)").s().p("A51LkIAA3HMAyMAAAIAOAaQATApAOBCQAwDUAAGPQAAGPgwDQQgXBogYAYg");
	this.shape_297.setTransform(159.75,-83.625);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("rgba(120,203,239,0.6)").s().p("A51LoIAA3PMAyMAAAIAOAaQATAqAOBBQAwDWAAGRQAAGRgwDSQgXBogYAYg");
	this.shape_298.setTransform(159.75,-83.625);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("rgba(120,203,239,0.6)").s().p("ALXLsMglMAAAIAA3XMAk/AAAINNAAIAOAaQATAqAOBCQAwDXAAGTQAAGTgwDTQgXBpgYAYg");
	this.shape_299.setTransform(159.75,-83.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_200}]}).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).wait(1));

	// dira
	this.instance = new lib.Path();
	this.instance.setTransform(308.75,-86.45,0.8721,0.9616,0,14.9414,-165.0592,7.3,7.3);
	this.instance.alpha = 0.4609;

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(308.4,-89.7,0.9616,1.0017,0,14.9412,-165.0586,6.6,9.7);
	this.instance_1.alpha = 0.6484;

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#8D2829").ss(0.6).p("AA5gfQAWAmgBAlQgCAlgXANQgYAOgfgTQgfgRgWgoQgWgmAAglQABglAYgNQAXgOAfASQAgASAXAog");
	this.shape_300.setTransform(308.905,-89.1989,0.9619,0.9619,14.9417);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#92DFFF").s().p("AgCBZQgfgRgWgoQgWgmAAglQABglAYgNQAXgOAfASQAgASAXAoQAWAmgBAlQgCAlgXANQgKAGgLAAQgQAAgSgLg");
	this.shape_301.setTransform(308.905,-89.1989,0.9619,0.9619,14.9417);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_301},{t:this.shape_300},{t:this.instance_1},{t:this.instance}]}).wait(100));

	// Vrstva_6
	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#F9B620").ss(0.6).p("A4BAAMAwDAAA");
	this.shape_302.setTransform(160.975,-118.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#F9B620").ss(0.6).p("A4BABMAwDgAB");
	this.shape_303.setTransform(160.975,-124.15);
	this.shape_303._off = true;

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#F9B620").ss(0.6).p("A4BABMAwDgAC");
	this.shape_304.setTransform(160.975,-133.95);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#F9B620").ss(0.6).p("A4BACMAwDgAC");
	this.shape_305.setTransform(160.975,-134.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#F9B620").ss(0.6).p("A4BACMAwDgAD");
	this.shape_306.setTransform(160.975,-135.65);
	this.shape_306._off = true;

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#F9B620").ss(0.6).p("A4BADMAwDgAF");
	this.shape_307.setTransform(160.975,-146.3);
	this.shape_307._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_302}]}).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304,p:{y:-133.95}}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_304,p:{y:-136.95}}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_302).wait(1).to({y:-118.625},0).wait(1).to({y:-119.05},0).wait(1).to({y:-119.475},0).wait(1).to({y:-119.9},0).wait(1).to({y:-120.325},0).wait(1).to({y:-120.775},0).wait(1).to({y:-121.175},0).wait(1).to({y:-121.625},0).wait(1).to({y:-122.025},0).wait(1).to({y:-122.45},0).wait(1).to({y:-122.875},0).wait(1).to({y:-123.3},0).wait(1).to({y:-123.75},0).to({_off:true},1).wait(1).to({_off:false,y:-124.6},0).wait(1).to({y:-125},0).wait(1).to({y:-125.45},0).to({_off:true},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.shape_303).wait(14).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,y:-125.875},0).wait(1).to({y:-126.275},0).wait(1).to({y:-126.725},0).wait(1).to({y:-127.125},0).wait(1).to({y:-127.575},0).wait(1).to({y:-127.975},0).wait(1).to({y:-128.425},0).wait(1).to({y:-128.85},0).wait(1).to({y:-129.275},0).wait(1).to({y:-129.7},0).wait(1).to({y:-130.1},0).wait(1).to({y:-130.55},0).wait(1).to({y:-130.975},0).wait(1).to({y:-131.4},0).wait(1).to({y:-131.825},0).wait(1).to({y:-132.25},0).wait(1).to({y:-132.675},0).wait(1).to({y:-133.125},0).wait(1).to({y:-133.525},0).to({_off:true},1).wait(1).to({_off:false,y:-134.375},0).to({_off:true},1).wait(1).to({_off:false,y:-135.225},0).to({_off:true},1).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.shape_306).wait(41).to({_off:false},0).wait(1).to({y:-136.1},0).wait(1).to({y:-136.5},0).to({_off:true},1).wait(1).to({_off:false,y:-137.35},0).wait(1).to({y:-137.775},0).wait(1).to({y:-138.225},0).wait(1).to({y:-138.625},0).wait(1).to({y:-139.075},0).wait(1).to({y:-139.475},0).wait(1).to({y:-139.925},0).wait(1).to({y:-140.325},0).wait(1).to({y:-140.775},0).wait(1).to({y:-141.2},0).wait(1).to({y:-141.6},0).wait(1).to({y:-142.05},0).wait(1).to({y:-142.45},0).wait(1).to({y:-142.9},0).wait(1).to({y:-143.325},0).wait(1).to({y:-143.75},0).wait(1).to({y:-144.175},0).wait(1).to({y:-144.6},0).wait(1).to({y:-145.025},0).wait(1).to({y:-145.425},0).wait(1).to({y:-145.875},0).to({_off:true},1).wait(1).to({_off:false,y:-146.725},0).to({_off:true},1).wait(1).to({_off:false,y:-147.575},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_307).wait(66).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:-147.15},0).to({_off:true},1).wait(1).to({_off:false,y:-148},0).wait(1).to({y:-148.45},0).wait(1).to({y:-148.85},0).wait(1).to({y:-149.275},0).wait(1).to({y:-149.7},0).wait(1).to({y:-150.125},0).wait(1).to({y:-150.575},0).wait(1).to({y:-150.975},0).wait(1).to({y:-151.425},0).wait(1).to({y:-151.825},0).wait(1).to({y:-152.275},0).wait(1).to({y:-152.675},0).wait(1).to({y:-153.1},0).wait(1).to({y:-153.55},0).wait(1).to({y:-153.95},0).wait(1).to({y:-154.4},0).wait(1).to({y:-154.8},0).wait(1).to({y:-155.25},0).wait(1).to({y:-155.675},0).wait(1).to({y:-156.1},0).wait(1).to({y:-156.525},0).wait(1).to({y:-156.925},0).wait(1).to({y:-157.375},0).wait(1).to({y:-157.775},0).wait(1).to({y:-158.225},0).wait(1).to({y:-158.65},0).wait(1).to({y:-159.075},0).wait(1).to({y:-159.5},0).wait(1).to({y:-159.925},0).wait(1).to({y:-160.35},0).wait(1));

	// Vrstva_7
	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#F9B620").ss(0.6).p("A4DAAMAwHAAA");
	this.shape_308.setTransform(161.225,-49.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#F9B620").ss(0.6).p("A4DABMAwHgAB");
	this.shape_309.setTransform(161.225,-35.95);
	this.shape_309._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_308).wait(1).to({y:-48.85},0).wait(1).to({y:-48.45},0).wait(1).to({y:-48},0).wait(1).to({y:-47.575},0).wait(1).to({y:-47.15},0).wait(1).to({y:-46.7},0).wait(1).to({y:-46.3},0).wait(1).to({y:-45.85},0).wait(1).to({y:-45.425},0).wait(1).to({y:-45},0).wait(1).to({y:-44.55},0).wait(1).to({y:-44.125},0).wait(1).to({y:-43.7},0).wait(1).to({y:-43.275},0).wait(1).to({y:-42.825},0).wait(1).to({y:-42.4},0).wait(1).to({y:-41.975},0).wait(1).to({y:-41.55},0).wait(1).to({y:-41.125},0).wait(1).to({y:-40.675},0).wait(1).to({y:-40.25},0).wait(1).to({y:-39.825},0).wait(1).to({y:-39.375},0).wait(1).to({y:-38.975},0).wait(1).to({y:-38.525},0).wait(1).to({y:-38.1},0).wait(1).to({y:-37.675},0).wait(1).to({y:-37.225},0).wait(1).to({y:-36.825},0).wait(1).to({y:-36.375},0).to({_off:true},1).wait(1).to({_off:false,y:-35.525},0).wait(1).to({y:-35.075},0).to({_off:true},1).wait(1).to({_off:false,y:-34.225},0).wait(1).to({y:-33.8},0).wait(1).to({y:-33.35},0).wait(1).to({y:-32.925},0).wait(1).to({y:-32.5},0).wait(1).to({y:-32.075},0).wait(1).to({y:-31.65},0).to({_off:true},1).wait(1).to({_off:false,y:-30.775},0).to({_off:true},1).wait(1).to({_off:false,y:-29.9},0).to({_off:true},1).wait(6).to({_off:false,y:-26.9},0).to({_off:true},1).wait(10).to({_off:false,y:-22.15},0).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_309).wait(31).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,y:-34.65},0).to({_off:true},1).wait(7).to({_off:false,y:-31.2},0).to({_off:true},1).wait(1).to({_off:false,y:-30.35},0).to({_off:true},1).wait(1).to({_off:false,y:-29.5},0).wait(1).to({y:-29.05},0).wait(1).to({y:-28.6},0).wait(1).to({y:-28.2},0).wait(1).to({y:-27.75},0).wait(1).to({y:-27.35},0).to({_off:true},1).wait(1).to({_off:false,y:-26.45},0).wait(1).to({y:-26.05},0).wait(1).to({y:-25.6},0).wait(1).to({y:-25.175},0).wait(1).to({y:-24.75},0).wait(1).to({y:-24.3},0).wait(1).to({y:-23.875},0).wait(1).to({y:-23.45},0).wait(1).to({y:-23.025},0).wait(1).to({y:-22.6},0).to({_off:true},1).wait(1).to({_off:false,y:-21.725},0).wait(1).to({y:-21.3},0).wait(1).to({y:-20.875},0).wait(1).to({y:-20.425},0).wait(1).to({y:-20},0).wait(1).to({y:-19.575},0).wait(1).to({y:-19.125},0).wait(1).to({y:-18.725},0).wait(1).to({y:-18.275},0).wait(1).to({y:-17.85},0).wait(1).to({y:-17.425},0).wait(1).to({y:-16.975},0).wait(1).to({y:-16.575},0).wait(1).to({y:-16.125},0).wait(1).to({y:-15.7},0).wait(1).to({y:-15.275},0).wait(1).to({y:-14.825},0).wait(1).to({y:-14.4},0).wait(1).to({y:-13.975},0).wait(1).to({y:-13.55},0).wait(1).to({y:-13.125},0).wait(1).to({y:-12.675},0).wait(1).to({y:-12.25},0).wait(1).to({y:-11.825},0).wait(1).to({y:-11.4},0).wait(1).to({y:-10.95},0).wait(1).to({y:-10.525},0).wait(1).to({y:-10.1},0).wait(1).to({y:-9.65},0).wait(1).to({y:-9.25},0).wait(1).to({y:-8.8},0).wait(1).to({y:-8.375},0).wait(1).to({y:-7.95},0).wait(1).to({y:-7.5},0).wait(1).to({y:-7.1},0).wait(1).to({y:-6.65},0).wait(1));

	// Vrstva_8
	this.instance_2 = new lib.prumer();
	this.instance_2.setTransform(7.55,-83.7,1.9435,1.9435,0,0,0,-6.9,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:17.7,scaleY:4.2977,y:-84.05},99).wait(1));

	// Vrstva_9
	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#66CCFF").s().p("A4JFYIAAqwMAwTAAAIAAKyg");
	this.shape_310.setTransform(159.65,-83.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#66CCFF").s().p("A4JFdIAAq6MAwTAAAIAAK6g");
	this.shape_311.setTransform(159.65,-83.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#66CCFF").s().p("A4JFhIAArCMAwTAAAIAALDg");
	this.shape_312.setTransform(159.65,-83.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#66CCFF").s().p("A4JFlIAArKMAwTAAAIAALLg");
	this.shape_313.setTransform(159.65,-83.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#66CCFF").s().p("A4JFpIAArSMAwTAAAIAALTg");
	this.shape_314.setTransform(159.65,-83.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#66CCFF").s().p("A4JFuIAArcMAwTAAAIAALdg");
	this.shape_315.setTransform(159.65,-83.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#66CCFF").s().p("A4JFyIAArkMAwTAAAIAALlg");
	this.shape_316.setTransform(159.65,-83.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#66CCFF").s().p("A4JF2IAArsMAwTAAAIAALtg");
	this.shape_317.setTransform(159.65,-83.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#66CCFF").s().p("A4JF6IAAr0MAwTAAAIAAL1g");
	this.shape_318.setTransform(159.65,-83.075);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#66CCFF").s().p("A4JF/IAAr9MAwTAAAIAAL+g");
	this.shape_319.setTransform(159.65,-83.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#66CCFF").s().p("A4JGCIAAsFMAwTAAAIAAMHg");
	this.shape_320.setTransform(159.65,-83.075);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#66CCFF").s().p("A4JGHIAAsOMAwTAAAIAAMPg");
	this.shape_321.setTransform(159.65,-83.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#66CCFF").s().p("A4JGLIAAsWMAwTAAAIAAMXg");
	this.shape_322.setTransform(159.65,-83.075);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#66CCFF").s().p("A4JGQIAAsfMAwTAAAIAAMgg");
	this.shape_323.setTransform(159.65,-83.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#66CCFF").s().p("A4JGTIAAsnMAwTAAAIAAMpg");
	this.shape_324.setTransform(159.65,-83.075);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#66CCFF").s().p("A4JGYIAAswMAwTAAAIAAMxg");
	this.shape_325.setTransform(159.65,-83.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#66CCFF").s().p("A4JGcIAAs4MAwTAAAIAAM5g");
	this.shape_326.setTransform(159.65,-83.075);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#66CCFF").s().p("A4JGgIAAtAMAwTAAAIAANBg");
	this.shape_327.setTransform(159.65,-83.075);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#66CCFF").s().p("A4JGkIAAtJMAwTAAAIAANLg");
	this.shape_328.setTransform(159.65,-83.075);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#66CCFF").s().p("A4JGoIAAtRMAwTAAAIAANTg");
	this.shape_329.setTransform(159.65,-83.075);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#66CCFF").s().p("A4JGtIAAtaMAwTAAAIAANbg");
	this.shape_330.setTransform(159.65,-83.075);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#66CCFF").s().p("A4JGxIAAtiMAwTAAAIAANjg");
	this.shape_331.setTransform(159.65,-83.075);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#66CCFF").s().p("A4JG1IAAtrMAwTAAAIAANtg");
	this.shape_332.setTransform(159.65,-83.075);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#66CCFF").s().p("A4JG5IAAtzMAwTAAAIAAN1g");
	this.shape_333.setTransform(159.65,-83.075);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#66CCFF").s().p("A4JG9IAAt7MAwTAAAIAAN9g");
	this.shape_334.setTransform(159.65,-83.05);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#66CCFF").s().p("A4JHCIAAuEMAwTAAAIAAOFg");
	this.shape_335.setTransform(159.65,-83.075);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#66CCFF").s().p("A4JHGIAAuNMAwTAAAIAAOOg");
	this.shape_336.setTransform(159.65,-83.05);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#66CCFF").s().p("A4JHKIAAuVMAwTAAAIAAOXg");
	this.shape_337.setTransform(159.65,-83.075);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#66CCFF").s().p("A4JHOIAAudMAwTAAAIAAOfg");
	this.shape_338.setTransform(159.65,-83.05);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#66CCFF").s().p("A4JHTIAAumMAwTAAAIAAOng");
	this.shape_339.setTransform(159.65,-83.075);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#66CCFF").s().p("A4JHWIAAuuMAwTAAAIAAOwg");
	this.shape_340.setTransform(159.65,-83.05);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#66CCFF").s().p("A4JHbIAAu2MAwTAAAIAAO4g");
	this.shape_341.setTransform(159.65,-83.05);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#66CCFF").s().p("A4JHfIAAu/MAwTAAAIAAPBg");
	this.shape_342.setTransform(159.65,-83.05);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#66CCFF").s().p("A4JHjIAAvHMAwTAAAIAAPJg");
	this.shape_343.setTransform(159.65,-83.05);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#66CCFF").s().p("A4JHoIAAvQMAwTAAAIAAPRg");
	this.shape_344.setTransform(159.65,-83.075);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#66CCFF").s().p("A4JHsIAAvYMAwTAAAIAAPag");
	this.shape_345.setTransform(159.65,-83.05);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#66CCFF").s().p("A4JHwIAAvhMAwTAAAIAAPjg");
	this.shape_346.setTransform(159.65,-83.075);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#66CCFF").s().p("A4JH0IAAvpMAwTAAAIAAPrg");
	this.shape_347.setTransform(159.65,-83.05);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#66CCFF").s().p("A4JH5IAAvyMAwTAAAIAAPzg");
	this.shape_348.setTransform(159.65,-83.075);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#66CCFF").s().p("A4JH8IAAv6MAwTAAAIAAP8g");
	this.shape_349.setTransform(159.65,-83.05);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#66CCFF").s().p("A4JIBIAAwCMAwTAAAIAAQEg");
	this.shape_350.setTransform(159.65,-83.05);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#66CCFF").s().p("A4JIFIAAwLMAwTAAAIAAQNg");
	this.shape_351.setTransform(159.65,-83.05);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#66CCFF").s().p("A4JIKIAAwUMAwTAAAIAAQVg");
	this.shape_352.setTransform(159.65,-83.05);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#66CCFF").s().p("A4JINIAAwcMAwTAAAIAAQeg");
	this.shape_353.setTransform(159.65,-83.05);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#66CCFF").s().p("A4JISIAAwkMAwTAAAIAAQmg");
	this.shape_354.setTransform(159.65,-83.05);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#66CCFF").s().p("A4JIWIAAwtMAwTAAAIAAQvg");
	this.shape_355.setTransform(159.65,-83.05);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#66CCFF").s().p("A4JIaIAAw1MAwTAAAIAAQ3g");
	this.shape_356.setTransform(159.65,-83.05);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#66CCFF").s().p("A4JIeIAAw9MAwTAAAIAAQ/g");
	this.shape_357.setTransform(159.65,-83.025);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#66CCFF").s().p("A4JIiIAAxFMAwTAAAIAARIg");
	this.shape_358.setTransform(159.65,-83.05);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#66CCFF").s().p("A4JInIAAxPMAwTAAAIAARRg");
	this.shape_359.setTransform(159.65,-83.025);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#66CCFF").s().p("A4JIrIAAxXMAwTAAAIAARZg");
	this.shape_360.setTransform(159.65,-83.05);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#66CCFF").s().p("A4JIvIAAxfMAwTAAAIAARhg");
	this.shape_361.setTransform(159.65,-83.025);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#66CCFF").s().p("A4JIzIAAxnMAwTAAAIAARqg");
	this.shape_362.setTransform(159.65,-83.05);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#66CCFF").s().p("A4JI4IAAxxMAwTAAAIAARzg");
	this.shape_363.setTransform(159.65,-83.025);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#66CCFF").s().p("A4JI8IAAx5MAwTAAAIAAR7g");
	this.shape_364.setTransform(159.65,-83.025);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#66CCFF").s().p("A4JJAIAAyBMAwTAAAIAASDg");
	this.shape_365.setTransform(159.65,-83.025);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#66CCFF").s().p("A4JJEIAAyJMAwTAAAIAASLg");
	this.shape_366.setTransform(159.65,-83.025);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#66CCFF").s().p("A4JJIIAAySMAwTAAAIAASVg");
	this.shape_367.setTransform(159.65,-83.025);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#66CCFF").s().p("A4JJNIAAybMAwTAAAIAASdg");
	this.shape_368.setTransform(159.65,-83.025);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#66CCFF").s().p("A4JJRIAAyjMAwTAAAIAASlg");
	this.shape_369.setTransform(159.65,-83.025);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#66CCFF").s().p("A4JJVIAAyrMAwTAAAIAAStg");
	this.shape_370.setTransform(159.65,-83.025);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#66CCFF").s().p("A4JJZIAAy0MAwTAAAIAAS2g");
	this.shape_371.setTransform(159.65,-83);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#66CCFF").s().p("A4JJeIAAy9MAwTAAAIAAS/g");
	this.shape_372.setTransform(159.65,-83.025);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#66CCFF").s().p("A4JJhIAAzEMAwTAAAIAATHg");
	this.shape_373.setTransform(159.65,-83);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#66CCFF").s().p("A4JJmIAAzNMAwTAAAIAATPg");
	this.shape_374.setTransform(159.65,-83.025);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#66CCFF").s().p("A4JJqIAAzWMAwTAAAIAATYg");
	this.shape_375.setTransform(159.65,-83);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#66CCFF").s().p("A4JJuIAAzeMAwTAAAIAAThg");
	this.shape_376.setTransform(159.65,-83.025);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#66CCFF").s().p("A4JJzIAAznMAwTAAAIAATpg");
	this.shape_377.setTransform(159.65,-83.025);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#66CCFF").s().p("A4JJ3IAAzvMAwTAAAIAATxg");
	this.shape_378.setTransform(159.65,-83.025);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#66CCFF").s().p("A4JJ7IAAz3MAwTAAAIAAT5g");
	this.shape_379.setTransform(159.65,-83.025);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#66CCFF").s().p("A4JJ/IAA0AMAwTAAAIAAUDg");
	this.shape_380.setTransform(159.65,-83);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#66CCFF").s().p("A4JKEIAA0JMAwTAAAIAAULg");
	this.shape_381.setTransform(159.65,-83.025);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#66CCFF").s().p("A4JKHIAA0QMAwTAAAIAAUTg");
	this.shape_382.setTransform(159.65,-83);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#66CCFF").s().p("A4JKMIAA0ZMAwTAAAIAAUbg");
	this.shape_383.setTransform(159.65,-83.025);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#66CCFF").s().p("A4JKQIAA0iMAwTAAAIAAUkg");
	this.shape_384.setTransform(159.65,-83);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#66CCFF").s().p("A4JKUIAA0qMAwTAAAIAAUtg");
	this.shape_385.setTransform(159.65,-83.025);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#66CCFF").s().p("A4JKYIAA0yMAwTAAAIAAU1g");
	this.shape_386.setTransform(159.65,-83);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#66CCFF").s().p("A4JKdIAA07MAwTAAAIAAU9g");
	this.shape_387.setTransform(159.65,-83);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#66CCFF").s().p("A4JKhIAA1EMAwTAAAIAAVGg");
	this.shape_388.setTransform(159.65,-83);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#66CCFF").s().p("A4JKlIAA1LMAwTAAAIAAVOg");
	this.shape_389.setTransform(159.65,-83);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#66CCFF").s().p("A4JKpIAA1UMAwTAAAIAAVXg");
	this.shape_390.setTransform(159.65,-83);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#66CCFF").s().p("A4JKtIAA1cMAwTAAAIAAVfg");
	this.shape_391.setTransform(159.65,-83);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#66CCFF").s().p("A4JKyIAA1mMAwTAAAIAAVog");
	this.shape_392.setTransform(159.65,-83);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#66CCFF").s().p("A4JK2IAA1tMAwTAAAIAAVwg");
	this.shape_393.setTransform(159.65,-83);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#66CCFF").s().p("A4JK6IAA12MAwTAAAIAAV5g");
	this.shape_394.setTransform(159.65,-82.975);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#66CCFF").s().p("A4JK+IAA1+MAwTAAAIAAWBg");
	this.shape_395.setTransform(159.65,-83);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#66CCFF").s().p("A4JLCIAA2GMAwTAAAIAAWJg");
	this.shape_396.setTransform(159.65,-82.975);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#66CCFF").s().p("A4JLHIAA2QMAwTAAAIAAWTg");
	this.shape_397.setTransform(159.65,-83);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#66CCFF").s().p("A4JLLIAA2YMAwTAAAIAAWbg");
	this.shape_398.setTransform(159.65,-82.975);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#66CCFF").s().p("A4JLPIAA2gMAwTAAAIAAWjg");
	this.shape_399.setTransform(159.65,-83);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#66CCFF").s().p("A4JLTIAA2oMAwTAAAIAAWrg");
	this.shape_400.setTransform(159.65,-82.975);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#66CCFF").s().p("A4JLXIAA2xMAwTAAAIAAW0g");
	this.shape_401.setTransform(159.65,-83);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#66CCFF").s().p("A4JLcIAA26MAwTAAAIAAW9g");
	this.shape_402.setTransform(159.65,-82.975);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#66CCFF").s().p("A4JLgIAA3CMAwTAAAIAAXFg");
	this.shape_403.setTransform(159.65,-82.975);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#66CCFF").s().p("A4JLkIAA3KMAwTAAAIAAXNg");
	this.shape_404.setTransform(159.65,-82.975);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#66CCFF").s().p("A4JLoIAA3SMAwTAAAIAAXVg");
	this.shape_405.setTransform(159.65,-82.975);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#66CCFF").s().p("A4JLtIAA3cMAwTAAAIAAXfg");
	this.shape_406.setTransform(159.65,-82.975);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#66CCFF").s().p("A4JLxIAA3kMAwTAAAIAAXng");
	this.shape_407.setTransform(159.65,-82.975);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#66CCFF").s().p("A4JL1IAA3sMAwTAAAIAAXvg");
	this.shape_408.setTransform(159.65,-82.975);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#66CCFF").s().p("A4JL5IAA30MAwTAAAIAAX3g");
	this.shape_409.setTransform(159.65,-82.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_310}]}).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).wait(1));

	// _Group__30
	this.instance_3 = new lib.Group_30();
	this.instance_3.setTransform(-0.35,-83.9,1.9435,1.9435,0,0,0,2.8,9.8);
	this.instance_3.alpha = 0.1289;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// Vrstva_11
	this.instance_4 = new lib.Kruh2();
	this.instance_4.setTransform(313.9,-83.7,1.9435,1.9435,0,0,0,7,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:4.3087,y:-83.6},99).wait(1));

	// Vrstva_12
	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#D86061").s().p("A4EGoIAAtPMAwJAAAIAANPg");
	this.shape_410.setTransform(161.025,-83.725);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#D86061").s().p("A4EGsIAAtXMAwJAAAIAANXg");
	this.shape_411.setTransform(161.025,-83.725);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#D86061").s().p("A4EGwIAAtfMAwJAAAIAANfg");
	this.shape_412.setTransform(161.025,-83.725);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#D86061").s().p("A4EG1IAAtpMAwJAAAIAANpg");
	this.shape_413.setTransform(161.025,-83.725);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#D86061").s().p("A4EG4IAAtwMAwJAAAIAANxg");
	this.shape_414.setTransform(161.025,-83.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#D86061").s().p("A4EG9IAAt5MAwJAAAIAAN5g");
	this.shape_415.setTransform(161.025,-83.725);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#D86061").s().p("A4EHCIAAuCMAwJgABIAAODg");
	this.shape_416.setTransform(161.025,-83.725);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#D86061").s().p("A4EHGIAAuLMAwJAAAIAAOLg");
	this.shape_417.setTransform(161.025,-83.725);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#D86061").s().p("A4EHKIAAuTMAwJAAAIAAOTg");
	this.shape_418.setTransform(161.025,-83.725);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#D86061").s().p("A4EHOIAAucMAwJAAAIAAOdg");
	this.shape_419.setTransform(161.025,-83.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#D86061").s().p("A4EHTIAAukMAwJgABIAAOlg");
	this.shape_420.setTransform(161.025,-83.725);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#D86061").s().p("A4EHXIAAutMAwJAAAIAAOtg");
	this.shape_421.setTransform(161.025,-83.725);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#D86061").s().p("A4EHbIAAu1MAwJAAAIAAO1g");
	this.shape_422.setTransform(161.025,-83.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#D86061").s().p("A4EHgIAAu+MAwJgABIAAO/g");
	this.shape_423.setTransform(161.025,-83.725);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#D86061").s().p("A4EHjIAAvFMAwJgABIAAPHg");
	this.shape_424.setTransform(161.025,-83.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#D86061").s().p("A4EHoIAAvPMAwJgABIAAPRg");
	this.shape_425.setTransform(161.025,-83.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#D86061").s().p("A4EHtIAAvYMAwJgABIAAPZg");
	this.shape_426.setTransform(161.025,-83.725);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#D86061").s().p("A4EHxIAAvhMAwJAAAIAAPhg");
	this.shape_427.setTransform(161.025,-83.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#D86061").s().p("A4EH1IAAvpMAwJAAAIAAPpg");
	this.shape_428.setTransform(161.025,-83.725);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#D86061").s().p("A4EH5IAAvxMAwJgABIAAPzg");
	this.shape_429.setTransform(161.025,-83.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#D86061").s().p("A4EH9IAAv5MAwJgABIAAP7g");
	this.shape_430.setTransform(161.025,-83.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#D86061").s().p("A4EICIAAwCMAwJgABIAAQDg");
	this.shape_431.setTransform(161.025,-83.725);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#D86061").s().p("A4EIGIAAwLMAwJAAAIAAQLg");
	this.shape_432.setTransform(161.025,-83.7);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#D86061").s().p("A4EILIAAwUMAwJgABIAAQVg");
	this.shape_433.setTransform(161.025,-83.7);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#D86061").s().p("A4EIOIAAwcMAwJAAAIAAQdg");
	this.shape_434.setTransform(161.025,-83.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#D86061").s().p("A4EITIAAwkMAwJgACIAAQng");
	this.shape_435.setTransform(161.025,-83.7);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#D86061").s().p("A4EIXIAAwtMAwJgABIAAQvg");
	this.shape_436.setTransform(161.025,-83.675);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#D86061").s().p("A4EIbIAAw1MAwJgABIAAQ3g");
	this.shape_437.setTransform(161.025,-83.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#D86061").s().p("A4EIgIAAw/MAwJgABIAARAg");
	this.shape_438.setTransform(161.025,-83.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#D86061").s().p("A4EIkIAAxHMAwJAAAIAARHg");
	this.shape_439.setTransform(161.025,-83.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#D86061").s().p("A4EIpIAAxQMAwJgABIAARRg");
	this.shape_440.setTransform(161.025,-83.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#D86061").s().p("A4EIsIAAxYMAwJAAAIAARZg");
	this.shape_441.setTransform(161.025,-83.675);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#D86061").s().p("A4EIxIAAxhMAwJgABIAARjg");
	this.shape_442.setTransform(161.025,-83.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#D86061").s().p("A4EI1IAAxpMAwJgABIAARrg");
	this.shape_443.setTransform(161.025,-83.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#D86061").s().p("A4EI5IAAxxMAwJgABIAARzg");
	this.shape_444.setTransform(161.025,-83.675);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#D86061").s().p("A4EI+IAAx6MAwJgABIAAR7g");
	this.shape_445.setTransform(161.025,-83.7);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#D86061").s().p("A4EJCIAAyDMAwJgABIAASFg");
	this.shape_446.setTransform(161.025,-83.675);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#D86061").s().p("A4EJGIAAyLMAwJgABIAASNg");
	this.shape_447.setTransform(161.025,-83.675);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#D86061").s().p("A4EJLIAAyUMAwJgACIAASXg");
	this.shape_448.setTransform(161.025,-83.7);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#D86061").s().p("A4EJPIAAydMAwJgABIAASfg");
	this.shape_449.setTransform(161.025,-83.675);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#D86061").s().p("A4EJUIAAymMAwJgABIAASng");
	this.shape_450.setTransform(161.025,-83.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#D86061").s().p("A4EJXIAAytMAwJgABIAASvg");
	this.shape_451.setTransform(161.025,-83.675);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#D86061").s().p("A4EJcIAAy2MAwJgACIAAS5g");
	this.shape_452.setTransform(161.025,-83.675);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#D86061").s().p("A4EJgIAAy/MAwJgABIAATBg");
	this.shape_453.setTransform(161.025,-83.7);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#D86061").s().p("A4EJkIAAzHMAwJgABIAATJg");
	this.shape_454.setTransform(161.025,-83.675);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#D86061").s().p("A4EJpIAAzQMAwJgACIAATTg");
	this.shape_455.setTransform(161.025,-83.675);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#D86061").s().p("A4EJtIAAzZMAwJgABIAATbg");
	this.shape_456.setTransform(161.025,-83.675);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#D86061").s().p("A4EJxIAAzhMAwJgABIAATjg");
	this.shape_457.setTransform(161.025,-83.675);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#D86061").s().p("A4EJ2IAAzqMAwJgACIAATtg");
	this.shape_458.setTransform(161.025,-83.675);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#D86061").s().p("A4EJ6IAAzyMAwJgACIAAT1g");
	this.shape_459.setTransform(161.025,-83.675);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#D86061").s().p("A4EJ+IAAz7MAwJgABIAAT9g");
	this.shape_460.setTransform(161.025,-83.675);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#D86061").s().p("A4EKCIAA0DMAwJgABIAAUFg");
	this.shape_461.setTransform(161.025,-83.675);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#D86061").s().p("A4EKHIAA0MMAwJgACIAAUPg");
	this.shape_462.setTransform(161.025,-83.675);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#D86061").s().p("A4EKLIAA0UMAwJgACIAAUXg");
	this.shape_463.setTransform(161.025,-83.675);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#D86061").s().p("A4EKPIAA0dMAwJgABIAAUfg");
	this.shape_464.setTransform(161.025,-83.675);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#D86061").s().p("A4EKUIAA0mMAwJgACIAAUpg");
	this.shape_465.setTransform(161.025,-83.675);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#D86061").s().p("A4EKYIAA0vMAwJgABIAAUxg");
	this.shape_466.setTransform(161.025,-83.65);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#D86061").s().p("A4EKcIAA03MAwJgABIAAU5g");
	this.shape_467.setTransform(161.025,-83.675);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#D86061").s().p("A4EKhIAA1AMAwJgACIAAVDg");
	this.shape_468.setTransform(161.025,-83.675);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#D86061").s().p("A4EKkIAA1HMAwJgACIAAVLg");
	this.shape_469.setTransform(161.025,-83.65);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#D86061").s().p("A4EKpIAA1QMAwJgACIAAVTg");
	this.shape_470.setTransform(161.025,-83.675);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#D86061").s().p("A4EKtIAA1ZMAwJgABIAAVbg");
	this.shape_471.setTransform(161.025,-83.65);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#D86061").s().p("A4EKyIAA1iMAwJgACIAAVlg");
	this.shape_472.setTransform(161.025,-83.675);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#D86061").s().p("A4EK2IAA1qMAwJgACIAAVtg");
	this.shape_473.setTransform(161.025,-83.675);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#D86061").s().p("A4EK6IAA1yMAwJgADIAAV3g");
	this.shape_474.setTransform(161.025,-83.65);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#D86061").s().p("A4EK/IAA18MAwJgACIAAV/g");
	this.shape_475.setTransform(161.025,-83.675);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#D86061").s().p("A4ELDIAA2EMAwJgACIAAWHg");
	this.shape_476.setTransform(161.025,-83.65);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#D86061").s().p("A4ELHIAA2NMAwJgABIAAWPg");
	this.shape_477.setTransform(161.025,-83.65);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#D86061").s().p("A4ELMIAA2VMAwJgADIAAWZg");
	this.shape_478.setTransform(161.025,-83.675);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#D86061").s().p("A4ELPIAA2dMAwJgACIAAWhg");
	this.shape_479.setTransform(161.025,-83.65);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#D86061").s().p("A4ELUIAA2mMAwJgADIAAWrg");
	this.shape_480.setTransform(161.025,-83.65);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#D86061").s().p("A4ELYIAA2vMAwJgACIAAWyg");
	this.shape_481.setTransform(161.025,-83.65);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#D86061").s().p("A4ELcIAA23MAwJgACIAAW7g");
	this.shape_482.setTransform(161.025,-83.65);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#D86061").s().p("A4ELhIAA3AMAwJgACIAAXDg");
	this.shape_483.setTransform(161.025,-83.675);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#D86061").s().p("A4ELlIAA3IMAwJgACIAAXMg");
	this.shape_484.setTransform(161.025,-83.65);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#D86061").s().p("A4ELqIAA3SMAwJgACIAAXVg");
	this.shape_485.setTransform(161.025,-83.65);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#D86061").s().p("A4ELtIAA3ZMAwJgACIAAXdg");
	this.shape_486.setTransform(161.025,-83.65);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#D86061").s().p("A4ELyIAA3iMAwJgADIAAXmg");
	this.shape_487.setTransform(161.025,-83.65);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#D86061").s().p("A4EL2IAA3rMAwJgACIAAXvg");
	this.shape_488.setTransform(161.025,-83.625);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#D86061").s().p("A4EL7IAA30MAwJgACIAAX3g");
	this.shape_489.setTransform(161.025,-83.65);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#D86061").s().p("A4EL/IAA38MAwJgACIAAX/g");
	this.shape_490.setTransform(161.025,-83.65);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#D86061").s().p("A4EMDIAA4EMAwJgADIAAYJg");
	this.shape_491.setTransform(161.025,-83.625);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#D86061").s().p("A4EMHIAA4NMAwJgACIAAYRg");
	this.shape_492.setTransform(161.025,-83.65);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#D86061").s().p("A4EMLIAA4VMAwJgACIAAYZg");
	this.shape_493.setTransform(161.025,-83.625);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#D86061").s().p("A4EMQIAA4eMAwJgACIAAYhg");
	this.shape_494.setTransform(161.025,-83.65);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#D86061").s().p("A4EMVIAA4nMAwJgADIAAYrg");
	this.shape_495.setTransform(161.025,-83.65);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#D86061").s().p("A4EMYIAA4vMAwJgACIAAYzg");
	this.shape_496.setTransform(161.025,-83.625);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#D86061").s().p("A4EMdIAA44MAwJgADIAAY9g");
	this.shape_497.setTransform(161.025,-83.65);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#D86061").s().p("A4EMhIAA5AMAwJgADIAAZFg");
	this.shape_498.setTransform(161.025,-83.625);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#D86061").s().p("A4EMlIAA5JMAwJgACIAAZNg");
	this.shape_499.setTransform(161.025,-83.625);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#D86061").s().p("A4EMqIAA5SMAwJgACIAAZVg");
	this.shape_500.setTransform(161.025,-83.65);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#D86061").s().p("A4EMuIAA5aMAwJgADIAAZfg");
	this.shape_501.setTransform(161.025,-83.625);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#D86061").s().p("A4EMyIAA5iMAwJgADIAAZng");
	this.shape_502.setTransform(161.025,-83.625);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#D86061").s().p("A4EM2IAA5rMAwJgACIAAZvg");
	this.shape_503.setTransform(161.025,-83.625);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#D86061").s().p("A4EM7IAA50MAwJgADIAAZ5g");
	this.shape_504.setTransform(161.025,-83.625);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#D86061").s().p("A4EM/IAA58MAwJgADIAAaBg");
	this.shape_505.setTransform(161.025,-83.65);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#D86061").s().p("A4ENDIAA6EMAwJgADIAAaJg");
	this.shape_506.setTransform(161.025,-83.625);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#D86061").s().p("A4ENIIAA6OMAwJgADIAAaTg");
	this.shape_507.setTransform(161.025,-83.625);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#D86061").s().p("A4ENMIAA6WMAwJgADIAAabg");
	this.shape_508.setTransform(161.025,-83.625);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#D86061").s().p("A4ENQIAA6eMAwJgADIAAajg");
	this.shape_509.setTransform(161.025,-83.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_410}]}).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).wait(1));

	// Vrstva_13
	this.instance_5 = new lib.Kruh1();
	this.instance_5.setTransform(314.35,-83.6,1.9435,1.9435,0,0,0,8.6,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:21.7,scaleY:3.8827,y:-84.2},99).wait(1));

	// merak
	this.Merak1Hodnota_text = new cjs.Text("180.00 l/day", "19px 'Arial'", "#141414");
	this.Merak1Hodnota_text.name = "Merak1Hodnota_text";
	this.Merak1Hodnota_text.textAlign = "center";
	this.Merak1Hodnota_text.lineHeight = 25;
	this.Merak1Hodnota_text.lineWidth = 110;
	this.Merak1Hodnota_text.parent = this;
	this.Merak1Hodnota_text.setTransform(271.8,-200.6,0.7646,0.7646);

	this.Merak1Nazev_text = new cjs.Text("Qef", "19px 'Arial'");
	this.Merak1Nazev_text.name = "Merak1Nazev_text";
	this.Merak1Nazev_text.textAlign = "center";
	this.Merak1Nazev_text.lineHeight = 24;
	this.Merak1Nazev_text.lineWidth = 87;
	this.Merak1Nazev_text.parent = this;
	this.Merak1Nazev_text.setTransform(271.757,-221.2,0.7646,0.7646);

	this.Merak1_anim = new lib.Merak();
	this.Merak1_anim.name = "Merak1_anim";
	this.Merak1_anim.setTransform(269.35,-208.55,0.7646,0.7646,0,0,0,47.6,47.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Merak1_anim},{t:this.Merak1Nazev_text},{t:this.Merak1Hodnota_text}]}).wait(100));

	// merka
	this.Merka1_anim = new lib.ValecGlomerulus();
	this.Merka1_anim.name = "Merka1_anim";
	this.Merka1_anim.setTransform(329.95,-133.85,0.6544,0.6544,0,0,180,28.4,77);

	this.timeline.addTween(cjs.Tween.get(this.Merka1_anim).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.2,-244.8,379.59999999999997,246.5);


(lib.trubkaMensi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// vrtulka
	this.Vrtulka2_anim = new lib.VrtulkaTocici1();
	this.Vrtulka2_anim.name = "Vrtulka2_anim";
	this.Vrtulka2_anim.setTransform(-648.35,-150.6,1.0558,1.0558,0,0,0,15.8,14.6);

	this.timeline.addTween(cjs.Tween.get(this.Vrtulka2_anim).wait(1));

	// Vrstva_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C65353").s().p("AATEiQgVgYgRgsQgkhdAAiBQAAiAAkhdQARgtAVgXQARgTAUgEIAAA6QgRADgNARQgMAQgOAkQgcBKAABrQAABrAcBJQAPAmALAPQANAVARACIAAA6QgTgEgSgTg");
	this.shape.setTransform(-739.975,-153.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// prekryv
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#802424").s().p("AgUE7QgZAAgWgZQgXgYgQgsQgkhZAAiFQAAiDAkhaQAQgsAXgYQAWgYAZAAICYAAQgsAugaA3QgeA/gFBIQgDArAGA5QAQCcBhCDIAAAFg");
	this.shape_1.setTransform(-747.775,-152.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// voda
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(120,203,239,0.6)").s().p("AMTD2IjIAAIhTAAIhrAAIkOAAIxeAAIAAnrIReAAIEOAAIBhAAIBdAAIDIAAICGAAIALAJQAOAOAKAVQAMAYAIAeQAQA9AABXQAACFgkBFQgIASgJAKQgJALgJAEg");
	this.shape_2.setTransform(-644.725,-152.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// dira
	this.instance = new lib.Path();
	this.instance.setTransform(-747.1,-147.4,0.8354,0.9212,-14.9411,0,0,7.6,7.2);
	this.instance.alpha = 0.4609;

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(-746.85,-150.35,0.9212,0.9595,-14.941,0,0,6.7,9.8);
	this.instance_1.alpha = 0.6484;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#8D2829").ss(0.6).p("AA5gfQAWAmgBAlQgCAlgXANQgYAOgfgTQgfgRgWgoQgWgmAAglQABglAYgNQAXgOAfASQAgASAXAog");
	this.shape_3.setTransform(-747.364,-150.0534,0.9213,0.9213,0,-14.9412,165.0588);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#92DFFF").s().p("AgCBZQgfgRgWgoQgWgmAAglQABglAYgNQAXgOAfASQAgASAXAoQAWAmgBAlQgCAlgXANQgKAGgLAAQgQAAgSgLg");
	this.shape_4.setTransform(-747.364,-150.0534,0.9213,0.9213,0,-14.9412,165.0588);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Vrstva_6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F9B620").ss(0.6).p("AuJAAIcSAA");
	this.shape_5.setTransform(-643.8,-178.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Vrstva_7
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F9B620").ss(0.6).p("AuKAAIcVAA");
	this.shape_6.setTransform(-643.625,-127.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Vrstva_8
	this.instance_2 = new lib.prumer();
	this.instance_2.setTransform(-734.25,-152.6,1.4414,1.4414,0,0,0,-7,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Vrstva_9
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CCFF").s().p("AMUEAIjIAAInMAAIwPAAIAAn/IQPAAIEOAAIC+AAIDIAAIB8AAIAAH/g");
	this.shape_7.setTransform(-644.775,-152.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// _Group__30
	this.instance_3 = new lib.Group_30();
	this.instance_3.setTransform(-740.2,-152.85,1.4414,1.4414,0,0,0,2.6,9.8);
	this.instance_3.alpha = 0.1289;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Vrstva_11
	this.instance_4 = new lib.Kruh2();
	this.instance_4.setTransform(-553.95,-152.6,1.4414,1.4414,0,0,0,7,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Vrstva_12
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D86061").s().p("AuLE6IAApzIcXAAIAAJzg");
	this.shape_8.setTransform(-643.775,-152.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Vrstva_13
	this.instance_5 = new lib.Kruh1();
	this.instance_5.setTransform(-553.95,-152.75,1.4414,1.4414,0,0,0,8.4,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// merak
	this.Merak2Hodnota_text = new cjs.Text("180.00 l/day", "19px 'Arial'", "#141414");
	this.Merak2Hodnota_text.name = "Merak2Hodnota_text";
	this.Merak2Hodnota_text.textAlign = "center";
	this.Merak2Hodnota_text.lineHeight = 25;
	this.Merak2Hodnota_text.lineWidth = 110;
	this.Merak2Hodnota_text.parent = this;
	this.Merak2Hodnota_text.setTransform(-711.95,-265.6,0.7324,0.7324);

	this.Merak2Nazev_text = new cjs.Text("Qef", "19px 'Arial'");
	this.Merak2Nazev_text.name = "Merak2Nazev_text";
	this.Merak2Nazev_text.textAlign = "center";
	this.Merak2Nazev_text.lineHeight = 24;
	this.Merak2Nazev_text.lineWidth = 87;
	this.Merak2Nazev_text.parent = this;
	this.Merak2Nazev_text.setTransform(-711.9454,-285.35,0.7324,0.7324);

	this.Merak2_anim = new lib.Merak();
	this.Merak2_anim.name = "Merak2_anim";
	this.Merak2_anim.setTransform(-714.3,-273.3,0.7324,0.7324,0,0,0,47.6,47.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Merak2_anim},{t:this.Merak2Nazev_text},{t:this.Merak2Hodnota_text}]}).wait(1));

	// merka
	this.Merka2_anim = new lib.ValecGlomerulus();
	this.Merka2_anim.name = "Merka2_anim";
	this.Merka2_anim.setTransform(-767.4,-192.8,0.6268,0.6268,0,0,0,28.4,76.9);

	this.timeline.addTween(cjs.Tween.get(this.Merka2_anim).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trubkaMensi, new cjs.Rectangle(-785.9,-307.9,244.39999999999998,186.49999999999997), null);


(lib.trubkaVetsiPozice = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.trubkaVetsi_anim = new lib.trubkaVetsi();
	this.trubkaVetsi_anim.name = "trubkaVetsi_anim";
	this.trubkaVetsi_anim.setTransform(-188.95,123.3,1,1,0,0,0,159.6,-121.5);

	this.timeline.addTween(cjs.Tween.get(this.trubkaVetsi_anim).to({y:272.8},99).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-378.8,0,379.8,353);


(lib.celek = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// trubkaVetsi
	this.trubkaVetsiPozice_anim = new lib.trubkaVetsiPozice();
	this.trubkaVetsiPozice_anim.name = "trubkaVetsiPozice_anim";
	this.trubkaVetsiPozice_anim.setTransform(158.25,-89,1,1,0,0,0,-189,123.3);

	this.timeline.addTween(cjs.Tween.get(this.trubkaVetsiPozice_anim).wait(1));

	// spojHorni
	this.spojDolni_anim = new lib.spojHorni();
	this.spojDolni_anim.name = "spojDolni_anim";
	this.spojDolni_anim.setTransform(-66.75,-55.1,1,1,0,0,0,-66.8,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.spojDolni_anim).wait(1));

	// spojDolni
	this.spojHorni_anim = new lib.spojHorni();
	this.spojHorni_anim.name = "spojHorni_anim";
	this.spojHorni_anim.setTransform(-66.75,106,1,1,0,180,0,-66.8,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.spojHorni_anim).wait(1));

	// trubkaMensi
	this.trubkaMensi_anim = new lib.trubkaMensi();
	this.trubkaMensi_anim.name = "trubkaMensi_anim";
	this.trubkaMensi_anim.setTransform(-227.95,-38.05,1,1,0,0,0,-663.8,-214.7);

	this.timeline.addTween(cjs.Tween.get(this.trubkaMensi_anim).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.celek, new cjs.Rectangle(-350.1,-212.3,698.2,396.70000000000005), null);


// stage content:
(lib.Trubky_voda_verze3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// celek
	this.instance = new lib.celek();
	this.instance.setTransform(400.95,324.8,1,1,0,0,0,-1.1,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(452,427,298.1,96.70000000000005);
// library properties:
lib.properties = {
	id: 'D3AD6851371BB340A0A245A425E54120',
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D3AD6851371BB340A0A245A425E54120'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;