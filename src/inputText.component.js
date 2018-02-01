import controller from './inputText.controller';

/**
 * @ngdoc
 * @name inputText
 * @restrict E
 */

export default {
    name: 'inputText',
    obj: {
        template: require('./inputText.component.html'),
        controller,
        bindings: {
            value: '='
        }
    }
};
