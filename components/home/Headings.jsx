import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import styles from './headings.style'
import { COLORS, SIZES } from '../../constants'

const Headings = () => {
  return (
    <View style={styles.headersContainer}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity>
            <Ionicons name='ios-grid' size={SIZES.xLarge} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings