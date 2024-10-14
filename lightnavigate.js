import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 70,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Futura',
    marginLeft: 50,
  },
  mapPlaceholder: {
    width: width,
    height: height * 0.4,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    fontSize: 18,
    color: '#000000',
  },
  inputContainer: {
    padding: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  destinationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    color: '#000000',
  },
  locationText: {
    fontSize: 16,
    color: '#000000',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#000000',
  },
  navigateButton: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#000000',
  },
  navigateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});