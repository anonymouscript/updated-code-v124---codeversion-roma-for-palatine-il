def f():
    CutebotPro.run_block_cnt(1)
def F():
    CutebotPro.run_block_cnt(2)
def b():
    CutebotPro.run_block_cnt(1)
def B():
    CutebotPro.run_block_cnt(2)
def R():
    CutebotPro.trolley_steering(CutebotProTurn.RIGHT_IN_PLACE, CutebotProAngle.ANGLE90)
CutebotPro.set_block_cnt(25, CutebotProDistanceUnits.CM)
F()
F()

def on_forever():
    R()
    f()
basic.forever(on_forever)
