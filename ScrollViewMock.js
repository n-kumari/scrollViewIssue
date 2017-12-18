/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

 // Source: https://github.com/facebook/react-native/blob/11a2a35c63ae68de46482f5cd25271f8b0fb5ad4/Libraries/Components/ScrollView/__mocks__/ScrollViewMock.js

/* eslint-env jest */

'use strict';

declare var jest: any;

const React = require('React');
const View = require('View');

const requireNativeComponent = require('requireNativeComponent');

const RCTScrollView = requireNativeComponent('RCTScrollView');

const ScrollViewComponent = jest.genMockFromModule('ScrollView');

class ScrollViewMock extends ScrollViewComponent {
  render() {
    return (
      <RCTScrollView {...this.props}>
        {this.props.refreshControl}
        <View>
          {this.props.children}
        </View>
      </RCTScrollView>
    );
  }
}

module.exports = ScrollViewMock;