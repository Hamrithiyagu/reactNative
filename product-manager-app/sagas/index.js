import {productWatchers} from "./product";
import {storeProductWatcher} from "./store";
import {searchWatchers} from './search';

export default function* rootWatchers() {
    yield [productWatchers(), storeProductWatcher(),searchWatchers()]
}