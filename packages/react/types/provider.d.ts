import { AssetList, Chain } from '@chain-registry/types';
import { EndpointOptions, SignerOptions, StorageOptions, ViewOptions, WalletManager, WalletOption } from '@cosmos-kit/core';
import { WalletModalProps } from '@cosmos-kit/core';
import React, { ReactNode } from 'react';
export declare const walletContext: React.Context<{
    walletManager: WalletManager;
}>;
export declare const WalletProvider: ({ chains, assetLists, wallets, walletModal, signerOptions, viewOptions, endpointOptions, storageOptions, children, }: {
    chains: Chain[];
    assetLists: AssetList[];
    wallets: WalletOption[];
    walletModal?: ({ isOpen, setOpen }: WalletModalProps) => JSX.Element;
    signerOptions?: SignerOptions;
    viewOptions?: ViewOptions;
    endpointOptions?: EndpointOptions;
    storageOptions?: StorageOptions;
    children: ReactNode;
}) => JSX.Element;
