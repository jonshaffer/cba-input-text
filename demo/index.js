import angular from 'angular';

import component from './demo.component';

import inputText from '../src/index';

import './index.scss';

angular.module('demoApp', [inputText.name])
    .component('demo', component);
