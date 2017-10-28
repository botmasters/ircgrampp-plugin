
import semver from "semver";

export default class PluginBase {

    constructor(injector) {
        this.__injector = injector;
        this.initialize();
    }

    initialize() {}

    getCompatibleVersion() {
        throw new Error('You must to override this method');
    }

    checkVersion() {
        let compatibleVersion = this.getCompatibleVersion();
        return semver.satisfies(this.injector.version, compatibleVersion);
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

    static getDefaultOptions() {
        return {};
    }
}
