import 'react-native-gesture-handler'; // Import at the very top
import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Home from './home';
import BroadCast from './broadcast';
import {globalstyle} from '@/styles/global';
import NavBar from '@/components/widgets/NavBar';

const MainComps = ({navigation}: {navigation: any}) => {
  const [curTab, setCurTab] = useState(0);

  const TABS = [
    {
      label: 'Moments',
      component: <Home navigation={navigation} />,
      icon: 'animation',
    },
    {label: 'Broadcast', component: <BroadCast />, icon: 'broadcast'},
    {
      label: 'Whisper',
      component: <Home navigation={navigation} />,
      icon: 'android-messages',
    },
    {
      label: 'Wall',
      component: <Home navigation={navigation} />,
      icon: 'book-open-outline',
    },
  ];

  return (
    <SafeAreaView style={globalstyle.scaffold}>
      <StatusBar />
      <View style={globalstyle.flex}>
        <View style={globalstyle.flex}>{TABS[curTab].component}</View>
        <NavBar current={curTab} setTab={setCurTab} tabs={TABS} />
      </View>
    </SafeAreaView>
  );
};

export default MainComps;
