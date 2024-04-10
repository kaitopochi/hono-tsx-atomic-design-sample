#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { HonoTsxAtomicDesignSampleStack } from "../lib/hono-tsx-atomic-design-sample-stack";

const app = new App();
new HonoTsxAtomicDesignSampleStack(app, "HonoTsxAtomicDesignSampleStack");
