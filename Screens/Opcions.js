import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import AvatarImage from '../Images/avatar.png'


const Opcions = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    // Lògica per desar els canvis
    setIsEditing(false);
  };

  const handleLogout = () => {
    // Lògica per tancar la sessió
  };

  return (
    <View>
      <Image 
                    style={{width:'50%', height:'50%'}}
                    source={AvatarImage}  
                />
      <TextInput
        placeholder="Usuari"
        value={isEditing ? newUsername : username}
        onChangeText={(text) => (isEditing ? setNewUsername(text) : setUsername(text))}
        editable={isEditing}
      />
      <TextInput
        placeholder="Contrasenya"
        secureTextEntry
        value={isEditing ? newPassword : password}
        onChangeText={(text) => (isEditing ? setNewPassword(text) : setPassword(text))}
        editable={isEditing}
      />
      {isEditing ? (
        <Button title="Desa Canvis" onPress={handleSaveChanges} />
      ) : (
        <>
          <Button title="Edita Perfil" onPress={handleEditProfile} />
          <Button title="Tanca Sessió" onPress={handleLogout} />
        </>
      )}
    </View>
  );
};

export default Opcions;
