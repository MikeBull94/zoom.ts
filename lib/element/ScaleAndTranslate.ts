import { viewportSize } from '../browser/Document';
import { Bounds } from '../math/Bounds';
import { Vector2 } from '../math/Vector2';
import {
    scale,
    scale3d,
    translate,
    translate3d
} from './Transform';

export class ScaleAndTranslate {
    static centreOf(target: Vector2, bounds: Bounds): ScaleAndTranslate {
        let viewport = viewportSize(document);
        let cappedTarget = Vector2.min(viewport, target);
        let scale = cappedTarget.minDivisor(bounds.size);
        let translation = Bounds.centreTranslation(viewport, bounds, scale);
        return new ScaleAndTranslate(scale, translation);
    }

    private readonly scale: number;
    private readonly translation: Vector2;

    constructor(scale: number, translation: Vector2) {
        this.scale = scale;
        this.translation = translation;
    }

    toString2d(): string {
        return `${scale(this.scale)} ${translate(this.translation)}`;
    }

    toString3d(): string {
        return `${scale3d(this.scale)} ${translate3d(this.translation)}`;
    }
}
