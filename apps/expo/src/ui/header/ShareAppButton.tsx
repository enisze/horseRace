import { FunctionComponent } from "react";
import { Share } from "react-native";
import { Icon } from "react-native-elements";

import { appLink } from "~/constants";
import { HorseRaceButton } from "~/ui/components/buttons/HorseRaceButton";

export const ShareAppButton: FunctionComponent = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "You should try this drinking app for fun and good times :)\n\n" +
          appLink,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <HorseRaceButton onPress={onShare}>
      <Icon type="entypo" name="share" color="white" size={24} />
    </HorseRaceButton>
  );
};
