import { StyleSheet } from 'react-native';

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    paddingTop: 80,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
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
    backgroundColor: '#F0F0F0',
    borderWidth: 3,
    borderColor: '#000000',
  },
  abbreviationContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  abbreviationText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
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
    color: '#000000',
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
    backgroundColor: '#F0F0F0',
    borderWidth: 3,
    borderColor: '#000000',
  },
  engageButtonText: {
    color: '#000000',
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
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});