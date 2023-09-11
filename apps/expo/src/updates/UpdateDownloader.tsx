import type { FunctionComponent, PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import {
  checkForUpdateAsync,
  fetchUpdateAsync,
  reloadAsync,
} from "expo-updates";

import { withTimeout } from "./UpdateHelpers";
import { UpdateLoading } from "./UpdateLoading";

export type UpdateProviderDownloaderProps = PropsWithChildren;

export const UpdateProviderDownloader: FunctionComponent<
  UpdateProviderDownloaderProps
> = ({ children }) => {
  const [isUpdateAvailable, setUpdateIsAvailable] = useState<
    boolean | undefined
  >(undefined);

  useEffect(() => {
    const checkForUpdate = async () => {
      try {
        const result = await withTimeout(5000)(checkForUpdateAsync());

        setUpdateIsAvailable(result.isAvailable ?? false);
      } catch (error: unknown) {
        console.log("Error while checking for update:", error);
        setUpdateIsAvailable(false);
      }
    };
    checkForUpdate();
  }, []);

  useEffect(() => {
    const downloadUpdateAndReloadApp = async () => {
      try {
        const result = await withTimeout(5000)(fetchUpdateAsync());
        if (result.isNew) {
          await reloadAsync();
        } else {
          setUpdateIsAvailable(false);
        }
      } catch (error: unknown) {
        console.log("Error while installing update:", error);
        setUpdateIsAvailable(false);
      }
    };

    if (isUpdateAvailable) {
      downloadUpdateAndReloadApp();
    }
  }, [isUpdateAvailable]);

  if (isUpdateAvailable == null) {
    return <UpdateLoading />;
  }

  if (isUpdateAvailable) {
    return <UpdateLoading />;
  }

  return <>{children}</>;
};
