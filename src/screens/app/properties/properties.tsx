import React, { Fragment, useEffect } from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';
import {
  FlatlistHeader,
  HomeTabs,
  PropertyCard,
  LiveCameraCard,
} from '../../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { appImages, colors, HP, WP } from '../../../utils';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

interface PropertiesProps { }

const Properties = (props: PropertiesProps) => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    console.log('[TabIndex]', tabIndex);
  }, [tabIndex]);

  const onPressCard = () => {
    navigation.navigate("PropertiesStack", {
      screen: "PropertyDetail"
    })
  }

  const renderTabs = () => (
    <HomeTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
  );

  const renderFlatlistHeader = (titleLeft: String, titleRight: String) => (
    <FlatlistHeader titleLeft={titleLeft} titleRight={titleRight} />
  );

  const renderPropertyFlatlist = (data: any) => {
    return (
      <View>
        <FlatList
          data={data}
          numColumns={2}
          contentContainerStyle={{ paddingLeft: WP('3') }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }: any) => (
            <PropertyCard title={item.title} image={item.image} onPressCard={onPressCard} />
          )}
        />
      </View>
    );
  };

  const renderCameraFlatlist = (data: any) => {
    return (
      <View>
        <FlatList
          data={data}
          numColumns={2}
          contentContainerStyle={{ paddingLeft: WP('3') }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }: any) => (
            <LiveCameraCard title={item.title} image={item.image} />
          )}
        />
      </View>
    );
  };

  const renderPropretiesTab = () => {
    return (
      <Fragment>
        {renderFlatlistHeader('Properties List (7)', '')}
        {renderPropertyFlatlist(favorites)}
      </Fragment>
    );
  };
  const renderLiveCamerasTab = () => {
    return (
      <Fragment>
        {renderFlatlistHeader('Central Suites Tower Live Cameras (6)', '')}
        {renderCameraFlatlist(favorites)}
      </Fragment>
    );
  };

  return (
    <KeyboardAwareScrollView
      //  resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={{ paddingBottom: HP('5') }}
      scrollEnabled={true}
      style={{
        height: Dimensions.get('window').height,
        //backgroundColor: '#4c69a5',
      }}
      automaticallyAdjustContentInsets={false}
    >
      <View style={{ marginTop: HP('2') }}>
        {renderTabs()}
        {tabIndex === 1 ? renderLiveCamerasTab() : renderPropretiesTab()}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Properties;
