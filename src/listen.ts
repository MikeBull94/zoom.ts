import {
    Config,
    DEFAULT_CONFIG
} from './config';
import { ready } from './dom/document';
import { ZoomListener } from './event';
import { detectFeatures } from './style';
import { Zoom } from './Zoom';

/**
 * Adds a {@link ZoomListener} for <code>click</code> events on the{@link Document#body}.
 */
export function listen(config: Config = DEFAULT_CONFIG): void {
    ready(() => {
        let body = document.body;
        let features = detectFeatures(body.style);

        let listener = new ZoomListener(config, features, dom => {
            let zoom = Zoom.create(dom, features, config);
            zoom.expand();
        });

        body.addEventListener('click', listener);
    });
}
