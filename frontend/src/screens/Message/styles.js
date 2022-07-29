import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#313131',
},
avatar: {
    height: 44,
    width: 44,
    borderRadius: 22,
    marginHorizontal: 7,
},
header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 10,
    margin: 15,
},
name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
},
status: {
    color: '#fff',
    fontSize: 13,
},
content: {
    backgroundColor: '#212121',
    flex: 1,
},
footer: {
    borderTopColor: '#444',
    borderTopWidth: 1,
},
input: {
    height: 40,
    borderColor: '#444',
    backgroundColor: '#414141',
    borderWidth: 1,
    borderRadius: 40,
    marginHorizontal: 20,
    marginVertical: 7,
    paddingLeft: 12,
    flex: 1,
    fontSize: 14,
},
titleConteiner:{
    backgroundColor: '#414141',
    alignSelf: 'center',
    marginTop: 12,
    paddingVertical: 3,
    paddingHorizontal: 12,
    borderRadius: 12,
},
sectionTitle:{
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
},
forMe:{
    backgroundColor: '#262d31',
    paddng: 10,
    marginVertical: 10,
    maxWidth: width*0.8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: 20,
},
fromMe:{
    backgroundColor: '#056162',
    paddng: 10,
    marginVertical: 10,
    maxWidth: width*0.8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: width*0.2 - 20,
},
msgTxt:{
    fontSize: 16,
    color: '#fff',
},
hour:{
    fontSize: 11,
    color: '#aaa',
    textAlign: 'right',
},
});