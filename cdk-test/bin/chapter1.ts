#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { Chapter1Stack } from '../lib/chapter1-stack';

const app = new cdk.App();
new Chapter1Stack(app, 'Chapter1Stack');
