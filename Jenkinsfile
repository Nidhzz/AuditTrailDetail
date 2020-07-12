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
      rc = command "npm run build"
      if (rc != 0) {
        error 'Build generation failed.'
      }      
    }
    
        stage('Deploying to firebase') {
        rc = bat returnStatus: true, script: "\"${fb}\"firebase deploy --token 1//0gWS9ZqAab6ifCgYIARAAGBASNwF-L9Ir8DpzLdf72n3LPXsylMyokp7gdjtw03_PWeG95bcykeg514BDNYpfp59DAO4i5hpeAzU"

    //   rc = command "firebase deploy"
      if (rc != 0) {
        error 'Deployment failed.'
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
