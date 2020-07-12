#!groovy
import groovy.json.JsonSlurperClassic
node {
    // -------------------------------------------------------------------------
    // Check out code from source control.
    // -------------------------------------------------------------------------
        def fb = tool 'fb'

    stage('checkout source') {
        checkout scm
    }
  
    stage('Installing Dependacies') {
      rc = command "npm install"
      if (rc != 0) {
        error 'Dependencies installation failed.'
      }      
    }
    stage('Generate Build') {
      rc = command "npm run ng -- build"
      if (rc != 0) {
        error 'Build generation failed.'
      }      
    }
           
}



def command(script) {
    if (isUnix()) {
        return sh(returnStatus: true, script: script);
    } else {
        return bat(returnStatus: true, script: script);
    }
}
