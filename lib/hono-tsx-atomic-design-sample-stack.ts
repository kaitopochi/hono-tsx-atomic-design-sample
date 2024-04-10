import { Construct } from "constructs";
import { Stack, StackProps } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { join } from "path";

export class HonoTsxAtomicDesignSampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Node.jsのランタイムを使用したLambda関数の定義
    const honoLambda = new NodejsFunction(this, "HonoLambda", {
      runtime: Runtime.NODEJS_20_X, // Node.js 20.x ランタイムを使用
      handler: "handler", // ハンドラー関数の指定
      entry: join(__dirname, "../src/lambdas/login-handler.tsx"), // Lambda関数のエントリーポイント
      environment: {
        MSW_STATUS: "enabled", // 環境変数の設定（本番環境では 'disabled' に設定）
      },
    });

    // Lambda関数をエンドポイントとして公開するAPI Gatewayの定義
    new LambdaRestApi(this, "Endpoint", {
      handler: honoLambda, // Lambda関数を指定
    });
  }
}
