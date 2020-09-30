/* eslint-disable */
import { expect } from 'chai'
import CreateKeyframe from "./CreateKeyframe";

describe('CreateKeyframe.js', () => {
    it('Can accept arguments { start, end, handler }', () => {
        let item = CreateKeyframe(0, 100, () => {});
        expect(item.start).to.equal(0);
        expect(item.end).to.equal(100);
        expect(typeof item.handler).to.equal('function');
    });

    it('Can accept just two arguments { start, handler }', () => {
        let item = CreateKeyframe(999,  () => {});
        expect(item.start).to.equal(999);
        expect(item.end).to.equal(null);
        expect(typeof item.handler).to.equal('function');
    });

    it('Can accept just a handler func { handler }', () => {
        let item = CreateKeyframe(() => {});
        expect(item.start).to.equal(0);
        expect(item.end).to.equal(null);
        expect(typeof item.handler).to.equal('function');
    });
});
