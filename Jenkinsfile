pipeline {
  agent any


    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM',
                  branches: [[name: '*/main']],
                  userRemoteConfigs: [[url: 'https://github.com/mukteshj/smartui-cypress-sdk-sample.git']]])
      }
    }

    stage('Test') {
      steps {
        bat 'npm i @lambdatest/smartui-cli @lambdatest/cypress-driver cypress@v13'
        bat 'npx cypress verify'
        bat 'npx smartui config:create smartui-web.json'
        bat 'npx smartui --version'
        bat ' npx smartui --config smartui-web.json exec -- npx cypress run --spec "cypress/e2e/**/*.cy.js" --browser chrome --headless'
      }
    }
    stage('Report'){
    steps{
      lambdaTestReportPublisher 'automation'
    }
    }
  }
  }
