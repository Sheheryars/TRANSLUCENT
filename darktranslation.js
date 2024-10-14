import { StyleSheet } from 'react-native';

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    paddingTop: 80,
    backgroundColor: '#121212',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Futura',
    marginLeft: 56,
  },
  translationBlock: {
    position: 'absolute',
    top: '25%',
    left: 20,
    right: 20,
    maxHeight: 400,
  },
  translationBox: {
    borderRadius: 10,
    padding: 20,
    maxHeight: 400,
    backgroundColor: '#2C2C2C',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  abbreviationContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  abbreviationText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  arrowContainer: {
    paddingHorizontal: 45,
  },
  translationHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  leftLanguageList: {
    marginRight: 0,
    marginLeft: 35,
  },
  languageList: {
    flex: 1,
    marginHorizontal: 10,
    maxHeight: 300,
  },
  languageOption: {
    fontSize: 15,
    marginVertical: 8,
    color: '#FFFFFF',
  },
  engageButtonContainer: {
    position: 'absolute',
    bottom: 170,
    left: 20,
    right: 20,
    alignItems: 'center',
    width: '90%',
  },
  engageButton: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#2C2C2C',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  engageButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  messageText: {
    position: 'absolute',
    bottom: 120,
    left: 20,
    right: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});