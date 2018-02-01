class DemoController {
    constructor() {
        this.newValue = 'write a value here';
    }
}

export default {
    template: require('./demo.component.html'),
    controller: DemoController
};
