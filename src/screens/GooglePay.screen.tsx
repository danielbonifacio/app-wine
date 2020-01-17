import { StyledView } from '@sdk/components';
import Navbar from '@components/Navbar';
import TangranAnimation from '@components/TangranAnimation';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform } from 'react-native'
import { GooglePay, RequestDataType, AllowedCardNetworkType, AllowedCardAuthMethodsType } from 'react-native-google-pay'

const allowedCardNetworks: AllowedCardNetworkType[] = ['VISA', 'MASTERCARD']
const allowedCardAuthMethods: AllowedCardAuthMethodsType[] = ['PAN_ONLY', 'CRYPTOGRAM_3DS']

const requestData: RequestDataType = {
  cardPaymentMethod: {
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      gateway: 'example',
      gatewayMerchantId: 'exampleGatewayMerchantId',
    },
    allowedCardNetworks,
    allowedCardAuthMethods,
  },
  transaction: {
    totalPrice: '123',
    totalPriceStatus: 'FINAL',
    currencyCode: 'BRL', // RUB
  },
  merchantName: 'Example Merchant',
}

const stripeRequestData: RequestDataType = {
  cardPaymentMethod: {
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      gateway: 'stripe',
      gatewayMerchantId: '',
      stripe: {
        publishableKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
        version: '2018-11-08',
      },
    },
    allowedCardNetworks,
    allowedCardAuthMethods,
  },
  transaction: {
    totalPrice: '123',
    totalPriceStatus: 'FINAL',
    currencyCode: 'BRL', // RUB
  },
  merchantName: 'Example Merchant',
}

const GooglePayScreen: React.FC = () => {

  useEffect(() => {
    if (Platform.OS === 'android') {
      GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST)
    }
  }, []);

  const payWithGooglePay = () => {
    // Check if Google Pay is available
    GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods)
      .then((ready) => {
        if (ready) {
          // Request payment token
          GooglePay.requestPayment(requestData)
            .then(handleSuccess)
            .catch(handleError)
        }
      })
  }

  const payWithStripeGooglePay = () => {
    // Check if Google Pay is available
    GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods)
      .then((ready) => {
        if (ready) {
          // Request payment token
          GooglePay.requestPayment(stripeRequestData)
            .then(handleSuccess)
            .catch(handleError)
        }
      })
  }

  const handleSuccess = (token: string) => {
    // Send a token to your payment gateway
    Alert.alert('Success', `token: ${token}`)
  }

  const handleError = (error: any) => Alert.alert('Error', `${error.code}\n${error.message}`)

  return (
    <>
      <Navbar title={'Google Pay'} />
      <StyledView>
        <TangranAnimation />
        <StyledView
          width={'100%'}
          height={'100%'}
        >
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to react-native-google-pay!</Text>
            <TouchableOpacity style={styles.button} onPress={payWithGooglePay}>
              <Text style={styles.buttonText}>Buy with Google Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.stripe]} onPress={payWithStripeGooglePay}>
              <Text style={styles.buttonText}>Buy with Stripe Google Pay</Text>
            </TouchableOpacity>
          </View>
        </StyledView>
      </StyledView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 18,
    color: '#222',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#34a853',
    borderRadius: 8,
    height: 56,
    paddingHorizontal: 24,
    justifyContent: 'center',
    marginVertical: 8,
  },
  stripe: {
    backgroundColor: '#556cd6',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default GooglePayScreen;
