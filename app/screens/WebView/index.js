import React, { useRef, useCallback } from 'react';
import { BackHandler, ScrollView, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { styles } from './styles';

const App = () => {
  const webViewRef = useRef(null);

  const handleBack = useCallback(() => {
    if (canGoBack && webViewRef.current && !(currentUrl == link)) {
      webViewRef.current.goBack();
    }
    return true;
  }, [canGoBack, link, currentUrl]);

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
          try {
            setCurrentUrl(navState.url);
            navChange(navState.url);
          } catch (e) {
            console.log('ERROR2: ', e);
          }
        }}
        allowFileAccess={true}
        scalesPageToFit={true}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={(event) => {
          setLoading(false);
          if (currentUrl !== link) {
            setCanGoBack(event.nativeEvent.canGoBack);
          } else {
            setCanGoBack(false);
          }
        }}
        setSupportMultipleWindows={false}
      />
      {isLoadong && <ActivityIndicator color="#234356" size="large" style={styles.loading} />}
    </>
  );
};

export default App;
