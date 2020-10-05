/* eslint-disable */
import {shallowMount, mount, createLocalVue} from '@vue/test-utils';
import {expect} from "chai";
import Animation from "./Animation";
import AnimationDataFactory from "./AnimationDataFactory";

let animationPlayer;
let when = (str, callback) => describe(`when ${str}`, callback);
let and = (str, callback) => describe(`and ${str}`, callback);

let use = beforeEach;

/** ****************
 * SETUP
 **************** */

const mockAction = (start, end) => {
    return [
        {
            start,
            end,
            handler({context, tween}) {
                context.defaultPosition.x = tween.number(0, 1);
            },
        },
    ];
}


// Creates an animation that ends
const DefaultAnimation = (start = 0, end = 1000, repeat = false) => new Promise((resolve) => {
    const actions = AnimationDataFactory.createFromUserAnimation('mock-action', mockAction(start, end));
    animationPlayer = new Animation('mock-anim', actions, repeat);
    resolve();
});

// Creates finite animation that repeats
const RepeatAnimation = () => DefaultAnimation(0, 1000, true);

// Creates an animation with no end
const InfiniteAnimation = () => DefaultAnimation(0, null, false);


/** ****************
 * TESTS
 **************** */
describe('KeyframeAnimation.js', () => {

    describe("Constructor", () => {
        beforeEach(DefaultAnimation);

        it('can be instantiated', () => {
            expect(animationPlayer.name).to.equal('mock-anim');
            expect(animationPlayer.repeat).to.equal(false);
            expect(animationPlayer.timesRepeated).to.equal(0);
            expect(animationPlayer.animation.name).to.equal('mock-action');
            expect(animationPlayer.animation.start).to.equal(0);
            expect(animationPlayer.animation.end).to.equal(1000);
            expect(animationPlayer.animation.repeat).to.equal(false);
        });

        it('defaults forceFinalFrame property to be null', () => {
            expect(animationPlayer.forceFinalFrame).to.equal(null);
        });
    });

    describe('setFinalFrame()', () => {
        beforeEach(DefaultAnimation);

        it('sets forceFinalFrame property', () => {
            expect(animationPlayer.getFinalFrame()).to.equal(1000);
            animationPlayer.setFinalFrame(55);
            expect(animationPlayer.getFinalFrame()).to.equal(55);
            expect(animationPlayer.forceFinalFrame).to.equal(55);
        });
    });

    describe('getFinalFrame()', () => {

        describe('When Animation has an end frame', () => {
            beforeEach(DefaultAnimation);

            it('returns default end time using getFinalFrame()', () => {
                expect(animationPlayer.getFinalFrame()).to.equal(1000);
                expect(animationPlayer.forceFinalFrame).to.equal(null);
            });

            it('returns forceFrame value if set', () => {
                animationPlayer.setFinalFrame(6);
                expect(animationPlayer.getFinalFrame()).to.equal(6);
                expect(animationPlayer.getFinalFrame()).to.not.equal(1000);
                expect(animationPlayer.animation.end).to.equal(1000);
            });
        });

        describe('When Animation run time is infinite', () => {
            beforeEach(InfiniteAnimation);

            it('returns null if action does not have end frame', () => {
                expect(animationPlayer.getFinalFrame()).to.equal(null);
            });

            it('returns forceFrame value if set', () => {
                animationPlayer.setFinalFrame(12);
                expect(animationPlayer.getFinalFrame()).to.equal(12);
                expect(animationPlayer.animation.end).to.equal(null);
            });
        });
    });

    describe('calculateAnimationKeyframe when forceRepeat = false', () => {
        let forceRepeat = false;
        when("Animation is infinite", () => {
            use(InfiniteAnimation);
            it("returns the provided keyframe argument", () => {
                expect(animationPlayer.calculateAnimationKeyframe(1400, forceRepeat)).to.equal(1400);
            });
        });

        when("Animation has an end frame", () => { use(DefaultAnimation);
            and("animation repeat val is false", () => {
                and("keyframe is less than end frame", () => {
                    it("returns the provided keyframe argument", () => {
                        expect(animationPlayer.calculateAnimationKeyframe(400, forceRepeat)).to.equal(400);
                    });
                });
            });
        });

        when("Animation has an end frame", () => { use(DefaultAnimation);
            and("animation repeat val is false", () => {
                and("keyframe is equal to end frame", () => {
                    it("returns null", () => {
                        expect(animationPlayer.calculateAnimationKeyframe(1000, forceRepeat)).to.equal(null);
                    });
                });
            });
        });

        when("Animation has an end frame", () => {
            use(DefaultAnimation);
            and("animation repeat val is false", () => {
                it("returns null keyframe if keyframe > than end frame", () => {
                    expect(animationPlayer.calculateAnimationKeyframe(1002, forceRepeat)).to.equal(null);
                });

                it("returns keyframe keyframe if keyframe < than end frame", () => {
                    expect(animationPlayer.calculateAnimationKeyframe(100, forceRepeat)).to.equal(100);
                });
            });
        });

        when("Animation has an end frame", () => {
            use(RepeatAnimation);
            and("animation repeat val is true", () => {
                it("returns keyframe arg if keyframe < end", () => {
                    expect(animationPlayer.calculateAnimationKeyframe(400, forceRepeat)).to.equal(400);
                });

                it("returns keyframe % endFrame if keyframe > endFrame", () => {
                    expect(animationPlayer.calculateAnimationKeyframe(1002, forceRepeat)).to.equal(2);
                });
            });
        });
    });

    describe('calculateAnimationKeyframe when forceRepeat = true', () => {
        let forceRepeat = true;
        when("Animation is infinite", () => {
            use(InfiniteAnimation);
            it("returns the provided keyframe argument", () => {
                expect(animationPlayer.calculateAnimationKeyframe(1400, forceRepeat)).to.equal(1400);
                expect(animationPlayer.calculateAnimationKeyframe(2, forceRepeat)).to.equal(2);
                expect(animationPlayer.calculateAnimationKeyframe(30, forceRepeat)).to.equal(30);
                expect(animationPlayer.calculateAnimationKeyframe(99999, forceRepeat)).to.equal(99999);
            });
        });

        when("Animation has an end frame", () => {
            use(DefaultAnimation);
            and("animation repeat val is false", () => {
                it("returns keyframe % endframe", () => {
                    expect(animationPlayer.calculateAnimationKeyframe(1002, forceRepeat)).to.equal(2);
                });

                it("returns keyframe keyframe if keyframe < than end frame", () => {
                    expect(animationPlayer.calculateAnimationKeyframe(100, forceRepeat)).to.equal(100);
                });
            });
        });

        when("Animation has an end frame", () => {
            use(RepeatAnimation);
            and("animation repeat val is true", () => {
                it("returns keyframe arg if keyframe < end", () => {
                    expect(animationPlayer.calculateAnimationKeyframe(400, forceRepeat)).to.equal(400);
                });

                it("returns keyframe % endFrame if keyframe > endFrame", () => {
                    expect(animationPlayer.calculateAnimationKeyframe(1002, forceRepeat)).to.equal(2);
                });
            });
        });
    });

    describe('calculateAnimationKeyframe when forceFinalFrame is set', () => {
        when("Animation is infinite", () => {
            use(InfiniteAnimation);
            it("returns the provided keyframe argument if less than forced frame", () => {
                animationPlayer.setFinalFrame(401);
                expect(animationPlayer.calculateAnimationKeyframe(400, false)).to.equal(400);
                expect(animationPlayer.calculateAnimationKeyframe(0, false)).to.equal(0);
                expect(animationPlayer.calculateAnimationKeyframe(99, false)).to.equal(99);
            });

            it("returns null if keyframe >= forceFinalFrame", () => {
                animationPlayer.setFinalFrame(401);
                expect(animationPlayer.calculateAnimationKeyframe(401, false)).to.equal(null);
                expect(animationPlayer.calculateAnimationKeyframe(789, false)).to.equal(null);
                expect(animationPlayer.calculateAnimationKeyframe(Number.MAX_SAFE_INTEGER, false)).to.equal(null);
            });
        });

        when("Animation has an end frame", () => {
            use(DefaultAnimation);
            and("animation repeat val is false", () => {
                it("returns the provided keyframe argument if keyframe < forceFinalFrame", () => {
                    animationPlayer.setFinalFrame(401);
                    expect(animationPlayer.calculateAnimationKeyframe(400, false)).to.equal(400);
                    expect(animationPlayer.calculateAnimationKeyframe(0, false)).to.equal(0);
                    expect(animationPlayer.calculateAnimationKeyframe(99, false)).to.equal(99);
                });

                it("returns null if keyframe >= forceFinalFrame", () => {
                    animationPlayer.setFinalFrame(401);
                    expect(animationPlayer.calculateAnimationKeyframe(401, false)).to.equal(null);
                    expect(animationPlayer.calculateAnimationKeyframe(789, false)).to.equal(null);
                    expect(animationPlayer.calculateAnimationKeyframe(Number.MAX_SAFE_INTEGER, false)).to.equal(null);
                });

                it("returns null if keyframe > endFrame but less than forceFinalFrame", () => {
                    animationPlayer.setFinalFrame(2000);
                    expect(animationPlayer.calculateAnimationKeyframe(1001, false)).to.equal(null);
                    expect(animationPlayer.calculateAnimationKeyframe(1999, false)).to.equal(null);
                    expect(animationPlayer.calculateAnimationKeyframe(2000, false)).to.equal(null);
                });

                it("returns null if keyframe = endFrame but less than forceFinalFrame", () => {
                    animationPlayer.setFinalFrame(2000);
                    expect(animationPlayer.calculateAnimationKeyframe(1000, false)).to.equal(null);
                });
            });
        });

        when("Animation has an end frame", () => {
            and("animation repeat val is true", () => {
                use(RepeatAnimation);

                it("returns the provided keyframe argument if keyframe < forceFinalFrame", () => {
                    animationPlayer.setFinalFrame(401);
                    expect(animationPlayer.calculateAnimationKeyframe(400, false)).to.equal(400);
                    expect(animationPlayer.calculateAnimationKeyframe(0, false)).to.equal(0);
                    expect(animationPlayer.calculateAnimationKeyframe(99, false)).to.equal(99);
                });

                it("returns keyframe % finalframe  if keyframe >= forceFinalFrame", () => {
                    animationPlayer.setFinalFrame(401);
                    expect(animationPlayer.calculateAnimationKeyframe(401, false)).to.equal(0);
                    expect(animationPlayer.calculateAnimationKeyframe(789, false)).to.equal(388);
                    expect(animationPlayer.calculateAnimationKeyframe(Number.MAX_SAFE_INTEGER, false)).to.equal(159);
                });

                it("returns keyframe % endframe if keyframe >= endFrame but less than forceFinalFrame", () => {
                    animationPlayer.setFinalFrame(2000);
                    expect(animationPlayer.calculateAnimationKeyframe(1000, false)).to.equal(0);
                    expect(animationPlayer.calculateAnimationKeyframe(1001, false)).to.equal(1);
                    expect(animationPlayer.calculateAnimationKeyframe(1999, false)).to.equal(999);
                    expect(animationPlayer.calculateAnimationKeyframe(2000, false)).to.equal(0);
                });
            });
        });
    });
});
