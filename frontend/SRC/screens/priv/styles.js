import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161618',
    padding: 8,
  },

  myBox: {
    backgroundColor: '#212124',
    width: '60%',
    height: '7%',
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
    marginTop: 10,
  },

  myText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#f5ecfa',
    padding: 15,
  },

  buttonPrive: {
    backgroundColor: '#F5ECFA',
    width: '40%',
    height: '70%',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 5,
    margin: 10,
  },

  buttonPubli: {
    backgroundColor: '#212124',
    width: '40%',
    height: '70%',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 5,
    margin: 10,
  },

  priveText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 7,
  },

  publiText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F5ECFA',
    padding: 7,
  },

  addButton: {
    backgroundColor: '#991AD4',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: '80%',
    marginTop: 30,
  },

  addstyle: {
    fontSize: 25,
    padding: 15,
    fontWeight: 'bold',
    color: '#F5ECFA',
    alignSelf: 'center',
    margin: -10,
  },

  msgBox: {
    width: 371,
    height: 71,
    backgroundColor: '#333',
    margin: 3,
    borderRadius: 8,
    borderBottomColor: '#444',
    flexDirection: 'row',
  },
});