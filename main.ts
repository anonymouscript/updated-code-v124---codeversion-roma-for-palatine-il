function L () {
    CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, CutebotProAngle.Angle90)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function F () {
    CutebotPro.runBlockCnt(1)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
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
    half_f()
}
function half_f () {
    CutebotPro.runBlockCnt(0.5)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function DOMAZE (INSRUCTIONS: string, totaltime: number) {
    InstructionList = INSRUCTIONS.split("FFRFLFf")
    let instructionEstimates: {[comlet: string]: number} = {
        'R': 1.5,
        'L': 1.5,
        'F': 5,
        'f': 2.5,
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
    waittime = totaltime - movetime
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
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function time_move () {
    StartTime = control.millis()
    F()
    while (true) {
        basic.showString(convertToText(control.millis() - StartTime))
    }
}
let SPIRIT = 0
let waittime_per_wait_inital = 0
let waittime = 0
let movetime = 0
let StartTime = 0
let InstructionList: string[] = []
StartTime = 0
let STARTSEQUENCE = 1
let SONAR = CutebotPro.ultrasonic(SonarUnit.Centimeters)
CutebotPro.setBlockCnt(50, CutebotProDistanceUnits.Cm)
music.play(music.stringPlayable("C E G C5 - - - - ", 1000), music.PlaybackMode.UntilDone)
basic.forever(function () {
    while (STARTSEQUENCE != 4) {
        if (SONAR < 5) {
            STARTSEQUENCE = STARTSEQUENCE + 1
        } else {
            STARTSEQUENCE = 0
        }
        basic.pause(1000)
    }
    if (SPIRIT == 0) {
        while (true) {
            basic.showString("NTSO NEW TRIER SCIENCE OLYMPIAD")
        }
    }
    while (true) {
        basic.pause(5000)
    }
})
basic.forever(function () {
    if (STARTSEQUENCE == 4) {
        music.play(music.stringPlayable("D E F G E - C D ", 500), music.PlaybackMode.UntilDone)
        time_move()
        music.play(music.stringPlayable("C - - C - C G G ", 750), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G G G G - - - - ", 750), music.PlaybackMode.UntilDone)
        STARTSEQUENCE = 0
        SPIRIT = 2
    }
})
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
