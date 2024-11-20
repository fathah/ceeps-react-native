import 'react-native-gesture-handler'; // Import at the very top
import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import NavBar from '../components/widgets/NavBar';
import BroadCast from './broadcast/BroadCast';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './home/Home';
import { globalstyle } from '../styles/global';





const MainComps = ({ navigation }:{navigation:any}) => {

  const [curTab, setCurTab] = useState(0);

  const TABS= [
    { label: 'Moments', component: <Home navigation={navigation}/>, icon: <View></View> },
    { label: 'Broadcast', component: <BroadCast/>, icon: <View></View> },
    { label: 'Whisper', component: <Home navigation={navigation}/>, icon: <View></View> },
    { label: 'Wall', component: <Home navigation={navigation}/>, icon: <View></View> },
  
    
  ];

  return (
    <SafeAreaView style={globalstyle.scaffold}>
    <StatusBar />
    <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          { TABS[curTab].component }
        </View>
        <NavBar
          current={curTab}
          setTab={setCurTab}
          tabs={TABS}
        />
        </View>
  </SafeAreaView>
      
    );
}

export default MainComps;