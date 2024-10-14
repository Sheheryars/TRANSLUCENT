import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CONTENT_WIDTH = SCREEN_WIDTH * 0.9;
const DELETE_WIDTH = 80;

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Futura',
    marginLeft: 16,
    left: -5,
    top: -4,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    width: CONTENT_WIDTH,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  noteContent: {
    flex: 1,
  },
  noteText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  noteDate: {
    fontSize: 14,
    color: 'gray',
    marginTop: 8,
  },
  noNotesText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'gray',
    width: CONTENT_WIDTH,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
    width: DELETE_WIDTH,
    height: 80,
    borderRadius: 8,
    borderColor: '#000000',
    borderWidth: 1,
  },
});