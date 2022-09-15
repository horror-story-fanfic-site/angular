pipeline {
	agent any
	
	environment{
		JENKINS_NODE_COOKIE = 'dontkillmeplease'
    }
	
	stages {
		stage('Clean our current workspace') {
            steps {
              cleanWs()
            }
        }
		stage('Reclone our github repo') {
           steps {
				script{
					try {
						sh "rm -r angular"
						echo 'Directory found, and deleted'
					} catch (all) {
						echo 'No directory exists'
					}
				}
				sh "git clone https://github.com/revature-2206-social-capstone/angular.git"
           }
        }
        stage ("Build my project") {
			steps{
				echo 'Building right now'
                                  	sh script: '''cd ./angular/social-media-angular
							pwd
							ls
							npm install
							ng build
							'''
			}
		}
        stage('Destroy Old Server') {
            steps {
                script {
                    try {
                        // kill any running instances
                        sh 'kill $(lsof -t -i:4200)'
                    } catch (all) {
                        // if it fails that should mean a server wasn't already running
                        echo 'No server was already running'
                    }
                }
            }
        }
        stage('Start New Server!') {
            steps {
                script {
                     sh 'nohup http-server ./angular/social-media-angular/dist/social-media-angular -p 4200 &'
                }
            }
        }
	}
}
