import { StyleSheet } from 'react-native';

const lightWriteNotesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: '#000000',
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
    color: '#000000',
  },
  icon: {
    color: '#000000',
  },
});

export default lightWriteNotesStyles;