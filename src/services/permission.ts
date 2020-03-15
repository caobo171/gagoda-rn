import { PermissionsAndroid, Platform } from 'react-native';

export const requestReadStoragePermission = async () => {
    if(Platform.OS !== 'android') return true; 
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: 'Photos Permissions',
                message:
                    'We need to access your files !',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true
        } else {
            return false
        }
    } catch (err) {
        return false
    }
}

export const requestCameraPermission = async () => {
    if(Platform.OS !== 'android') return true; 
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Photos Permissions',
                message:
                    'We need to access your camera !',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true
        } else {
            return false
        }
    } catch (err) {
        return false
    }
}