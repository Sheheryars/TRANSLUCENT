import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 70,
    backgroundColor: '#121212',
  },
  backButton: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Futura',
    marginLeft: 50,
  },
  mapPlaceholder: {
    width: width,
    height: height * 0.4,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    fontSize: 18,
    color: '#FFFFFF',
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
    color: '#FFFFFF',
  },
  locationText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#FFFFFF',
  },
  navigateButton: {
    backgroundColor: '#2C2C2C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  navigateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});