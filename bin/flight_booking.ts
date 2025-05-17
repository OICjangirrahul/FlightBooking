#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { FlightBookingStack } from '../lib/flight_booking-stack';

const app = new cdk.App();
new FlightBookingStack(app, 'FlightBookingStack', {

});