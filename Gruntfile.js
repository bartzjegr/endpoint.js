/**
 Copyright 2016 Booz Allen Hamilton

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

module.exports = function(grunt) {
    'use strict';

    var config = {
        lint: grunt.file.readJSON('lint.json'),
        pkg: grunt.file.readJSON('package.json')
    };

    require('load-grunt-config')(grunt, {
        config: config,
        jitGrunt: {
            staticMappings: {
                express: 'grunt-express-server'
            }
        }
    });

    require('time-grunt')(grunt);
    require('./grunt/tasks/docs-pdf')(grunt, config);
    require('./grunt/tasks/selenium')(grunt);
};