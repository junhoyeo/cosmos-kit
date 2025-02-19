/// <reference types="react" />
import { WalletManager } from '@cosmos-kit/core';
import { UserDeviceInfoType, WalletRecordType } from '../types';
export declare const getModalContent: (walletManager: WalletManager, currentWalletData: WalletRecordType | undefined, userBrowserInfo: UserDeviceInfoType | undefined, walletsData: WalletRecordType[], modalReset: boolean, setModalReset: (v: boolean) => void) => JSX.Element;
