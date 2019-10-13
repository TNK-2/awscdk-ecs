import cdk = require('@aws-cdk/core');
import ec2 = require('@aws-cdk/aws-ec2')
import { Bucket } from "@aws-cdk/aws-s3"

export class CdkTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "CdkTest", {
      maxAzs: 3
    });

    // Create S3 Bucket
    new Bucket(this, id, {
      bucketName: "ishizuka-bucket",
    })
  }
}
