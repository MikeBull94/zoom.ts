import { ready } from './browser/document';
import { Features } from './browser/features';
import {
    Config,
    DEFAULT_CONFIG
} from './config';
import { ZoomDOM } from './dom/zoom-dom';
import { ClickZoomableListener } from './event/click-zoomable-listener';
import { ZoomInstance } from './instance/zoom-instance';
import { ZoomInstant } from './instance/zoom-instant';
import { ZoomTransition } from './instance/zoom-transition';

/**
 * Adds a {@link ClickZoomableListener} for click events on the {@link Document#body}.
 */
export function listen(config: Config = DEFAULT_CONFIG): void {
    ready(() => {
        let body = document.body;
        let features = Features.of(body.style);

        let startZoom = (dom: ZoomDOM) => {
            let instance: ZoomInstance;

            if (features.hasTransform && features.hasTransitions) {
                instance = new ZoomTransition(features, config, dom);
            } else {
                instance = new ZoomInstant(features, config, dom);
            }

            instance.expand();
        };

        body.addEventListener('click', new ClickZoomableListener(startZoom));
    });
}

export * from './config';
export * from './browser/document';
export * from './browser/features';
export * from './browser/vendor';
export * from './browser/window';
export * from './dom/clone';
export * from './dom/container';
export * from './dom/image';
export * from './dom/overlay';
export * from './dom/wrapper';
export * from './dom/zoom-dom';
export * from './element/element';
export * from './element/scale-and-translate';
export * from './element/style';
export * from './element/transform';
export * from './element/transition';
export * from './event/add-class-listener';
export * from './event/click-zoomable-listener';
export * from './event/collapse-listener';
export * from './event/esc-key-listener';
export * from './event/expand-listener';
export * from './event/resize-listener';
export * from './event/scroll-listener';
export * from './event/show-clone-listener';
export * from './event/util';
export * from './instance/zoom-instance';
export * from './instance/zoom-instant';
export * from './instance/zoom-transition';
export * from './math/bounds';
export * from './math/unit';
export * from './math/vector2';