import { StyleSheet } from 'react-native';

const darkWriteNotesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 60,
    backgroundColor: '#121212',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  backButton: {
    padding: 8,
  },
  saveButton: {
    padding: 8,
  },
  input: {
    flex: 1,
    padding: 20,
    fontSize: 18,
    textAlignVertical: 'top',
    color: '#FFFFFF',
  },
  icon: {
    color: '#FFFFFF',
  },
});

export default darkWriteNotesStyles;