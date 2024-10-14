import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CONTENT_WIDTH = SCREEN_WIDTH * 0.9;
const DELETE_WIDTH = 80;

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 70,
    backgroundColor: '#121212',
    width: '100%',
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Futura',
    marginLeft: 16,
    left: -5,
    top: -4,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2C',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    width: CONTENT_WIDTH,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  noteContent: {
    flex: 1,
  },
  noteText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  noteDate: {
    fontSize: 14,
    color: '#A0A0A0',
    marginTop: 8,
  },
  noNotesText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#A0A0A0',
    width: CONTENT_WIDTH,
  },
  deleteButton: {
    backgroundColor: '#FF453A',
    justifyContent: 'center',
    alignItems: 'center',
    width: DELETE_WIDTH,
    height: 80,
    borderRadius: 8,
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
});