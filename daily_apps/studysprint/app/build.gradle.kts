plugins {
    id("com.android.application")
}

android {
    namespace = "ai.gokul.studysprint"
    compileSdk = 36

    defaultConfig {
        applicationId = "ai.gokul.studysprint"
        minSdk = 24
        targetSdk = 36
        versionCode = 2
        versionName = "0.1.1"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
}
