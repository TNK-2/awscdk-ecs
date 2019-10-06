import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Chapter1 = require('../lib/chapter1-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Chapter1.Chapter1Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});