
export default class PluginBase {

    constructor(injector) {
        this.__injector = injector;
        this.initialize();
    }

    initialize() {
    }

    getDefaultOptions() {
        return {};
    }

    get injector() {
        return this.__injector;
    }

    get config() {
        return this.injector.getConfig();
    }

    get debug() {
        return this.injector.debug;
    }

    get Promise() {
        return this.injector.Promise;
    }
}
