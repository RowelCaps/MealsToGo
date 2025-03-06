import React, { useContext } from "react";
import styled from "styled-components";
import { List, Avatar } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer= styled.View`
  align-items: center;
`;

export function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={100} icon="human" backgroundColor="#2182BD" />
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
}
