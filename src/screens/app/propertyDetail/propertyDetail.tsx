import { ImageBackground, SafeAreaView, ScrollView, Image, TouchableOpacity, View, Text, FlatList } from 'react-native'
import { appImages, HP, WP } from '../../../utils'
import { styles } from './styles'
import React, { useState } from 'react'
import { UserHeader } from '../../../components'
import { useNavigation } from '@react-navigation/native'

const PropertyDetail = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <ImageBackground
          source={appImages.propertyImage}
          style={styles.backgroundImg}
          borderBottomLeftRadius={WP(5)}
          borderBottomRightRadius={WP(5)}
          resizeMode="cover">
          <TouchableOpacity onPress={() => navigation.goBack()}
            style={styles.btnContainer} activeOpacity={0.8}>
            <Image source={appImages.back} style={styles.backImg} />
          </TouchableOpacity>
        </ImageBackground>

        {/* User Info and location views */}
        <View style={styles.userContainer}>
          <UserHeader
            title={"Philip Martin"}
            description={"Tenants"}
            icon={appImages.share} />
          <View style={styles.location}>
            <Image source={appImages.location} style={styles.locationIcon} />
            <Text style={styles.locationText}>{"163 E 81st, NY"}</Text>
          </View>

          {/* Details */}
          <View style={styles.detailsContainer}>
            <Text style={styles.detail}>{"Details"}</Text>
            <FlatList
              data={[1, 2, 3, 4]}
              renderItem={({ item }) => (
                <View style={styles.amenitiesView}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image
                      style={styles.amenitiesImg}
                      source={appImages.areaIcon}
                    />
                    <View style={{ marginStart: WP(5) }}>
                      <Text>Area</Text>
                      <Text>60 m</Text>
                    </View>
                  </View>
                </View>
              )}
              numColumns={2}
            />
          </View>

          <View style={{ marginTop: HP(2) }}>
            <Text style={[styles.detail]}>Descriptions</Text>
            <Text style={{ color: "#828282", marginTop: HP(1) }}>
              At the center of this Appartment is  fully equipped cooks kitchen with custom cabinets, stone counter-tops,
            </Text>
          </View>

          <View style={{ marginTop: HP(2) }}>
            <Text style={[styles.detail]}>Featured Images</Text>
            <FlatList showsHorizontalScrollIndicator={false}
              data={[1, 2, 3, 4]}
              renderItem={({ item }) => (
                <View style={{
                  width: WP(32),
                  height: HP(14),
                  backgroundColor: '#F5F5F5',
                  margin: WP(1),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: HP(1)
                }}>
                  <Image
                    style={{
                      width: WP(32),
                      height: HP(14), resizeMode: 'cover',
                      borderRadius: WP(2),

                    }}
                    source={appImages.propertyImage}
                  />
                </View>
              )}
              horizontal
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PropertyDetail
