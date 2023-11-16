

function L () {
    CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, CutebotProAngle.Angle90)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function F () {
    CutebotPro.runBlockCnt(1)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function half_f_end () {
    half_f()
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function DOMAZE_OLD () {
    F()
    L()
    F()
    R()
    F()
    R()
    F()
    L()
    F()
    L()
    F()
    F()
    R()
    half_f_end()
}
function half_f () {
    CutebotPro.runBlockCnt(0.5)
}
function DOMAZE (INSRUCTIONS: string, totaltime_ms: number) {
    let InstructionList = INSRUCTIONS.split("");
    let instructionEstimates: {[comlet: string]: number} = {
        'R': 4344,
        'L': 4616,
        'F': 3324,
        'f': 2004,
    };
    const letter_to_function: {[comlet: string]: Function} = {
        'R': R,
        'L': L,
        'F': F,
        'f': half_f,
        
    };
    for (let i = 0; i <= InstructionList.length - 1; i++) {
            movetime += instructionEstimates[InstructionList[i]]
        }
        waittime = totaltime_ms - movetime
        waittime_per_wait_inital = waittime / (InstructionList.length - 1)
        for (let j = 0; j <= InstructionList.length - 1; j++) {
            letter_to_function[InstructionList[j]]();
    basic.pause(waittime_per_wait_inital)
    }
}
function _75F () {
    CutebotPro.runBlockCnt(0.75)
}
function R () {
    CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, CutebotProAngle.Angle90)
}
function time_move () {
    SPIRIT = 2
    StartTime = control.millis()
    F(); F(); F(); F();
    TotalTime = control.millis() - StartTime
    while (true) {
        basic.showString(convertToText(TotalTime))
        basic.pause(1000)
    }
}
//Modify these 
// |
// |
// V
const INSRUCTIONS = "FFLFRFLLFF";
const TIME = 35000;
const ACTION = DOMAZE;
const ACTION_ARGS = [INSRUCTIONS, TIME];
// ~~~~~~~~~~~~~~~~~


let STARTSEQUENCE = 0
let TotalTime = 0
let StartTime = 0
let SPIRIT = 0
let waittime_per_wait_inital = 0
let waittime = 0
let movetime = 0
CutebotPro.setBlockCnt(50, CutebotProDistanceUnits.Cm)

music.play(music.stringPlayable("C E G C5 - - - - ", 1000), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (SPIRIT == 0) {
        CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0x00ff00)
        CutebotPro.colorLight(CutebotProRGBLight.RGBR, 0x0000ff)
        basic.pause(200)
        CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0x0000ff)
        CutebotPro.colorLight(CutebotProRGBLight.RGBR, 0x00ff00)
        basic.pause(200)
    }
    if (SPIRIT == 2) {
        CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0xff0000)
        CutebotPro.colorLight(CutebotProRGBLight.RGBR, 0x0000ff)
        basic.pause(200)
        CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0xffff00)
        CutebotPro.colorLight(CutebotProRGBLight.RGBR, 0x00ff00)
        basic.pause(200)
    }
})
basic.forever(function () { //handles SONAR 
    while (STARTSEQUENCE != 4) {
        let SONARTMP = CutebotPro.ultrasonic(SonarUnit.Centimeters);
        if (0 < SONARTMP && SONARTMP < 5) {
            STARTSEQUENCE = STARTSEQUENCE + 1
        } else {
            STARTSEQUENCE = 0
        }
        basic.showString(convertToText(CutebotPro.ultrasonic(SonarUnit.Centimeters)))
    }
    while (SPIRIT == 0) {
        basic.showString("NTSO NEW TRIER SCIENCE OLYMPIAD")
    }
    while (true) {
        basic.pause(5000)
    }
})
basic.forever(function () {
    if (STARTSEQUENCE == 4) {
        music.play(music.stringPlayable("D E F G E - C D ", 500), music.PlaybackMode.UntilDone)
        ACTION(INSRUCTIONS,TIME);
        music.play(music.stringPlayable("C - - C - C G G ", 750), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G G G G - - - - ", 750), music.PlaybackMode.UntilDone)
        STARTSEQUENCE = 0
        SPIRIT = 2
    }
})
