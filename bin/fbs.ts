#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FbsStack } from '../lib/fbs-stack';

const app = new cdk.App();
new FbsStack(app, 'FbsStack', {

});