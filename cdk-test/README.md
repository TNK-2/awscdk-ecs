# １. AWSCDKの基礎概念と環境構築

## はじめに

今回はAWSCDKを用いてvpcを使用したネットワークの構築とセキュリティグループの作成を行います。

この連載ではAWSCDKを用いたaws環境構築の基本を学びます。  
この連載を通じてDockerを使用したアプリケーションの実行・コンテナオーケストレーション環境と、  
それらのCI・CD環境を構築します。  

前提知識としてtypescriptの基本的な読み書きと、awsの基礎を理解していることを前提としております。  
typescriptとawsそのものの解説は割愛させていただきます。

## 連載記事一覧

[連載記事一覧]()

## 前提環境

以下のバージョンのnodejsとtypescriptがインストールされていることが前提です。

```
・Node.js >= 8.11.x
・TypeScript => 2.7
・AWSのCredentailの設定(AWS-CLIの初期設定ができていたらOK)
　　→CredentailはとりあえずAdministratorAccessにしとくことをお勧めします。くれぐれも取り扱いには注意。
```

## AWSCDKとは

[公式](https://aws.amazon.com/jp/cdk/)によると

```
AWS クラウド開発キット (AWS CDK) は、使い慣れたプログラミング言語を使用してクラウドアプリケーションリソースをモデル化およびプロビジョニングするためのオープンソースのソフトウェア開発フレームワークです。
```

つまるところ、、プログラミング言語でAWS環境の定義・構築ができるフレームワーク。

## AWSCDKの環境構築

以下のコマンドで。

```
$ npm install -g aws-cdk

```
インストールされているか以下で確認.
```
$ cdk --version
```

## 基礎知識

CDKの単位は App / Stack / Construct に分かれています。

```
・App
　　実行可能なプログラム
　　CloudFormation(以下CFn)テンプレートに生成とデプロイに利用
・Stack
　　デプロイ可能な単位
　　リージョンとアカウントを保持
・Construct
　　AWSリソースを表現
　　階層的なツリー構造を構成可能
```

## 初期設定

以下のコマンドでcdk環境の初期化をしましょう。  
「cdk init」でcdkでコードを書く雛形が完成します。

```
$ mkdir cdk-test
$ cd cdk-test
$ cdk init app --language=typescript
```

## 基本コマンド

以下がcdkの基本操作コマンドです。今回は特に使用しません。  
次回以降実際にcdkを使用してawsに環境を構築していきますが、構築後は「cdk destroy」することをお忘れなく。

```
// デプロイ
$ cdk deploy

// スタックを指定してデプロイ
$ cdk deploy ${StackName} 

// CloudFormationのテンプレートファイル生成
$ cdk synth

// 差分を確認
$ cdk diff

// 破壊
$ cdk destroy
```

