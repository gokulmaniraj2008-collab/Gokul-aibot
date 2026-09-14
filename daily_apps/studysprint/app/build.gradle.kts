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
        versionCode = 1
        versionName = "0.1.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
}
