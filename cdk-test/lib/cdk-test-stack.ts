import cdk = require('@aws-cdk/core');
import ec2 = require("@aws-cdk/aws-ec2");
import ecs = require("@aws-cdk/aws-ecs");
import ecs_patterns = require("@aws-cdk/aws-ecs-patterns");

export class CdkTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "CdkTestVpc", {
      maxAzs: 2
    });

    const cluster = new ecs.Cluster(this, "CdkTestCluster", {
      vpc: vpc,
      clusterName: 'CdkTestCluster',
    });

    const taskDefinition = new ecs.FargateTaskDefinition(this, 'TaskDefinition');
    const container = taskDefinition.addContainer('CdkTestContainer', {
      image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
    });
    container.addPortMappings({
      containerPort: 80
    });

    new ecs_patterns.ApplicationLoadBalancedFargateService(this, "CdkTestFargateService", {
      cluster: cluster,
      cpu: 512,
      desiredCount: 1,
      memoryLimitMiB: 1024,
      taskDefinition: taskDefinition
    })

  }
}
