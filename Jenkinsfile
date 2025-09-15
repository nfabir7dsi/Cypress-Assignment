pipeline {
    agent {
        docker {
            image 'cypress/base:16.13.0'   // Node + Cypress image
            args '-u root:root'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'cypress-with-pom', url: 'https://github.com/nfabir7dsi/Cypress-Assignment.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
}
