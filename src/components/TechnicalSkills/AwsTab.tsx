import  aurora from "/aws_logos/aurora.png";
import  cloudformation from "/aws_logos/cloudformation.png";
import  cloudfront from "/aws_logos/cloudfront.png";
import  cloudtrail from "/aws_logos/cloudtrail.png";
import  cloudwatch from "/aws_logos/cloudwatch.png";
import  codebuild from "/aws_logos/codebuild.png";
import  dynamodb from "/aws_logos/dynamodb.png";
import  ec2 from "/aws_logos/ec2.png";
import  ecr from "/aws_logos/ecr.png";
import  ecs_fargate from "/aws_logos/ecs_fargate.png";
import  ecs from "/aws_logos/ecs.png";
import  elasticache from "/aws_logos/elasticache.png";
import  eventbridge from "/aws_logos/eventbridge.png";
import  iam from "/aws_logos/IAM.png";
import  kms from "/aws_logos/KMS.png";
import  lambda from "/aws_logos/lambda.png";
import  organizations from "/aws_logos/organizations.png";
import  rds from "/aws_logos/rds.png";
import  route53 from "/aws_logos/route53.png";
import  s3 from "/aws_logos/s3.png";
import  sns from "/aws_logos/sns.png";
import  sqs from "/aws_logos/sqs.png";

import { Tooltip } from 'flowbite-react';

export default function AwsTab() {
  const renderLogo = (serviceLogo: string, tooltip: string) => {
    return (
      <Tooltip content={tooltip}>
        <img src={serviceLogo} className={'w-24 h-auto hover:cursor-help'}></img>
      </Tooltip>
    )
  }
  return (
    <div className='grid grid-rows-4 gap-4'>
      <div className='grid grid-cols-6 justify-items-center'>
        {renderLogo(aurora, "Aurora")}
        {renderLogo(cloudformation, "Cloudformation")}
        {renderLogo(cloudfront, "Cloudfront")}
        {renderLogo(cloudtrail, "Cloudtrail")}
        {renderLogo(cloudwatch, "Cloudwatch")}
        {renderLogo(codebuild, "Code Build")}
      </div>
      <div className='grid grid-cols-6 justify-items-center'>
        {renderLogo(dynamodb, "Dynamodb")}
        {renderLogo(ec2, "EC2")}
        {renderLogo(ecr, "ECR")}
        {renderLogo(ecs_fargate, "ECS Fargate")}
        {renderLogo(ecs, "ECS")}
        {renderLogo(elasticache, "Elasticache")}
      </div>
      <div className='grid grid-cols-6 justify-items-center'>
        {renderLogo(eventbridge, "Event Bridge")}
        {renderLogo(iam, "IAM")}
        {renderLogo(kms, "KMS")}
        {renderLogo(lambda, "Lambda")}
        {renderLogo(organizations, "Organizations")}
        {renderLogo(rds, "RDS")}
      </div>
      <div className='grid  grid-cols-6 justify-items-center'>
        <span className='col-start-2'>
          {renderLogo(route53, "Route53")}
        </span>
        <span className='col-start-3'>
         {renderLogo(s3, "S3")}
        </span>
        <span className='col-start-4'>
          {renderLogo(sns, "SNS")}
        </span>
        <span className='col-start-5'>
          {renderLogo(sqs, "SQS")}
        </span>
      </div>
    </div>
  )
}

