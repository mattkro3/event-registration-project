node {
    
    stage('Checkout') {
        git branch: 'main', url: 'https://github.com/mattkro3/tldp-server-node.git'
    }
    
    stage('Install Dependencies') {
        sh 'npm install'
    }
    
    stage('Run') {
        sh 'node server &'
    }
    
    stage('Postman Tests') {
        sh 'npx newman run Customer.postman_collection.json'
        sh 'npx newman run Event.postman_collection.json'
        sh 'npx newman run Registration.postman_collection.json'
    }
}