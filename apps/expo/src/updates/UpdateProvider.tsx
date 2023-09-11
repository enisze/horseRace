import type { FunctionComponent, PropsWithChildren } from "react";
import { channel } from "expo-updates";

import { UpdateProviderDownloader } from "./UpdateDownloader";

export type UpdateProviderProps = PropsWithChildren;

export const UpdateProvider: FunctionComponent<UpdateProviderProps> = (
  props,
) => {
  /**
   * The channel name of the current build, if configured for use with EAS Update. Null otherwise.
   *
   * Will be 'mock' when running tests
   */
  if (!channel || channel === "mock") {
    return <>{props.children}</>;
  }

  return <UpdateProviderDownloader {...props} />;
};
